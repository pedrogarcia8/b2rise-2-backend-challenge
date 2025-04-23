// Imutabilidade e Manipulação de Arrays

const makeAllPositive = (array: number[]): number[] => {
  try {
    return array.map((number) => Math.abs(number));
  } catch (error) {
    console.log('Error in makeAllPositive function: ', error);
    throw new Error(`Error in makeAllPositive function: ${error}`);
  }
}