<template>
  <div>
    <div>
      <Button>default</Button>
      <Button type="primary">primary134454</Button>
      <Button type="secondary">secondary</Button>
      <Button type="warning">warning</Button>
      <Button type="danger">danger</Button>
      <Button type="success">success</Button>
      <Button type="none">none</Button>
      <Button type="link">link</Button>
    </div>
  </div>
</template>

<script>
import Button from "kpc-vue/components/button";
 
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    Button,
  
  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.k-carousel-item
    background #333 
    color #fff
    line-height 300px
    text-align center
    font-size 30px
.k-btn {
  margin-right: 20px;
}

h3 {
  margin: 40px 0 0;
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
</style>
