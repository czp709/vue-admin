<template>
  <div class="header" style="text-align: right; font-size: 12px;">
    <el-tooltip class="item" effect="dark" content="点击展开/收起侧边导航栏" placement="bottom">
      <span @click="$store.commit('control_lable/changefold')">
        <el-icon v-show="$store.state.control_lable.menufold">
          <Expand />
        </el-icon>
        <el-icon v-show="!$store.state.control_lable.menufold">
          <Fold />
        </el-icon>
      </span>
    </el-tooltip>
    <div class="header_right">
      <fullscreen class="fullscreen"></fullscreen>
      <Avatar></Avatar>
    </div>
  </div>
</template>
<script setup>
import Avatar from "./asideAvatar.vue";
import fullscreen from "./fullScreen.vue";
</script>
<style scoped>
.header {
  height: auto !important;
  padding: 10px 20px;
  border-bottom: 1px solid #dcdfe6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.header_right {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.fullscreen {
  margin-right: 10px;
}

.logout {
  display: inline-block;
}

.header i {
  font-size: 22px;
  float: left;
  color: #606266;
}
</style>
