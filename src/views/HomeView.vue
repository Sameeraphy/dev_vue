<template>
  <div class="home">
      <section class="hero is-medium is-dark mb-6">
        <div class="hero-body has-text-centered">
          <p class="title mb-6">
            Welcome to TE$T
          </p>

          <p class="subtitle">
            Welcome to TE$T $ITE
          </p>
        </div>
      </section>

      <div class="columns is-multiline">
        <div class="column is-12">
          <h2 class="is size-2 has-text-centered has-text-weight-bold">Vehicles</h2>
        </div>

        <!-- <div class="column is-12 box">
            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                  <ProductBox
                    v-for="product in latestProducts"
                    v-bind:key="product.id"
                    v-bind:product="product"  />
                </tbody>
            </table>
        </div> -->



        <ProductBox
          v-for="product in latestProducts"
          v-bind:key="product.id"
          v-bind:product="product"  />

        <!-- <div 
        class="column is-3"
        v-for="product in latestProducts"
        v-bind:key="product.id"
        >
          <div class="box">
            <figure class="image mb-4">
              <img v-bind:src="product.get_thumbnail">
            </figure>

            <h3 class="is-size-4">{{ product.name }}</h3>
            <p class="is-size-6 has-text-grey">${{ product.price }}</p>

            <router-link v-bind:to="product.get_absolute_url" class="button is-dark mt-4">View Details</router-link>

            
          </div>


        </div> -->

      </div>

  </div>




  <!-- <div class="container is-size-10-mobile is-size-8-tablet is-size-8-desktop is-size-6-widescreen is-size-5-fullhd">

    <div class="content">
      <p class="typewriter has-text-justified">Welcome to Irrigation Department Mechanical Branch Vehicle Management System</p>
    </div>
    <div class="content">
      <p class="typewriter has-text-justified">Welcome to Irrigation Department Mechanical Branch Vehicle Management System</p>
    </div> 
  </div> -->



  <!-- <div class="typewriter">
    <h1 class="is-size-1 has-text-centered">Hello, World!</h1>
  </div> --> 
  

</template>

<!-- 
<style>
.typewriter {
  overflow: hidden; /* Hide the text until the animation starts */
  border-right: 0.15em none #000; /* The cursor */
  white-space: nowrap; /* Keep the text on one line */
  letter-spacing: 0.15em; /* Add spacing between letters */
  animation: 
    typing 3.5s steps(40, end), /* The typing animation */
    blink-caret 0.75s step-end infinite; /* The cursor blink */
}


/* The typing animation */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The cursor blink */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #000; }
}
</style> -->



<script>
import axios from 'axios'
import ProductBox from '@/components/ProductBox.vue'

export default {
  name: 'HomeView',
  data(){
    return{
      latestProducts:[]
    }
  },

  components: {
    
  },

  components:{
    ProductBox
  },

  mounted(){
    this.getLatestProducts()
    document.title='Home | $ameera'
  },

  methods:{
    getLatestProducts(){
      axios
        .get('/api/v1/latest-products/')
        .then(response=> {
          this.latestProducts=response.data
        })
        .catch(error=>{
          console.log(error)
        })
    }
  }

}
</script>

