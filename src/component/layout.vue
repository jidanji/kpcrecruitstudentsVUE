<template>
    <Layout id="layout" class="layout">
        <Aside :collapse="collapse">
            <div class="logo">银河计费系统对接项目</div>
            <Menu
                :expandedKeys.sync="expandedKeys" 
                :selectedKey.sync="selectedKey"
            >
                <MenuItem key="1" @select="onSelect">
                    <Icon class="ion-flag" />系统管理
                    <Menu>
                        <MenuItem key="1-1" to='/'>首页</MenuItem>
                        <MenuItem key="1-2" to='/about'>关于</MenuItem>
                        <MenuItem key="1-3" to='/table'>Table</MenuItem>
                    </Menu>
                </MenuItem>
            </Menu>
        </Aside>
        <Layout>
            <Header>
                <Button type="none" size="large" style="height: 64px" @click="_toggle">
                    <Icon class="ion-navicon" size="30"/>
                </Button>
            </Header>
            <Body class="page-body">
                <router-view />
            </Body>
        </Layout>
    </Layout>
</template>
<script>
import {Layout, Header, Aside, Body, Footer} from 'kpc-vue/components/layout';
import {Menu, MenuItem} from 'kpc-vue/components/menu';
import Icon from 'kpc-vue/components/icon';
import {Breadcrumb, BreadcrumbItem} from 'kpc-vue/components/breadcrumb';
import {Button} from 'kpc-vue/components/button';

export default {
    watch:{
        $route(){
        this.onRouteChanged();
        }
    },
    components: {
        Layout, Header, Aside, Body, Footer, Menu, MenuItem, Icon, Breadcrumb, BreadcrumbItem, Button
    },
    data() {
        return {
            collapse: false,
            expandedKeys: ['1'],
            selectedKey: "1",
        }
    },
    methods: {
        onSelect(item) {
            console.log("key", item.get("key"));
        },
        onRouteChanged() {
            // let that = this;
            // that.selectedKey = that.$route.path;
        },
        _toggle() {
            this.collapse = !this.collapse;
        },
    },
    mounted(){
        this.onRouteChanged();
    },
    created(){
        this.onRouteChanged();
    }
}
</script>
<style lang="stylus">
.layout
    height:100%
.layout .page-body
    background #f8f8fa
    padding:20px
    box-size:border-box 
    margin:0
    min-height:calc(100% - 64px);
.page-wraper
    background:#fff
    width:100%
    height:100%;
    padding:20px;
    box-size:border-box;
</style>
