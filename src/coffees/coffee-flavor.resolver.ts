import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { FlavorsByCoffeeLoader } from './data-loader/flavors-by-coffee.loader';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

@Resolver(() => Coffee)
export class CoffeeFlavorResolver {
  constructor(private readonly flavorsByCoffeeLoader: FlavorsByCoffeeLoader) {}

  @ResolveField('flavors', () => [Flavor])
  async getFlavorsOfCoffee(@Parent() coffee: Coffee) {
    return this.flavorsByCoffeeLoader.load(coffee.id);
  }
}
