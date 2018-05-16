var app = new Vue({
    el:'#app',
    data:{
        product:'Socks',
       image: './assets/vmSocks-green.jpg',
       inStock: false,
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
    }
   
})