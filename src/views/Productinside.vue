<template>
<h1>單一產品</h1>
   <div class="container">
       <div class="row">
           <div class="col-md-6"><img :src="product.imageUrl" class="img-fluid"></div>
           <div class="col-md-6 align-self-center">
            <p class="fs-1">產品名稱：{{product.title}}</p>
           </div>
       </div>
   </div>
</template>

<script>
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.$http(
        `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/product/${id}`
      )
        .then(
          (res) => {
            console.log(res)
            this.product = res.data.product
          })
        .catch((er) => {
          console.log(er)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
