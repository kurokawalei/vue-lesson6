<template>
  <Loading :active="isLoading"></Loading>
  <div class="container mt-3 mb-3">
    <div class="row">
      <div class="col-md-6">
        <img :src="product.imageUrl" class="img-fluid" />
      </div>
      <div class="col-md-6 align-self-center">
        <h1 class="fs-1 h1">產品名稱：{{ product.title }}</h1>
        <p class="fs-4">原價：{{ product.origin_price }}</p>
        <p class="fs-4">售價：{{ product.price }}</p>
        <p class="main">
          {{ product.description }}
        </p>
        <div class="row">
          <div class="col">
               <select class="form-select" v-model.number="qty" panelHeight="100">
                        <option v-for=" (num,i) in 50 "
                        :value="num"
                        :key="i"
                        >{{num}}</option>
                </select>
          </div>
          <div class="col">

              <button
                type="button"
                class="btn btn-outline-danger"
                @click="addToCar(product.id)">
                 加到購物車
              </button>
            </div>
        </div>
      </div>
    </div>
    <div class="a-link text-center mt-5 mb-5 fs-2">
      <router-link to="/products">回列表頁</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {},
      isLoading: false,
      qty: ''
    }
  },
  methods: {
    getProduct () {
      this.isLoading = true
      const { id } = this.$route.params
      this.$http(
        `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/product/${id}`
      )
        .then((res) => {
          console.log(res)
          this.product = res.data.product
          this.isLoading = false
        })
        .catch((er) => {
          console.log(er)
        })
    },
    addToCar (id) {
      if (this.qty === '') {
        this.qty = 1
      }
      this.isLoading = true
      const data = {
        product_id: id,
        qty: this.qty
      }
      this.$http
        .post(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        )
        .then((res) => {
          this.isLoading = false
          alert(res.data.message)
        })
        .catch((er) => {
          console.dir(er)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
