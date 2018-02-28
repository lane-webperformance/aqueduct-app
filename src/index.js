'use strict';

const ReactDOM = require('react-dom');
const e = require('react').createElement;

const App = require('legion-aqueduct');

console.log(App);

function main() {
  const root = document.createElement('div');
  root.id = 'root';
  root.classList.add('root');
  document.querySelector('body').appendChild(root);

  ReactDOM.render(e(App, {}), document.querySelector('#root'));
}

document.addEventListener('DOMContentLoaded', () => {
  main();
});
