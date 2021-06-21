import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// HTML dentro do JS é conhecido como JSX (Javascript com XML)
// Neste caso é TSX pois estamos utilizando Typescript

// Cada pedaço da tela é um componente, cada componente do react é uma função.

// Propriedade: informações que passamos para um componente se comportar de maneira diferente, como os atributos das tags html.

// Estado: uma informação mantida por um componente de dentro do React. Sempre que alguma informação for ter seu valor alterado, ou seja, quando alguma informação NÃO permanece com o mesmo valor durante todo o uso da aplicação, isso é um estado.