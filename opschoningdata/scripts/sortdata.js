import {data} from '../input/input.js';
let newDataArray = [];

// console.log(stringToArray(data))
// console.log(fixCoordinates(stringToArray(data)));
fixCoordinates(stringToArray(data));

function stringToArray(string){
    return  string.split('\n');
}

//deze functie zorgt voor het opschonen van de vuile data
function fixCoordinates(geo){
  /*for(let item of geo){
    if(!isNumber(item)){
      if(item.startsWith("(")){
        //dit haalt de haakjes weg van de item
        newDataArray.push(item.replace(/[()]/g, ""));
      }
    }
    if(item.includes("°")){
      // Als je in deze if statement komt dan is het item in DMS formaat genoteerd
      let dms = item.split(/[^\d\w\.]+/);
      let lat = convertDMS(dms[0], dms[1], dms[2], dms[3]);
      let long = convertDMS(dms[4], dms[5], dms[6], dms[7]);
      // Door de kracht van javascript word door latlong een string omdat de komma ook als een string geconcat word
      const latlong = lat + "," +  long;
      newDataArray.push(latlong);
    }
    if(isNumber(item) && !item.includes("°")){
      // als het niet in dms formaat is en als het een getal is dan is hij gewoon goed.
      newDataArray.push(item);
    }
  }*/
  const newData = geo.map(item => {
    if(!isNumber(item)){
      if(item.startsWith("(")){
        //dit haalt de haakjes weg van de item
        // newDataArray.push(item.replace(/[()]/g, ""));
        return item.replace(/[()]/g, "");
      }
      }
      if(item.includes("°")){
        // Als je in deze if statement komt dan is het item in DMS formaat genoteerd
        let dms = item.split(/[^\d\w\.]+/);
        let lat = convertDMS(dms[0], dms[1], dms[2], dms[3]);
        let long = convertDMS(dms[4], dms[5], dms[6], dms[7]);
        // Door de kracht van javascript word door latlong een string omdat de komma ook als een string geconcat word
        const latlong = lat + "," +  long;
        // newDataArray.push(latlong);
        return latlong;
      }
      if(isNumber(item) && !item.includes("°")){
        // als het niet in dms formaat is en als het een getal is dan is hij gewoon goed.
        // newDataArray.push(item);
        return item;
      }
  }).filter(item => {return item != null})
  console.log(newData);
}
//Deze functie zet het dms formaat om naar een decimal formaat
function convertDMS(degree, minute, second, direction){
  //deze functie heb ik helaas niet zelf bedacht en heb ik af moeten kijken op stack overflow
// https://stackoverflow.com/questions/1140189/converting-latitude-and-longitude-to-decimal-values
  let decimal =  Number(degree) + Number(minute)/60 + Number(second)/(60*60);
  if(direction == "S"  || direction == "W" ){
    decimal = decimal * -1;
  }

  return decimal;
}

//deze functie kijkt of de waarde een getal is.
function isNumber(value){
  return Number.isInteger(parseInt(value));
}