<template>
    <div class="table-container">
        <table class="product-table">
            <!-- <thead>
                <tr class="distributed-row">
                    <th> 
                        <div class="column">Column 1</div>
                    </th>
                    <th> 
                        <div class="column">Column 2</div>
                    </th>
                    <th> 
                        <div class="column">Column 3</div>
                    </th>

                    <th> 
                        <div class="column"></div>
                    </th>
                </tr>
            </thead> -->
 
            <tr class="distributed-row">
        <!-- <td>
            <img :src="product.get_thumbnail" alt="Product Image" class="product-image" />
        </td> -->
                <td> 
                    <div class="column">{{ product.num }}</div>
                </td>
                <td> 
                    <div class="column">{{ product.registration_num }}</div>
                </td>
                <td> 
                    <div class="column">{{ product.Purchased_Price }}</div>
                </td>

                <td> 
                    <div class="column">
                    <router-link :to="product.get_absolute_url" class="button is-dark">View Details</router-link>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <!-- <tr>
        <td class="column is-3">
            <div class="box">
                <figure class="image mb-4">
                    <img v-bind:src="product.get_thumbnail">
                </figure>

                <h3 class="is-size-4">{{ product.name }}</h3>
                <p class="is-size-6 has-text-grey">${{ product.price }}</p>

                <router-link v-bind:to="product.get_absolute_url" class="button is-dark mt-4">View Details</router-link>
                
            </div>
        </td>
    </tr> -->
</template>

<script>

export default{
    name:'ProductBox',
    props:{
        product:Object
    }
}
</script>


<style scoped>

    /* .image{
        margin-top: -1.25rem;
        margin-left: -1.25rem;
        margin-right: -1.25rem;
    } */
    .table-container {
        margin: 20px;
        width: 100%;
    }

    .column {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .product-table {
        border-collapse: collapse;
        width: 100%;
    }
    .distributed-row {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

</style>