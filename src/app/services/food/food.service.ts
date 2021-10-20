import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll(): Food[]{
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 150,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jfif',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 300,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jfif',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 250,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jfif',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 175,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jfif',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 150,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jfif',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 150,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jfif',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Biriyani-Dum',
        price: 250,
        cookTime: '40-50',
        favorite: true,
        origins: ['India'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/food-7.jfif',
        tags: ['Lunch'],
      },
    ];
  }
}
