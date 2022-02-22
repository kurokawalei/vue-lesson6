<template>
  <h2>購物車列表</h2>
  {{carList.carts }}
  <router-view></router-view>
</template>

<script>
export default {
  data () {
    return {
      carList: []
    }
  },
  methods: {
    getCarList () {
      this.$http(
        `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`
      )
        .then(
          (res) => {
            this.carList = res.data.data
            console.log(this.carList.carts)
          })
        .catch((er) => {
          console.log(er)
        })
    }
  },
  mounted () {
    this.getCarList()
  }
}
</script>
