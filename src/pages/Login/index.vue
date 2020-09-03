<template>
    <div class="login-wraper">
        <div class="login-boxs">
            <div class="login-tit">登录</div>
            <Form @submit="submit" ref="form" :hideLabel="true" labelWidth="0">
                
                <FormItem model="model.username" 
                    :rules="{required: true, message:'请输入用户名'}">
                    <Input v-model="model.username" placeholder="用户名" />
                </FormItem>
                <FormItem model="model.password"
                    :rules="{required: true,message:'请输入密码'}"
                >
                    <Input type="password" v-model="model.password"  placeholder="密码" />
                </FormItem>
                <FormItem class="btn-item">
                    <Button type="primary" htmlType="submit">登录</Button>
                </FormItem>
            </Form>
        </div>
        
    </div>
</template>
<script>
import {Form, FormItem} from 'kpc-vue/components/form';
import {Input} from 'kpc-vue/components/input';
import Button from 'kpc-vue/components/button';
import Message from 'kpc-vue/components/message';
import * as api from '@/services/common'
export default {
    components: {
        Form, FormItem, Input, Button,
    },
    data() {
        return {
            model: {
                channel:'WEB',
                clientId:'adminapp',
                username:'',
                password:''
            }
        }
    },
    methods: {
        async submit(values) {
            if (await this.$refs.form.validate()) {
                const res = await api.login({
                    ...this.model
                })
            } else {
                // 验证失败，我们可以获取第一条出错的FormItem
                console.log(this.$refs.form.getFirstInvalidFormItem());
            }
        },
        reset() {
            this.$refs.form.reset();
        },
    },
}
</script>
<style lang="stylus">

.login-wraper
    background:url("../../assets/login.jpg") 0 0 no-repeat;
    background-size:cover;
    min-height:calc(100vh - 50px);
    position:relative;

.login-boxs
    background:#fff;
    right:5%;
    top:150px;
    width:390px;
    position:absolute;
    padding:10px 30px 30px;
    box-size :border-box;
.login-tit
    font-size: 20px;
    text-align: left;
    padding-bottom: 20px;
    border-bottom:1px solid #e5e5e5;
    margin-bottom:10px;
.k-form-item > .k-label
    padding-right:0;
.k-input
    width:20.5rem;
.k-input .k-inner
    height:2.375rem;
.btn-item .k-content
    width:20.75rem;
.k-btn
    width:100%;
    height:2.375rem;
</style>