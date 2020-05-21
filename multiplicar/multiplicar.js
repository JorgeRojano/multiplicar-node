
// Requires 

const fs = require('fs');

const colors = require('colors');

let listarTabla = (base, limite) =>{
    
    console.log('============'.green)
    console.log(`Tabla del ${base}`.green)
    console.log('============'.green)

    for(let i = 0; i <= limite; i++){
        console.log(`${base} * ${i} = ${base * i}`) 
    }
    
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        
        if (!Number(base)){
            reject('No es un número');
            return;
        }
        
        let data ='';

        for(let i = 0; i <= limite; i++){
           data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
          if (err){
              reject(err)
          }else{
              resolve(`tablas/tabla-${base}.txt`)
          }
              
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}



