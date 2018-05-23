//creation component
Vue.component('product',{
    props :{
// props allow to make a connection between the parent (root) and the child (component)              
// can be write ['message'] => in the template : <span>{{ message}}</span> => html : <product message ="Hello !"></product>
// object syntaxe :
            prenium:{
                type : Boolean,
                required: true
            }
    },
    // 7 ways to write template : https://medium.com/js-dojo/7-ways-to-define-a-component-template-in-vuejs-c04e0c72900d
    // back ticks => alt gr + 7
    template: ` 
            <div class="product">
                
            <div class="product-image">
                <img v-bind:src="image">
            </div>
        
            <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p v-if= "inStock">In Stock</p>
                    <p v-else>Out Stock</p>
                    <p> Shipping price : {{ shipping }}</p>
                    <ul>
                        <li v-for="detail in details">{{ detail }}</li>
                    </ul>

                <div class="color-box"
                    v-for=" (v,index) in variants" 
                    :key=" v.varianteId"
                    :style="{backgroundColor : v.varianteColor}"
                    @mouseover="updateImage(index)">
                </div>
                <button v-on:click="addToCart"
                        :disabled="! inStock"
                        :class="{disabledButton : ! inStock}">Add to cart</button>
            </div>
        </div>
    `,  
    
    data(){         //object
        return{
            product:'Socks',
            brand : 'Vue Mastery',
            selectedVariant: 0,
            //image: './assets/vmSocks-green.jpg',
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
           
        } 
        
    },
    methods :{
        addToCart : function(){ 
            //now this function it's just an emission of an event
            this.$emit('add-to-cart',this.variants[this.selectedVariant].varianteId)  //name of of the event listener + add option id product
                },
        updateImage(index) {  // ES6 notation
            this.selectedVariant = index
        }
        
    },
    computed :{
        title(){
            return this.brand + ' -- '+ this.product
        },
        image(){
            return this.variants[this.selectedVariant].varianteImage
        },
        shipping(){
            if(this.prenium){
                return "Free"
            }
            return 2.99
           
        }
    },
})

//root element of Vuejs it become the 'Parent' of the application
// the component it's the 'child'
var app = new Vue({
    el:'#app',
    data :{
        prenium : true,
        cart : []
    },
    methods:{
        updateCart(id){
         //   this.cart +=1  basic test if method works
         this.cart.push(id) // push id of socks to cart array
        }
    }
    
   
})