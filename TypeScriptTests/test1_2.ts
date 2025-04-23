//Validação e Tipagem com Union Types

const calculate = (operation: 'add' | 'subtract' | 'multiply' | 'divide', number1: number, number2: number): number => {
  try {
    switch (operation) {
      case 'add':
        return number1 + number2;
      case 'subtract':
        return number1 - number2;
      case 'multiply':
        return number1 * number2;
      case 'divide':
        if (number2 === 0) throw 'Division by zero';
        return number1 / number2;
      default:
        throw 'Invalid operation';
    }
  } catch (error) {
    console.log('Error in calculate function: ', error);
    throw new Error(`Error in calculate function: ${error}`);
  }
}