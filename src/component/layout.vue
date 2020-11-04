<template>
  <Layout id="layout" class="layout">
    <Aside fixed :collapse="collapse" size="large">
      <div class="logo">
        <div class="logoDiv">
          <img :src="logo" alt="" />
        </div>
        <div class="animate__animated animate__fadeInDown" v-if="!collapse">金山云数据运营平台</div>
      </div>
      <div>
        <div class="seperator"></div>
      </div>

      <Menu
        theme="light"
        :expandedKeys.sync="expandedKeys"
        :selectedKey.sync="selectedKey"
      >
        <MenuItem key="1" @select="onSelect">
          <Icon class="ion-flag" />系统管理
          <Menu>
            <MenuItem key="/table" to="/table">Table</MenuItem>
          </Menu>
        </MenuItem>
      </Menu>
    </Aside>
    <Layout>
      <Header>
        <div style="display: flex">
          <div style="width: 60px; text-align: center">
            <img :src="Group" @click="_toggle" />
          </div>
          <div class="logo" style="text-align: left; margin: 17px 0">
            <div class="animate__animated animate__fadeInDown" v-if="collapse">金山云数据运营平台</div>
          </div>
          <div style="flex: 1">
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
            </ul>
          </div>
        </div>
      </Header>
      <Body>
        <router-view />
      </Body>
    </Layout>
  </Layout>
</template>
<script>
import { Layout, Header, Aside, Body, Footer } from "kpc-vue/components/layout";
import { Menu, MenuItem } from "kpc-vue/components/menu";
import Icon from "kpc-vue/components/icon";
import { Breadcrumb, BreadcrumbItem } from "kpc-vue/components/breadcrumb";
import { Button } from "kpc-vue/components/button";
import logo from "@/assets/logo.png";

import $ from "jquery";
import Group from "@/assets/Group.png";

export default {
  watch: {
    collapse: function () {
      $(window).trigger("resize");
    },
    $route() {
      this.onRouteChanged();
    },
  },
  components: {
    Layout,
    Header,
    Aside,
    Body,
    Footer,
    Menu,
    MenuItem,
    Icon,
    Breadcrumb,
    BreadcrumbItem,
    Button,
  },
  data() {
    return {
      collapse: true,
      expandedKeys: ["1"],
      selectedKey: "1",
      logo,
      Group,
    };
  },
  methods: {
    onSelect(item) {
      console.log("key", item.get("key"));
    },
    onRouteChanged() {
      let that = this;
      that.selectedKey = that.$route.path;
    },
    _toggle() {
      this.collapse = !this.collapse;
    },
  },
  mounted() {
    this.onRouteChanged();
  },
  created() {
    this.onRouteChanged();
  },
};
</script>
<style lang="stylus">
.k-table > .k-spin {
  z-index: 9;
}

.k-layout {
  display: block;
}

.nav-link {
  padding: 0 1rem;
}

.wap {
}

.seperator {
  height: 1px;
  background: #E5E5E5;
  width: 90%;
  margin: 0 auto;
}

.k-menu.k-light {
  background: #ffffff;
}

.k-layout.k-has-aside .k-layout > .k-header {
  border-bottom: 0;
  box-shadow: 0 1px 5px #546a82;
  z-index: 99;
}

.k-layout > .k-aside.k-fixed {
  background-color: #ffffff;
  box-shadow: 0 1px 5px #546a82;
  z-index: 999;
}

.logo {
  display: flex;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #000;
  margin: 17px 20px;
}

.logoDiv {
  width: 45px;
  text-align: center;
  height: 30px;
}

.logo img {
  height: 30px;
}

.logo div {
  font-size: 17px;
  font-weight: bold;
  letter-spacing: 1px;
}

.k-breadcrumb {
  margin: 20px 0;
}

.k-aside.k-collapsed {
  .logo {
    margin: 17px 5px;
  }
}

.layout {
  height: 100%;
}

.layout .page-body {
  background: #f8f8fa;
  padding: 20px;
  box-sizing: border-box;
  margin: 0;
  min-height: calc(100% - 64px);
  width: 100%;
}

.page-wraper {
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-size: border-box;
}
</style>
