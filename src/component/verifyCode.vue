<template>
    <div class="code-wrap">
        <div class="code-img">
            <img :src="validCode" alt="">
        </div>
        <div class="code-refresh" @click="getCode">

        </div>
    </div>
</template>
<script>
import * as api from '@/services/common'
export default {
    props:{
        value:{},
    },
    data(){
        return{
            validCode: '', loading: false,
            timer:null
        }
    },
    mounted() {
        this.getCode();
    },
    methods:{
        guid() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
                c
            ) {
                var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            });
        },
        async getCode(){
            this.loading = true;
            const a1 = this.guid();
            const res = await api.getCode(a1);
            if(res.code === 200){
                this.validCode =
                "data:image/png;base64," +
                btoa(
                new Uint8Array(res.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ""
                )
                );
            }else{
                this.loading = false;
            }
            if(this.timer){
                clearInterval(this.timer)
            }
            this.timer = setTimeout(this.getCode,20*1000)
        },
    }
}
</script>
<style lang="stylus">
.code-wrap
    display:flex;
</style>