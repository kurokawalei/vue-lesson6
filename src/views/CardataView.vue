<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-center mt-3 mb-3"><h2>購物車列表</h2></div>
  <!-- {{ carData.carts }} -->
  <div class="container">
    <table class="table align-middle">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">圖片</th>
          <th scope="col">品名</th>
          <th scope="col">數量/單位</th>
          <th scope="col" class="text-center">單價</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="carData.carts">
          <tr v-for="item in carData.carts" :key="item.id">
            <td scope="row" class="text-center">
              <!-- 刪除 -->
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeItem(item.id)"
              >
                <!-- <i class="fas fa-spinner fa-pulse"></i> -->
                x
              </button>
            </td>
            <td>
              <div
                style="
                  height: 100px;
                  background-size: cover;
                  background-position: center;
                "
                :style="{ backgroundImage: `url(${item.product.imageUrl})` }"
              ></div>
            </td>
            <td>
              {{ item.product.title }}
              <!-- <div class="text-success">
                      已套用優惠券
                    </div> -->
            </td>
            <td>
              <div class="input-group input-group-sm">
                <div class="input-group mb-3">
                  <select
                    class="form-select"
                    v-model="item.qty"
                    @change="upLoadItem(item)"
                    panelHeight="100"
                  >
                    <option v-for="(num, i) in 99" :value="num" :key="i">
                      {{ num }}
                    </option>
                  </select>
                  <span class="input-group-text">{{ item.qty }}</span>
                  <span class="input-group-text" id="basic-addon2">{{
                    item.product.unit
                  }}</span>
                </div>
              </div>
            </td>
            <td class="text-center">
              {{ item.product.price }}
              <!-- <small class="text-success">折扣價：</small> -->
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-center">{{ carData.total }}</td>
        </tr>
        <!-- <tr>
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{  }}</td>
              </tr> -->
      </tfoot>
    </table>
    <router-link to="/order">結帳</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carData: {
        carts: []
      },
      isLoading: false
    }
  },
  methods: {
    getCarList () {
      this.isLoading = true
      this.$http(
        `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`
      )
        .then((res) => {
          this.carData = res.data.data

          this.isLoading = false
        })
        .catch((er) => {
          console.log(er)
        })
    },
    upLoadItem (item) {
      this.isLoading = true
      const data = {
        product_id: item.id,
        qty: item.qty
      }

      this.$http
        .put(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart/${item.id}`,
          { data }
        )
        .then((res) => {
          console.log(res)
          this.getCarList()
          this.isLoading = false
        })
        .catch((er) => {
          console.log(er)
        })
    },

    removeItem (id) {
      this.isLoading = true

      this.$http
        .delete(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart/${id}`
        )
        .then((res) => {
          alert(res.data.message)
          this.getCarList()
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
