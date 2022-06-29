import { Component, OnInit } from '@angular/core';
import { Airlinedto } from '../DTO/Airlinedto';
import { AirlineService } from '../Services/airline.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {
  Airlinename:Airlinedto
  showdng:boolean
  showMsg:boolean
  data:any

  constructor(private airlineservice :AirlineService ) { 
    this.Airlinename= new Airlinedto()
    this.showMsg=false
    this.showdng=false
  }

  ngOnInit(): void {
   this.data=this.getData();
  }
  newairline()
  {
    this.airlineservice.addnewairline(this.Airlinename)
      .subscribe(data => {
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(data.json(), null, 4));
        console.log(data)
        
         if(data=='create Failed')
         {
       this.showdng=true;  
         }
         if(data=='Created Sucessfully'){
           this.showMsg=true;
         }
         
      this.Airlinename= new Airlinedto();
      })  
  }
  getData(){
    return [
      {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2016",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
          "width": 20,
          "height": 20
      },
      {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2016",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
          "width": 30,
          "height": 30
      },
      {
          "productId": 5,
          "productName": "Hammer",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2016",
          "description": "Curved claw steel hammer",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png",
          "width": 20,
          "height": 20
      },
      {
          "productId": 8,
          "productName": "Saw",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2016",
          "description": "15-inch steel blade hand saw",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",
          "width": 20,
          "height": 20
      },
      {
          "productId": 10,
          "productName": "Video Game Controller",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "description": "Standard two-button video game controller",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png",
          "width": 20,
          "height": 20
      }
  ];
    }
}
