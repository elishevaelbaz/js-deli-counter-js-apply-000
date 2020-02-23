let currentNum = 0;

function takeANumber(deliLine){
  // push their number into the Array
  currentNum += 1
  deliLine.push(currentNum)
 
  
  //return their number in line
  return currentNum
  
  // deliLine.push(deliLine.length + 1)
  // return `Welcome, You are number ${deliLine.length} in line.`
}

function nowServing(deliLine){
  if (deliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    const nextPerson = deliLine[0];
    deliLine.shift();
    return `Currently serving ${nextPerson}.`
  }
}

function currentLine(deliLine){
  if (deliLine.length === 0){
    return "The line is currently empty."
  }
  else{
    let str = "The line is currently: "
    for (let i = 0; i < deliLine.length; i++){
      
      if (i === deliLine.length - 1){ 
        //no comma if it's the last person
        str += `${i + 1}. ${deliLine[i]}`
      }
      else{
        str += `${i + 1}. ${deliLine[i]}, `
      }
  }
  return str
  }
  
}