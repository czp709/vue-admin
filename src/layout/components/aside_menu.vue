<template>
  <el-menu class="el-menu-vertical-demo" :default-active="path" :background-color="$store.state.aside_color"
    :text-color="$store.state.aside_text_color" unique-opened router ref="asidemenu"
    :collapse="$store.state.control_lable.menufold">
    <template v-for="item in List">
      <el-submenu :index="item.path" v-if="item.children" :key="item.path">
        <template #title>
          <EIcon :type="item.meta.icon" :size="20" color="rgba(53, 131, 208, 0.5)" />
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item :index="child.path" v-for="child in item.children" :key="child.path">
          <EIcon :type="item.meta.icon" :size="20" color="rgba(53, 131, 208, 0.5)" />
          <span>{{ child.meta.title }}</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item :index="item.path" v-else :key="item.index">
        <EIcon :type="item.meta.icon" :size="20" color="rgba(53, 131, 208, 0.5)" />
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script setup>
import useMenuFilter from "@/utils/menuFilter";
import EIcon from "@/components/icon";
const { List, path } = useMenuFilter();
</script>
<style scoped>
.el-menu {
  border-right: none !important;
  padding: 0 5px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
}

.el-menu-vertical-demo:is(.el-menu--collapse) {
  width: 70px;
}

.el-menu-item {
  min-width: 0 !important;
  padding: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px !important;
  border-radius: 10px !important;
}

.el-menu-item.is-active,
.el-submenu.el-submenu__title:hover {
  background-color: #33a2ef !important;
  color: white !important;
}

.el-menu-item:hover {
  background-color: #33a2ef !important;
}
</style>
