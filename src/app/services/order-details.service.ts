import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"The best selection of drinks",
      foodDetails:"Non Alchoholic Drinks.",
      foodPrice:5,
      foodImg:"../../../assets/img/drink.png"
    },
    {
      id:2,
      foodName:"Pizza ",
      foodDetails:"Order your favourite Pizza",
      foodPrice:11,
      foodImg:"../../../assets/img/pizza.png"
    },
    {
      id:3,
      foodName:"Burger",
      foodDetails:"Order your one of a kind MrBeast Burger",
      foodPrice:14,
      foodImg:"../../../assets/img/burger.png"
    },
    {
      id:4,
      foodName:"Panna Cotta",
      foodDetails:"Panna cotta may be the most famous Italian dessert",
      foodPrice:7,
      foodImg:"../../../assets/img/dessert.png"
    },
    {
      id:5,
      foodName:"Pasta",
      foodDetails:"Tasty white, red sauce pasta.",
      foodPrice:10,
      foodImg:"../../../assets/img/pasta.png"
    },
    {
      id:6,
      foodName:"Sandwiches",
      foodDetails:"Discover our newest selection of deliciously convenien.",
      foodPrice:9,
      foodImg:"../../../assets/img/sandwich.png"
    }
  ]


  

}

