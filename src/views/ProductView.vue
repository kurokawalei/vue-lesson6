<template>
<div class="text-center mt-3 mb-3"><h2>產品列表</h2></div>
 <Loading :active="isLoading"></Loading>
<div class="container">
  <div class="row row-cols-md-4 row-cols-2 g-3">
    <div class="col  mb-3" v-for="(item) in productList" :key="item.id">
  <div class="card" >
  <img :src="item.imageUrl" class="card-img-top" :alt="item.title">
  <div class="card-body">
    <h5 class="card-title">{{item.title}}</h5>
    <p class="card-text">{{item.description}}</p>
    <router-link :to="`/product/${item.id}`" class="btn btn-dark ">查看詳情</router-link>
  </div>
</div>
</div>
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      productList: [],
      isLoading: false
    }
  },
  methods: {
    getProducts () {
      this.isLoading = true
      this.$http(
        `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products/all`
      )
        .then(
          (res) => {
            this.productList = res.data.products
            this.isLoading = false
          })
        .catch((er) => {
          console.log(er)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style lang="scss">
.card-body {
  .btn {
  display: block;
   font-size: 1.4rem;
   border: none;
   &:hover {
     background:#37a3c3;
   }
}
}

</style>
