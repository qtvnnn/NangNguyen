<template>
  <div class="hello" id="main-wrapper">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  components: {
    HelloWorld
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.content {
  padding-top: 30px;
  display: grid;
  text-align: center;
  &-title {
    font-size: 24px;
  }
}
.footer {
  margin-top: 30px;
  border-top: 1px solid gray;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
