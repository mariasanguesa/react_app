import React from 'react';

const DBProductosContext = React.createContext({
    url:'https://react-app-1c2eb-default-rtdb.europe-west1.firebasedatabase.app/productos.json'
});

export default DBProductosContext;