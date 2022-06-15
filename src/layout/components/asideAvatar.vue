<template>
  <div class="demo-basic--circle">
    <div class="block">
      <el-avatar :src="clubInfo.logo??'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'" :size='35' :title="clubInfo.name"></el-avatar>
      <el-dropdown placement="bottom">
        <span class="el-dropdown-link">
          {{ clubInfo.name ?? 'admin'}}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-link style="width: 100%" href="#/page1" :underline="false">进入示例页面1</el-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-button @click="logout" type="danger" style="width:100%;color:red">退出</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import {useStore} from "vuex"
import {useRouter} from "vue-router"
import { computed,reactive,watch } from "vue"
import { ElMessageBox } from 'element-plus'
const store = useStore()
const route = useRouter()
const logout = () => {
  ElMessageBox.confirm("确认退出吗?", "提示", {}).then(() => {
    store.dispatch("user/logout").then(() => {
      route.replace("/")
    })
  })
}
const clubInfo = reactive({
  name: '',
  logo: '',
})
var userInfo = computed(() => {
  return store.state.user.userInfo
})
watch(userInfo,()=>{
  if(userInfo.value){
    clubInfo.name = userInfo.value.name
    clubInfo.logo = userInfo.value.logo
  }
},{ immediate: true,deep:true})

</script>
<style scoped>
.demo-basic--circle {
  display: inline-block;
}
.block {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

#large {
  font-size: 16px;
}

.el-dropdown {
  margin-right: 10px;
}
.el-dropdown-link {
  display: inline-block;
  display: flex;
  justify-content: center;
}
</style>
