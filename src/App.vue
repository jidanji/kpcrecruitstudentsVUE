<template>
  <div id="app">
    <div id="mainTitle">银河对接项目</div>
    <router-view />
  </div>
</template>

<style lang="stylus">
#mainTitle {
  background: #000000;
  color: #ffffff;
  text-align: left;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  padding-left: 10px;
  letter-spacing: 2px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>
