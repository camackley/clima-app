const axios = require('axios');
const colors = require('colors');
////////////////////////////////////////////////
const argv = require ('./config/yargs.js').argv;
const lugar = require ( './lugar/lugar.js');
const clima = require ( './clima/clima.js');
/////////////////////////////////////////////////

lugar.getLugar( argv.direccion )
  .then( resp =>{
      var direccion= resp.direccion;
      var lat = resp.lat;
      var lng = resp.lng;

  clima.getClima (  lat, lng )
        .then ( resp =>{
          temp=resp-273.15

          if(temp >= 27 ){
          console.log(colors.yellow(`la temperatura en${direccion} es de ${temp}°C`));
        }else if( temp <= 15){
            console.log(colors.blue(`la temperatura en ${direccion} es de ${temp}°C`));
        }else{
          console.log(colors.green(`la temperatura en ${direccion} es de ${temp}°C`));
        }

        })
        .catch( err => console.log(colors.red(`no se encontro un clima para laRE ciudad "${argv.direccion}"`)));
  })
  .catch(err => console.log(colors.red(`no se encontro un clima para la ciudad "${argv.direccion}" `)))
