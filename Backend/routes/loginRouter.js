const express = require('express');

const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../config');
const generator = require('generate-password');
const sendPassNodemailer = require('../Services/passwordNodemailer');
const jwtMiddleware = require('../Services/jwtMiddleware');


router.get('/', jwtMiddleware, (req, res, next) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).json({ flash: err.message });
    } else {
      res.json(results);
    }
  });
});

router.post('/signin', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(400).json({ message: info.message });
    const token = jwt.sign(JSON.stringify(user), 'agp_secret');
    const message = 'User sign in!';
    return res.json({ user, token, message });
  })(req, res);
});

router.post('/signup', (req, res, next) => {
  const { email, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  const formData = [email, hash];
  connection.query('INSERT INTO users (email, password) VALUES (?, ?)', formData, (err, results) => {
    if (err) res.status(500).json({ flash: err.message });
    else res.status(200).json({ flash: 'User has been signed up!' });
  });
});

router.put('/forgot-password', (req, res, next) => {
  const formData = req.body;

  const newPassword = generator.generate({
    length: 10,
    numbers: true,
  });

  formData.hash = newPassword;
  const hash = bcrypt.hashSync(newPassword, 10);

  connection.query('UPDATE users SET password = ? WHERE email = ?', [hash, formData.email], (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql,
      });
    }
    if (results.changedRows === 0) {
      res.status(404).send({ message: 'User not found' });
    } else {
      sendPassNodemailer(formData);
      res.status(200).send(results);
    }
  });

});

router.post('/change-password', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(400).json({ message: info.message });
    return res.json({ message: 'password correct' });
  })(req, res);
});


router.put('/update-password', (req, res, next) => {
  const userEmail = req.body.email;
  const hash = bcrypt.hashSync(req.body.password, 10);

  connection.query('UPDATE users SET password = ? WHERE email = ?', [hash, userEmail], (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql,
      });
    }
    res.status(200).send(results);
  });
});


module.exports = router;
