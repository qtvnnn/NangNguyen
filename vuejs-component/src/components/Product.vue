<template>
  <div class="product">
    <div class="product-title">Product</div>
    <div class="product-list">
      <div v-for="(item, index) in products" :key="index" class="product-list-item">
        <img :src="item.img" />
        <div class="item-info">
          <div class="product-name">{{ item.name }}</div>
          <div class="product-price">€ {{ item.price }}</div>
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
    products: Array
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.product {
  padding-top: 40px;
  &-title {
    font-size: 24px;
    font-weight: 600;
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 15px;
    &-item {
      border: 1px solid rgb(155, 150, 150);
      .item-info {
        padding: 10px;
        .product-name {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
