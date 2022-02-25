<template>
  <h1>這是話題的大版頭</h1>

  <h2>{{ chId }}</h2>

  <el-card class="add-container">
    頻道選擇：
    <select class="form-select" aria-label="Default" v-model="chId">
      <option selected>請選擇</option>
      <option value="1">觀點</option>
      <option value="2">話題</option>
      <option value="3">台中腔</option>
      <option value="4">教育</option>
      <option value="5">醫療</option>
    </select>
    <p>我是標題：<input type="text" v-model="mainTitle" /></p>
    <p>我是副標題：<input type="text" v-model="subTitle" /></p>
    <p>
      我是文章內容：<textarea
        type="text"
        v-model="mainText"
        rows="3"
      ></textarea>
    </p>
    <p>我是文章段落：<input type="text" v-model="subText" /></p>
    <p>我是日期：<input type="date" v-model="startDate" /></p>
    <p>作者：<input type="text" v-model="authorName" /></p>

    <button
      type="button"
      class="btn btn-primary btn-lg col-6 btncolor"
      @click.prevent="send"
    >
      送出
    </button>
  </el-card>

  <!-- http://apilan.news-age.tw/article/article
   -->
</template>

<script>
export default {
  data () {
    return {
      chId: '',
      mainTitle: '',
      subTitle: '',
      mainText: '',
      subText: '',
      startDate: '',
      authorName: ''
    }
  },
  methods: {
    send () {
      const data = {
        chId: this.chId,
        mainTitle: this.mainTitle,
        subTitle: this.subTitle,
        mainText: this.mainText,
        startDate: this.startDate,
        authorName: this.authorName
      }

      this.$http
        .post('http://apilan.news-age.tw/article/article', data)
        .then((res) => {
          alert('res.data.status')
        })
        .catch((er) => {
          console.log('我是失敗:' + er.result.status)
          alert(er.result.status)
        })
    }
  }
}
</script>
