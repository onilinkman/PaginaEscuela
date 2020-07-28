//const element=document.createElement('h1')

//element.innerText='hola a todos'

//const conteiner=document.getElementById('root')

//conteiner.appendChild(element)

import React  from 'react';

import ReactDOM from 'react-dom';

//const element=<h1>Hola a todos desde react</h1>
//const jsx=<h1>Hola desde react</h1>
/*const element=React.createElement('a',
      {href:'https://www.google.com'},
       'Ir a Google'
)*/
const nombre='Christian'
//const element=React.createElement('h1',{}, `hola mi nombre es ${2+2}`)
//const sum=()=>6+4
//const jsx=<h1>hola aqui con jsx soy {nombre} {sum()}</h1>
const nombreCol='colegio san agustin'
const jsx=(
  <div>
    <h1>Sistema de {nombreCol}</h1>
    <h2>aqui veremos cosas</h2>
  </div>
)
const conteiner=document.getElementById('root')

//ReactDOM.render(___que___,___donde___)

ReactDOM.render(jsx,conteiner)