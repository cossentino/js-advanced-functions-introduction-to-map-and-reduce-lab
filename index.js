// Your code here



function mapToNegativize(numArray) {
  return numArray.map(e => e * -1)
}

function mapToNoChange(numArray) {
  return numArray.map(e => e)
}


function mapToDouble(numArray) {
  return numArray.map(e => e * 2)
}

function mapToSquare(numArray) {
  return numArray.map(e => e ** 2)
}


function reduceToTotal(sourceArray, startingPoint=0) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  return sourceArray.reduce(reducer, startingPoint)
}

function reduceToAllTrue(sourceArray, startingPoint=true) {
  const reducer = function(accumulator, currentValue) {
    accumulator = !!(accumulator && currentValue)
    return accumulator
  }
  return sourceArray.reduce(reducer, startingPoint)
}


function reduceToAnyTrue(sourceArray, startingPoint=false) {
  const reducer = function(accumulator, currentValue) {
    accumulator = !!(accumulator || currentValue)
    return accumulator
  }
  return sourceArray.reduce(reducer, startingPoint)
}