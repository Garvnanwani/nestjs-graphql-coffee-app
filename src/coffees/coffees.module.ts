import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PubSubModule } from 'src/pub-sub/pub-sub.module';
import { CoffeeFlavorResolver } from './coffee-flavor.resolver';
import { CoffeesResolver } from './coffees.resolver';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { FlavorsByCoffeeLoader } from './data-loader/flavors-by-coffee.loader';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor]), PubSubModule],
  providers: [CoffeesResolver, CoffeesService, CoffeeFlavorResolver, FlavorsByCoffeeLoader],
})
export class CoffeesModule {}
