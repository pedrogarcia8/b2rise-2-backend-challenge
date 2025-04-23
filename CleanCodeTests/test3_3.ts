// Melhorando Nomes e Estrutura

const isTheNumberEven = (number: number): boolean => {
  return number % 2 === 0;
}

const getDoubleOfNumber = (number: number): number => {
  return number * 2;
}

const getArrayOfDoubleOfTheEvenNumbersInTheArray = (
    arrayOfNumbers: number[]
): number[] => {
  return arrayOfNumbers.reduce(
    (
      arrayOfDoubleOfTheEvenNumbersInTheArray: number[], 
      numberinTheArray: number
    ) => {
    if (isTheNumberEven(numberinTheArray)) 
      arrayOfDoubleOfTheEvenNumbersInTheArray.push(
        getDoubleOfNumber(numberinTheArray)
      );
        
    return arrayOfDoubleOfTheEvenNumbersInTheArray;
  }, [] as number[]);
}