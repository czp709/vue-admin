<template>
  <div class="aside">
    <div class="aside_top">
      <img src="@/assets/logo.png" title="品牌logo">
      <span v-show="!$store.state.control_lable.menufold">Admin</span>
    </div>
    <asidemenu></asidemenu>
  </div>
</template>
<script setup>
import asidemenu from "@/layout/components/aside_menu"
</script>
<style scoped>
.aside_top {
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 10px;
}
.aside_top img {
  width: 47px;
  border-radius: 10px;
}
.aside_top span {
  margin-left: 10px;
  font-size: 24px;
}
</style>
