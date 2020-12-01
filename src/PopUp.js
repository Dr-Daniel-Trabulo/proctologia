import React, { useEffect, useState } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import PropTypes from 'prop-types';

const PopUp = (props) => {
  const { flashInput, typeMessage } = props;

  const [flash, setFlash] = useState(flashInput);

  // typeMessage values: error, warning, success, info

  useEffect(() => {
    setFlash(flashInput);
  }, [flashInput]);

  const handleClose = () => {
    setFlash('');
  };

  return (
    <div>
      <Snackbar
        open={flash !== ''}
        message={flash}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert variant="filled" onClose={handleClose} severity={typeMessage}>
          {flash}
        </Alert>
      </Snackbar>
    </div>
  );
};

PopUp.propTypes = {
  flashInput: PropTypes.string.isRequired,
  typeMessage: PropTypes.string.isRequired,
};

export default PopUp;
