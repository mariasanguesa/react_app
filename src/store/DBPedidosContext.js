import React from 'react';

const DBPedidosContext = React.createContext({
    url:'https://react-app-1c2eb-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json'
});

export default DBPedidosContext;