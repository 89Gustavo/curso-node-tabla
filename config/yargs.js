const { option } = require('yargs');
const argv = require('yargs')
  .option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    desc:'es la basedela tabla de multiplicar'
  })
  .option('l',{
    alias:'lista',
    type:'boolean',
    //demandOption:true,
    default:false,
    desc:'es la llave para mostrar la lista'
  })
  .option('h',{
    alias:'hasta',
    type:'number',
    //demandOption:true,
    default:10,
    desc:'crear la tabla con la cantidad deseada'
  })
  .check((argv,options)=>{
      if(isNaN(argv.b)){
        throw 'la base tine que ser un numero';
      }
      return true;

  })
.argv;

module.exports = argv;
