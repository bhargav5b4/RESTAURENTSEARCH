import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { Restaurent } from '../shared/models/Restaurent';
import { RestaurentService } from '../services/restaurent/restaurent.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  item:boolean=true;
  foods:Food[]=[];
  restaurents:Restaurent[]=[];
  constructor(private foodService:FoodService,private restaurentService:RestaurentService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.searchTerm){
        this.foods=this.foodService.getAll().filter(food => food.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
        if(params.searchTerm)
        this.restaurents=this.restaurentService.getAll().filter(res => res.name.toLocaleLowerCase().includes(params.searchTerm.toLowerCase()));
      }
      else 
      this.foods=this.foodService.getAll();
      this.restaurents=this.restaurentService.getAll();
    })

    
    
  }

}
