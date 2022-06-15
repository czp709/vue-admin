<template>
  <div class="login-wrap bruce" v-loading="loading">
    <ul class="bubble-bgwall">
      <li>zipen</li>
      <li>zipen</li>
      <li>zipen</li>
      <li>zipen</li>
      <li>zipen</li>
      <li>zipen</li>
    </ul>
    <div class="ms-login">
      <div class="title">登录</div>
      <el-form :model="ruleForm" :rules="rules" ref="loginForm" label-width="0px">
        <el-form-item prop="username" label="">
          <el-input type="text" v-model="ruleForm.username" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="pwd" label="">
          <el-input type="password" placeholder="密码" show-password v-model="ruleForm.pwd"
            @keyup.enter="Vcode_show = true"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="Vcode_show = true" v-preventReClick>登录</el-button>
      <Vcode :show="Vcode_show" @success="login" @close="Vcode_show = false" />
    </div>
    <!-- 友情链接 -->
    <div class="links" v-if="$store.state.control_lable.isPC">
      <span>
        Copyright©2022 vue3
      </span>
      <span>
        作者:
        <a href="http://github.com/czp709" target="_blank">@zipen</a>
      </span>
      <span>
        邮箱
        <a href="mailto:chenzhipeng709@163.com" target="_blank">chenzhipeng709@163.com</a>
      </span>
      <a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2021008006号</a>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import Vcode from "vue3-puzzle-vcode";
import user from '@/api/user';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const loading = ref(false);
const Vcode_show = ref(false);
let ruleForm = reactive({
  username: 'oszua',
  pwd: 'pythonidle37.'
});
const rules = {
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
  ]
};
const router = useRouter();
const store = useStore();
const login = () => {
  Vcode_show.value = false;
  loading.value = true;
  user.loginApi(ruleForm).then(res => {
    loading.value = false;
    console.log(res);
    if (res.data.code == 200) {
      store.dispatch("user/saveUserInfo", res).then(() => {
        router.replace("/home");
      });
    }
  }).catch(err => {
    loading.value = false;
    console.log(err);
  });
};
</script>
<style scoped>
@import "@/assets/style.css";
@import "@/assets/style.scss";

.login-wrap {
  width: 100%;
  height: 100vh;
  z-index: 100 !important;
}

.title {
  font-size: 25px;
  text-align: center;
  color: rgb(73, 73, 77);
  margin-bottom: 10px;
}

.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: auto;
  padding: 30px;
  border-radius: 15px;
  background: rgba(250, 250, 250, 0.3);
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-animation: fadenum 1.5s ease;
  -moz-animation: fadenum 1.5s ease;
  animation: fadenum 1.5s ease;
}

@-webkit-keyframes fadenum {

  /*设置内容由显示变为隐藏*/
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadenum {

  /*设置内容由显示变为隐藏*/
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-o-keyframes fadenum {

  /*设置内容由显示变为隐藏*/
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadenum {

  /*设置内容由显示变为隐藏*/
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.el-form {
  margin: 20px 0;
}

.login-btn button {
  width: 100%;
  height: 36px;
}

.el-link {
  font-size: 10px !important;
  margin-top: 20px;
  text-align: center;
}

.links {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: rgba(250, 250, 250, 0.4);
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #666;
  font-size: 12px;
}

a {
  color: #409eff;
  text-decoration: none;
}

a:visited {
  color: #409eff;
  text-decoration: none;
}
</style>
