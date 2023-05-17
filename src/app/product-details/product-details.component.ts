import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products  } from '../interfaces/products';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

//   products: Products[] = [


    


//     {  
//         "id": 1,  
//         "image" : ' ./assets/images/shoe1.jfif',
//         "name": "Nike Air Zoom",  
//         "price": 500,  
//         "date": " 2022" ,
//         "count": 5
        
//       },



//       {  
//         "id": 2,  
//         "image" : ' ./assets/images/shoe2.jfif',

//         "name": "Nike Pegasus Trail",  
//         "price": 550,  
//         "date": " 2022", 
//         "count": 0

        
//       },


//       {  
//         "id": 3,  
//         "image" : ' ./assets/images/shoe3.jfif',
//         "name": "Nike ZoomX Vaporfly",  
//         "price": 750,  
//         "date": " 2022" , 
//         "count": 4
        
//       },




//     {  
//         "id": 4,  
//         "image" : ' ./assets/images/shoe4.jfif',
//         "name": "Nike Air Max 270",  
//         "price": 800,  
//         "date": " 2022" , 
//         "count": 0
        
//       },



//       {  
//         "id": 5,  
//         "image" : ' ./assets/images/shoe5.jfif',
//         "name": "Nike Pegasus Trail",  
//         "price": 850,  
//         "date": " 2023" , 
//         "count": 10
        
//       },


//       {  
//         "id": 6,  
//         "image" : ' ./assets/images/shoe6.jfif',
//         "name": "Nike ZoomX Vaporfly",  
//         "price": 950,  
//         "date": " 2023" , 
//         "count": 8
        
//       }



// ];
selectedProduct: any;
constructor(private activatedRoute : ActivatedRoute){}

// ngOnInit(){

//   console.log(this.activatedRoute.snapshot.params['id'])
//   this.selectedProduct= this.products.find(product=>product.id ==this.activatedRoute.snapshot.params['id'])

// }

}
