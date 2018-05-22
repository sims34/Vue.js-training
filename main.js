//creation component
Vue.component('product',{
    // 7 ways to write template : https://medium.com/js-dojo/7-ways-to-define-a-component-template-in-vuejs-c04e0c72900d
    template: ' <div></div> ', 
    
    data(){         //object
        return{
            // write your stuff ...
        } 
        
    },
    methods :{
        // write your stuff ...
    },
    computed :{
        // write your stuff ...
    },
})
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