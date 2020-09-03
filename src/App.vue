<template>
  <div id="app">
    <div id="mainTitle">银河计费系统对接项目</div>
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
    </div>
  </div>
</template>
<script>
import { Row, Col } from "kpc-vue/components/grid";

import { Menu, MenuItem } from "kpc-vue/components/menu";
import Icon from "kpc-vue/components/icon";

export default {
  watch:{
    $route(){
      this.onRouteChanged();
    }
  },
  components: {
    Row,
    Col,
    Menu,
    MenuItem,
    Icon,
  },
  data() {
    return {
      expandedKeys: [],
      selectedKey: "",
    };
  },
  methods: {
    onSelect(item) {
      console.log("key", item.get("key"));
    },
    onRouteChanged() {
      let that = this;
      debugger;
      that.selectedKey = that.$route.path;
    }
  },
  mounted(){
    this.onRouteChanged();
  },
  created(){
    this.onRouteChanged();
  }
};
</script>

<style lang="stylus">
::-webkit-scrollbar {
  width: 6px !important;
  height: 6px !important;
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
}
</style>
