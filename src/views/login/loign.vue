<template>
    <div>
        <div style="height: 300px;margin-top: 100px">
            <p style="text-align: center;"> <img src="../../assets/logo.png"></p>
        </div>
        <div style="width: 350px;margin: 0 auto">

            <el-form ref="form" :model="form">
                <el-form-item label="">
                    <el-input v-model="form.loginname" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input v-model="form.password" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button type="primary" style="width: 100%" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {login} from "../../http/api";

    export default {
        name: "loign",
        data(){
            return{
                form:{
                    loginname:"",
                    password:""
                }
            }
        },
        methods:{
            login(){
                login(this.form).then(res=>{
                    console.log(res)
                }).catch(e=>{
                    console.log(e)
                })
            }
        }
    }
</script>

<style scoped>

</style>