const condResidencial = [
  ["Porteiro", 44, 5],
  ["Maria", 55],
  ["José", 66],
  ["Eliane", 77],
];

const moradoresMais50 = [];
const nomeMoradores = [];

condResidencial.push(["Novo morador", 88, 5]);

console.table(condResidencial);

//console.log(condResidencial[4][0]);
//console.log(condResidencial[4][1]);
//console.log(`condResidencial.length: ${condResidencial.length}`)



for (let i = 0; i < condResidencial.length; i++) {
  /*console.log(condResidencial[i][0]);
  console.log(condResidencial[i][1]);*/
  //console.log(condResidencial[i].length);
  console.log(condResidencial[i]);
  
  for (let j = 0; j < condResidencial[i].length; j++) {
    //console.log(`I: ${i} - J:${j}`);
    
    if(condResidencial[i][j] > 60){
      
      //moradoresMais50.push(condResidencial[i]);
      //console.table(condResidencial[i][j]);
    }

    if(condResidencial[i][j] === "Porteiro" || condResidencial[i][j] === "Eliane"){
      nomeMoradores.push(condResidencial[i]);
    }
  }
}

//console.table(moradoresMais50);

//console.table(nomeMoradores);

//console.log(condResidencial[i].indexOf("José"));