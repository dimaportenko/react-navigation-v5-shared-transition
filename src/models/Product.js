import faker from 'faker';

export class Product {
  constructor() {
    this.key = faker.random.uuid();
    this.name = faker.commerce.productName();
    this.price = faker.commerce.price(10, 300);
    // this.image = faker.random.image();
    this.image = `https://i.picsum.photos/id/${Math.floor((Math.random() * 1000) + 1)}/720/520.jpg`;
    this.description = faker.lorem.paragraphs(3, '\n\n');
  }
}
