// Refatoração de Código

interface Item {
  name: string;
  price: number;
}

const processItems = (items: Item[]): void => {
  for (const item of items) {
    if (item.price > 100) {
      console.log(`${item.name} is expensive`);
    }
  }
}