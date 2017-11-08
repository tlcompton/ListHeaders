import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  lists: any = [
    {
      myHeader: "Coffee",
      items: [
        {
          name: "Dark Roast",
          price: "$3.50",
          size: "Half-Pound",
          picture: "https://www.privateselection.com/_kroger_privateselection/assets/Image/BehindIngredient_Coffee(2).jpg"
        },
        {
          name: "Light Roast",
          price: "$16.80",
          size: "5 Pounds",
          picture: "https://www.littleriverroasting.com/shop-coffee/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/r/fresh_light_roast_coffee_2.jpg"
        },
        {
          name: "Medium Roast",
          price: "$24.50",
          size: "10 Pounds",
          picture: "http://www.saltpgh.com/wp-content/uploads/2016/11/Medium-Roast-coffee-bean.jpg"
        }

        ]

    },
    {
      myHeader: "iPhones",
      items: [
        {
          name: "iPhone 7",
          price: "$600",
          size: "128GB",
          picture: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/black/iphone7-black-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430037379"
        },
        {
          name: "iPhone 7 Plus",
          price: "$700",
          size: "128GB",
          picture: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-rosegold-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430147951"
        },
        {
          name: "iPhone 8 ",
          price: "$800",
          size: "256GB",
          picture: "https://cnet3.cbsistatic.com/img/O3uqVyNZ-yiVF9VoBdeR_iN2Szg=/830x467/2017/09/12/a1b96a0d-403c-408d-96a8-5a619bc65149/apple-091217-iphone-8-3874.jpg"
        },
        {
          name: "iPhone 8 Plus",
          price: "$900",
          size: "256GB",
          picture: "https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-8-plus/gold/apple-iphone8plus-gold-2-3x.jpg"
        },
        {
          name: "iPhone X",
          price: "$1100",
          size: "256GB",
          picture: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/9230573/apple_iphone_2017_20170912_11670.JPG"
        }

      ]

    }

    ]

  constructor() {
  }


}
