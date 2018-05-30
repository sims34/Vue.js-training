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
            <div>
                <h2>Review Product</h2>
                  <p v-if="! reviews.length">No review yet !</p>  <!-- equivaut ===> reviews.length == 0  -->          
                <ul>
                    <li v-for="review in reviews">
                        <p>{{review.name }}</p>
                        <p>{{review.rating}} </p>
                        <p> {{review.review}}</p>
                    </li>
                </ul>
            </div>
            <product-review @submit-review="addReview"></product-review>
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
            reviews:[]
           
        } 
        
    },
    methods :{
        addToCart : function(){ 
            //now this function it's just an emission of an event
            this.$emit('add-to-cart',this.variants[this.selectedVariant].varianteId)  //name of of the event listener + add option id product
                },
        updateImage(index) {  // ES6 notation
            this.selectedVariant = index
        },
        addReview(productReview){
            this.reviews.push(productReview);
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
//product review component it's child of product component
Vue.component('product-review',{
    template :
    //@submit == trigger of the function onSubmit.
    //prevent == ES6 tag for create an event without reload the page.
    `
    <form class="review-form" @submit.prevent="onSubmit"> 

            <p v-if="errors.length && !flag">
                <b>Verified your error(s).</b>
                <ul>
                    <li v-for="er in errors"> {{ er }} </li>
                </ul>
            </P>

        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

        <input type="submit" value="Submit">  
      </p>    
    
    </form>
    `,
    data(){
      return{
          name: null,
          review: null,
          rating: null,
          errors:[],
          flag : null,
        
          
      }
      
    },
    methods:{
        onSubmit(){
            this.flag = false;
            if(this.name && this.review && this.rating){ 
                //create a variable let work only in the onSubmit function != global variable
                let productReview ={
                    name : this.name,
                    review : this.review,
                    rating : this.rating,
                   
                }
                this.$emit('submit-review',productReview)
                this.name = null
                this.review= null
                this.rating= null
                this.flag = true
            
            
            }else{
                if(!this.name) this.errors.push("Name is required.");  
                if(!this.rating) this.errors.push("Rating is required.");
                if(!this.review) this.errors.push("Review is required.");
               
            }
            if(flag){
                this.errors = []
            } 
             
        }
      
    }
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