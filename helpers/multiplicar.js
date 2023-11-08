const colors = require('colors');
const fs = require('fs');

const crearArchio = async(base=5, lsitar =false, hasta=10)=>{
   try {
    
    let salida = '';
    let salidaimpresion ='';

    for(let i =1;i<=hasta;i++)
        {
          salida+=`${base} ${'X'.green} ${i} ${'='.green} ${base*i}\n`;
          salidaimpresion += `${base} X ${i} = ${base*i}\n`;      
        }

          if(lsitar){
          console.log('==============='.green);
          console.log('tabla'.green, colors.blue(base));
          console.log('==============='.green);
          console.log(salida);

        }
    
     fs.writeFileSync(`./salida/tabla-${base}.txt`,salidaimpresion );
    return (`tabla-${base}.txt `);
   } catch (error) {
    throw error;
   }
   
}
  
module.exports = {
    crearArchio
}