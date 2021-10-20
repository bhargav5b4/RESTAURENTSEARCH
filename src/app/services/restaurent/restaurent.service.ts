import { Injectable } from '@angular/core';
import { Restaurent } from 'src/app/shared/models/Restaurent';
@Injectable({
  providedIn: 'root'
})
export class RestaurentService {

  constructor() { }

  getAll(): Restaurent[]{
    return [
      {
        name: 'Minerva Grand',
        location:'Nellore',
        number:8978675645,
        favorite: false,
        origins: ['Hyderabad','Chennai'],
        stars: 4.5,
        price:600,
        imageUrl: '/assets/images/foods/res-1.jfif'
      }
    ]
  }

}
