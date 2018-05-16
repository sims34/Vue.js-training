
var app = new Vue({
    el:'#app',
    data:{
       product:'Socks',
       brand : 'Vue Mastery',
       image: './assets/vmSocks-green.jpg',
       inStock: true,
       details :[ "80 % cotton","20 % polyester","Gender-Neutral"],
       variants:[
           {
             varianteId : 2013,
             varianteColor : 'Green',
             varianteImage : './assets/vmSocks-green.jpg'
           },
           {
             varianteId : 2154,
             varianteColor : 'Blue',
             varianteImage :'./assets/vmSocks-blue.jpg' 
           }
       ],
       cart : 0
    },
    methods :{
        addToCart : function(){ 
            this.cart +=1
        },
        updateImage(varianteImage) {  // ES6 notation
            this.image = varianteImage
        }
    },
    computed :{
        title(){
            return this.brand + ' -- '+ this.product
        }
    }
   
})