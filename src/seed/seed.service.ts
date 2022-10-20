import { Injectable } from '@nestjs/common';
import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
    constructor(
        private readonly carsService: CarsService,
        private readonly brandsService: BrandsService,
    ) {}

    populateDB() {
        // BRANDS_SEED;
        // CARS_SEED;
        this.carsService.fillCarsWithSeedData(CARS_SEED);
        this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);
        return 'Seed executed';
    }
}
