import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

export const UserContext = createContext();

function UserContextProvider(props) {
  const [user, setUser] = useState();
  const [auth, setAuth] = useState(true);

  // const history = useHistory();

  const { children } = props;

  useEffect(() => {
    axios.get('/verify-token')
      .then((response) => {
        setUser(response.data.user);
        setAuth(true);
      })
      .catch(() => setAuth(false));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, auth, setAuth }}>
      { children }
    </UserContext.Provider>
  );
}

export default UserContextProvider;
