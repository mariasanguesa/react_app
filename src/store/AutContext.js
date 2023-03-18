import React from 'react';

const AutContext = React.createContext({
    login:  false,
    url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAz2len4LT2BmdNFZEQqzUF1j3hB-xtUsw'
});

export default AutContext;