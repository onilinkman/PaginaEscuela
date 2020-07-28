//const element=document.createElement('h1')

//element.innerText='hola a todos'

//const conteiner=document.getElementById('root')

//conteiner.appendChild(element)

import React  from 'react';

import ReactDOM from 'react-dom';

const element=<h1>Hola a todos desde react</h1>

const conteiner=document.getElementById('root')

//ReactDOM.render(___que___,___donde___)

ReactDOM.render(element,conteiner)