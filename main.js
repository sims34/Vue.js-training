
var app = new Vue({
    el:'#app',
    data:{
       product:'Socks',
       brand : 'Vue Mastery',
       onSale: true,  //exercice onSale
      // image: './assets/vmSocks-green.jpg',
    //    inStock: true,
       selectVariant: 0,
       details :[ "80 % cotton","20 % polyester","Gender-Neutral"],
       variants:[
           {
             varianteId : 2013,
             varianteColor : 'Green',
             varianteImage : './assets/vmSocks-green.jpg',
             varianteQuantity: 255
           },
           {
             varianteId : 2154,
             varianteColor : 'Blue',
             varianteImage :'./assets/vmSocks-blue.jpg',
             varianteQuantity:0
           }
       ],
       cart : 0
    },
    methods :{
        addToCart : function(){ 
            this.cart +=1
        },
        updateImage(index) {  // ES6 notation
            this.selectVariant = index
            
        }
    },
    computed :{
        title(){
            return this.brand + ' -- '+ this.product
        },
        image(){
            return this.variants[this.selectVariant].varianteImage
            // ==> this.variants == the array
            //==> this.variants[this.selectVariant] == array[0], array[1]
        },
        //boolean property if inStock == true
        inStock(){ 
            return this.variants[this.selectVariant].varianteQuantity
        },
        //exercice
        onSaleFunction(){
            return this.brand +" " + this.product
        }
        //  CORRECTION : OTHER WAY SET BOOLEAN INTO THE FUNCTION
        // sale() {
        //     if (this.onSale) {
        //         return this.brand + ' ' + this.product + ' are on sale!'
        //       } 
        //         return  this.brand + ' ' + this.product + ' are not on sale'
        //     }
    }
   
})