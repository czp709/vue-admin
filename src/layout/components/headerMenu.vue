<template>
  <el-menu class="el-menu-demo" mode="horizontal" :default-active="path" unique-opened router>
    <template v-for="item in List">
      <el-submenu :index="item.path" :key="item.path" v-if="item.children">
        <template #title>
          <EIcon :type="item.meta.icon" :size="20" color="rgba(53, 131, 208, 0.5)" />
        </template>
        <el-menu-item class="subs" :index="child.path" v-for="child in item.children" :key="child.index">
          <EIcon :type="item.meta.icon" :size="20" color="rgba(53, 131, 208, 0.5)" />
          {{ child.meta.title }}
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-else :index="item.path" :key="item.index">
        <EIcon :type="item.meta.icon" :size="20" color="rgba(53, 131, 208, 0.5)" />
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script setup>
import useMenuFilter from "@/utils/menuFilter";
import EIcon from "@/components/icon";
const {List,path} = useMenuFilter();
</script>
<style scoped>
.header {
  justify-content: space-around !important;
}

.el-menu-demo {
  height: 100%;
  width: 100%;
}
</style>
