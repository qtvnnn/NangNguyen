<template>
  <div class="article">
    <div class="title">Article</div>
    <div class="article-list">
      <div v-for="(item, index) in articles" :key="index" class="article-item">
        <img :src="item.img" />
        <div class="item-content">
          <div class="item-content-title">{{ item.name }}</div>
          <div>
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    articles: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.article {
  padding-top: 40px;
  .title {
    font-size: 24px;
    font-weight: 600;
  }
  .article-list {
    .article-item {
      display: flex;
      padding-top: 20px;

      .item-content {
        display: block;
        padding-left: 20px;

        .item-content-title {
          font-size: 20px;
          padding-bottom: 20px;
        }
      }
    }
  }
}
</style>
