import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  constructor() { }
  fruits =
    [{ "name": "Orange", "type": "fruit", "price": 100 }, { "name": "Mango", "type": "fruit", "price": 60 }, { "name": "Banana", "type": "fruit", "price": 40 }, { "name": "Guava", "type": "fruit", "price": 70 }, { "name": "Pomergranate", "type": "fruit", "price": 120 }, { "name": "Apple", "type": "fruit", "price": 200 }, { "name": "Chiku", "type": "fruit", "price": 30 }, { "name": "Custard Apple", "type": "fruit", "price": 60 }];
  
    vegetables =
    [{"name" : "Lettuce", "type" : "vegetable", "price": 100},{"name" : "Spinach", "type" : "vegetable", "price": 60},{"name" : "Cabbage", "type" : "vegetable", "price": 40},{"name" : "Cucumber", "type" : "vegetable", "price": 70},{"name" : "Zuchini", "type" : "vegetable", "price": 120},{"name" : "Cauliflower", "type" : "vegetable", "price": 200},{"name" : "Potato", "type" : "vegetable", "price": 30},{"name" : "Yam", "type" : "vegetable", "price": 60}];

    datadalo(str){

      this.fruits = str;
      this.vegetables=str;
    }
  
    datalelo(){
 
      return this.fruits;
      
     
  }
    fruitsRe
}
