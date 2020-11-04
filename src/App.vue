<template>
  <div id="app">
    <!-- <Layout /> -->
    <router-view />
    <!-- <div id="mainTitle">银河计费系统对接项目</div>
    <div id="mainContent">
      <Row>
        <Col span="4">
          <Menu theme="light" :expandedKeys.sync="expandedKeys" :selectedKey.sync="selectedKey">
            <MenuItem key="1" @select="onSelect">
              <Icon class="ion-flag" />系统管理
              <Menu>
                <MenuItem key="/" to='/'>首页</MenuItem>
                <MenuItem key="/About" to='/About'>关于</MenuItem>
              </Menu>
            </MenuItem>
          </Menu>
        </Col>
        <Col span="20">
          <router-view />
        </Col>
      </Row>
    </div> -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="stylus">
::-webkit-scrollbar {
  width: 8px !important;
  height: 8px !important;
}

::-webkit-scrollbar-thumb {
  border-radius: 0 !important;
  background: #908c8c !important;
}

::-webkit-scrollbar-track {
  background: #eeeeee !important;
}

#mainTitle {
  background: #a8cbef !important;
  color: #2b2b2b;
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

#mainContent {
  margin-top: 50px;
  height: 100%;
}

.k-row {
  height: 100%;
}
</style>
