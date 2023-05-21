<template>
    <div class="page-product">

        <div class="columns is-multiline">
            <div class="column is-9">
                <figure class="image mb-6">
                    <img v-bind:src="product.get_image" style="width: 500px;">
                </figure>

                <h1 style="font-family: Candara;" class="title">{{product.name}}</h1>
                <!-- <h2 class="subtitle mt-5">Information</h2> -->
                <p><strong style="font-weight: bold;">Make & Model :</strong> {{ product.make }} {{ product.model }}</p>
                <p><strong style="font-weight: bold;">Motor Vehicle Registration Number :</strong> {{product.registration_num}}</p>
                <p><strong style="font-weight: bold;">Make & Model :</strong> {{product.make}} {{product.model}}</p>
                <p><strong style="font-weight: bold;">Date of Registration :</strong> {{product.Registration_date}}</p>
                <p><strong style="font-weight: bold;">Purchased Price :</strong> {{product.Purchased_Price}}</p>
                <p><strong style="font-weight: bold;">Current Valuation :</strong> {{product.Current_Valuation}}</p>
                <p><strong style="font-weight: bold;">Pool/Assigned :</strong> {{product.Pool_Assigned}}</p>
                <p><strong style="font-weight: bold;">If Assigned (Which Designation) :</strong> {{product.Assigned_Designation}}</p>
                <p><strong style="font-weight: bold;">If Assigned (Name) :</strong> {{product.Assigned_Person}}</p>
                <p><strong style="font-weight: bold;">Assigned Range :</strong> {{product.Assigned_Range}}</p>
                <p><strong style="font-weight: bold;">Assigned Office :</strong> {{product.Assigned_Office}}</p>
                <p><strong style="font-weight: bold;">Current Condition :</strong> {{product.condition}}</p>
                <p><strong style="font-weight: bold;">Vehicle Ownership :</strong> {{product.Ownership}}</p>
                <p><strong style="font-weight: bold;">Description :</strong> {{product.description}}</p>
                <p><strong style="font-weight: bold;">Date Added :</strong> {{product.date_added}}</p>
            </div>

            <div class="column-is-3">
                
                <!-- <p><strong>Price:  </strong>${{product.date_added}}</p> -->

                <div class="field has-addons mt-6">
                    <!-- <div class="control">
                        <input type="number" class="input" min="1" v-model="quantity">
                    </div> -->

                    <div class="control">
                        <a class="button is-dark" @click="updateProduct()">UPDATE</a>
                    </div>
                    <div class="control">
                        <a class="button is-dark" @click="deleteProduct()">DELETE</a>
                    </div>
                </div>


            </div>

        </div>

    </div>



</template>


<script>
import axios from 'axios'

import {toast} from 'bulma-toast'


export default{
name:'Product',
data(){
    return {
        product:{},
        quantity:1
    }
},
mounted(){
    this.getProduct()
},
methods:{

    getProduct() {
        this.$store.commit('setIsLoading',true)
        const category_slug = this.$route.params.category_slug
        const product_slug = this.$route.params.product_slug

        axios
            .get(`/api/v1/products/${category_slug}/${product_slug}`)

            .then(response => {
                this.product=response.data
                document.title=this.product.name+'$ameera'
            })

            .catch(error => {
                console.log(error)
            })

        this.$store.commit('setIsLoading',false)


    },

    addToCart(){
        if (isNaN(this.quantity)|| this.quantity<1) {
            this.quantity=1            
        }
        const item ={
            product:this.product,
            quantity:this.quantity
        }
        this.$store.commit('addToCart',item)

        toast({
            message:'The product was added to the cart',
            type:'is-success',
            dismissible: true,
            pauseOnHover:true,
            duration:2000,
            position:'bottom-right'
        })


    },

    updateProduct() {
            const category_slug = this.$route.params.category_slug
            const product_slug = this.$route.params.product_slug

            axios
                .put(`/api/v1/products/${category_slug}/${product_slug}`, this.product)
                .then(response => {
                    toast({
                        message: 'Product updated successfully',
                        type: 'is-success',
                        dismissible: true,
                        pauseOnHover: true,
                        duration: 2000,
                        position: 'bottom-right'
                    })
                })
                .catch(error => {
                    const errorMessage = error.response && error.response.data && error.response.data.message
                        ? error.response.data.message
                        : 'An error occurred while updating the product';

                    toast({
                        message: errorMessage,
                        type: 'is-danger',
                        dismissible: true,
                        pauseOnHover: true,
                        duration: 2000,
                        position: 'bottom-right'
                    });

                })
        },

    deleteProduct() {
        this.$store.commit('setIsLoading',true)
        const category_slug = this.$route.params.category_slug
        const product_slug = this.$route.params.product_slug

            axios
                .delete(`/api/v1/products/${category_slug}/${product_slug}`)
                .then(response => {
                    toast({
                        message: 'Product deleted successfully',
                        type: 'is-success',
                        dismissible: true,
                        pauseOnHover: true,
                        duration: 2000,
                        position: 'bottom-right'
                    })
                    // Redirect to the product list page or perform any other desired action
                })
                .catch(error => {
                    const errorMessage = error.response && error.response.data && error.response.data.message
                        ? error.response.data.message
                        : 'An error occurred while deleting the product';

                    toast({
                        message: errorMessage,
                        type: 'is-danger',
                        dismissible: true,
                        pauseOnHover: true,
                        duration: 2000,
                        position: 'bottom-right'
                    });
                })
                this.$store.commit('setIsLoading',false)    
        }
    


}


}

</script>