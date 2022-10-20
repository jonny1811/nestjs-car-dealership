import { Car } from './../../cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla',
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'CR-V',
    },
    {
        id: uuid(),
        brand: 'Nissan',
        model: 'Skyline',
    },
];
