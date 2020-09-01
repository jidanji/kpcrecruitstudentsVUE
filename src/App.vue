<template>
  <div id="app">
    <div id="mainTitle">银河计费系统对接项目</div>
    <div id="mainContent">
      <Row>
        <Col span="4">
          <Menu theme='light' :expandedKeys.sync="expandedKeys" :selectedKey.sync="selectedKey">
            <MenuItem key="1" @select="onSelect">
              <Icon class="ion-flag" />menu 1
              <Menu>
                <MenuItem key="1-1">sub menu 1</MenuItem>
                <MenuItem key="1-2">sub menu 2</MenuItem>
                <MenuItem key="1-3" disabled>sub menu 3</MenuItem>
                <MenuItem key="1-4">sub menu 4</MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem key="2" disabled>
              <Icon class="ion-star" />menu 2
            </MenuItem>
            <MenuItem key="3">
              <i class="k-icon ion-heart"></i>menu 3
              <Menu>
                <MenuItem key="3-1">sub menu 1</MenuItem>
                <MenuItem key="3-2">sub menu 2</MenuItem>
                <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
                <MenuItem key="3-4">
                  sub menu 4
                  <Menu>
                    <MenuItem key="3-4-1">Option 1</MenuItem>
                    <MenuItem key="3-4-2">Option 2</MenuItem>
                  </Menu>
                </MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem key="4" to="/">
              <Icon class="ion-gear-b" />menu 4
            </MenuItem>
          </Menu>
        </Col>
        <Col span="20"><router-view /></Col>
      </Row>
    </div>

    
  </div>
</template>
<script>
import { Row, Col } from "kpc-vue/components/grid";

import { Menu, MenuItem } from "kpc-vue/components/menu";
import Icon from "kpc-vue/components/icon";

export default {
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
      selectedKey: "3-1",
    };
  },
  methods: {
    onSelect(item) {
      console.log("key", item.get("key"));
    },
  },
};
</script>

<style lang="stylus">
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
