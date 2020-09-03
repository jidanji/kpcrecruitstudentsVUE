<template>
  <div>
    <div class="login-wraper">
     <div class="carousel-caption d-none d-md-block">
            <h5 class="animate__animated animate__fadeInDown">金山医疗</h5>
            <p class="animate__animated animate__fadeInDown">智能，共享，传播</p>
          </div>
    </div>
     <div class="index"> <div class="login-boxs">
        <div class="login-tit">登录</div>
        <Form class="login-form" @submit="submit" ref="form" :hideLabel="true" labelWidth="0">
          <FormItem model="model.username" :rules="{required: true, message:'请输入用户名'}">
            <Input v-model="model.username" placeholder="用户名" />
          </FormItem>
          <FormItem model="model.password" :rules="{required: true,message:'请输入密码'}">
            <Input type="password" v-model="model.password" placeholder="密码" />
          </FormItem>
          <FormItem class="btn-item">
            <Button type="primary" htmlType="submit">登录</Button>
          </FormItem>
        </Form>
      </div></div>
  </div>
</template>
<script>
import { Form, FormItem } from "kpc-vue/components/form";
import { Input } from "kpc-vue/components/input";
import Button from "kpc-vue/components/button";
import Message from "kpc-vue/components/message";
import * as api from "@/services/common";
import md5 from "js-md5";
export default {
  components: {
    Form,
    FormItem,
    Input,
    Button,
  },
  data() {
    return {
      loading: false,
      model: {
        channel: "WEB",
        clientId: "adminapp",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async submit(values) {
      this.loading = true;
      if (await this.$refs.form.validate()) {
        const params = { ...this.model };
        params.password = md5(params.password);
        const res = await api.login({
          data: { ...params },
        });
        if (res.code === 200) {
          let { accessToken, refreshToken, userId } = res.data;
          sessionStorage["accessToken"] = accessToken;
          sessionStorage["userId"] = userId;
          sessionStorage["userName"] = this.model.username;
          this.$router.push("/");
          this.loading = false;
        } else {
          Message["error"](res.message);
          this.loading = false;
        }
      } else {
        this.loading = false;
        // 验证失败，我们可以获取第一条出错的FormItem
        console.log(this.$refs.form.getFirstInvalidFormItem());
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
<style lang="stylus" scope>
.carousel-caption{
    position: absolute;
    right: unset;
    left: 15%;
    z-index: 10;
    padding-top: 0;
    padding-bottom: 0;
    color: #fff;
    text-align: center;
    top:30%
}
.carousel-caption p {
    color: #ffffff;
    font-size: 18px;
    margin-top: 30px;
    letter-spacing: 2px;
    text-align: left;
}
.carousel-caption h5 {
    color: #ffffff;
    font-size: 52px;
    line-height: 66px;
    letter-spacing: 5px;
    text-align: left;
}
.index {
  position: absolute;
  width: 100%;
  top: 0px;
  min-height: 600px;
  background-image: url('../../assets/index-bg.png');
  background-repeat: repeat;
  z-index: 2;
  min-height: calc(100vh);
}

.login-wraper {
  background: url('../../assets/a5.jpg') 0 0 no-repeat;
  background-size: cover;
  min-height: calc(100vh);
  position: relative;
}

.login-boxs {
  background: #fff;
  right: 5%;
  top: 150px;
  width: 390px;
  position: absolute;
  padding: 10px 30px 30px;
  box-size: border-box;
}

.login-tit {
  font-size: 20px;
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 20px;
}

.login-form {
  z-index: 1000;
}

.login-form .k-form-item > .k-label {
  padding-right: 0;
}

.login-form .k-input {
  width: 20.5rem;
}

.login-form .k-input .k-inner {
  height: 2.375rem;
}

.login-form .btn-item .k-content {
  width: 20.75rem;
}

.login-form .k-btn {
  width: 100%;
  height: 2.375rem;
}
</style>