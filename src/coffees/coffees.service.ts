import { Injectable } from '@nestjs/common';
import { CreateCoffeeInput } from './dto/create-coffee.input';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    return this.coffees.find((item) => item.id === id);
  }

  create(createCoffeeDto: CreateCoffeeInput) {
    const newCoffee = { ...createCoffeeDto, id: this.coffees.length + 1 };
    this.coffees.push(newCoffee);
  }
}
