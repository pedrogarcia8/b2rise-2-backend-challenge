//Manipulação de Tipos e Generics

const extractValues = <T extends object, K extends keyof T>(array: T[], key: K): T[K][] => {
  try {
    return array.reduce((newArray: T[K][], object: T) => {
      if (key in object) 
        newArray.push(object[key]);
      
      return newArray;
    }
    , [] as T[K][]);
  } catch (error) {
    console.log('Error in extractValues function: ', error);
    throw new Error(`Error in extractValues function: ${error}`);
  }
}