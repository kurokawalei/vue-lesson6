<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-center mt-3 mb-3"><h2>後台產品列表</h2></div>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModal('add')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody v-for="item in products" :key="item.id">
        <tr>
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-start">{{ item.origin_price }}</td>
          <td class="text-start">{{ item.price }}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled == 1">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)"
              >
                編輯
              </button>

              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('del', item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <pageinfo :pages="pageinfo" @changepage="getPrList"></pageinfo>
  </div>
</template>

<script>
import pageinfo from '@/components/pageView.vue'
export default {
  data () {
    return {
      isLoading: false,
      products: [],
      pageinfo: {}
    }
  },
  methods: {
    getPrList (page = 1) {
      this.isLoading = true
      this.$http(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`)
        .then((res) => {
          this.products = res.data.products
          this.pageinfo = res.data.pagination
          this.isLoading = false
          console.log(this.pageinfo)
        })
        .catch((er) => {
          console.log(er)
        })
    }
  },
  components: {
    pageinfo
  },
  mounted () {
    this.getPrList()
  }
}
</script>
