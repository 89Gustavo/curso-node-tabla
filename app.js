const {crearArchio} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');



console.clear();


crearArchio(argv.b, argv.l, argv.h)
  .then(nombreArchivo=>console.log(nombreArchivo.rainbow,'creado'))
  .catch(err => console.log(err));