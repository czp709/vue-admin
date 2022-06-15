<template>
  <el-menu class="el-menu-vertical-demo" :default-active="path" :background-color="$store.state.aside_color"
    :text-color="$store.state.aside_text_color" unique-opened router ref="asidemenu"
    :collapse="$store.state.control_lable.menufold" v-for="(item) in List" :key="item.path">
    <el-menu-item :index="item.path" v-if="!item.children" :key="item.index">
      <EIcon :type="item.meta.icon" :size="20" color="rgba(53, 131, 208, 0.5)" />
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
    <el-sub-menu :index="item.path" v-else>
      <template #title>
        <EIcon :type="item.meta.icon" :size="20" color="rgba(53, 131, 208, 0.5)" />
        <span>{{ item.meta.title }}</span>
      </template>
      <el-menu-item v-for="child in item.children" :key="child.index" :index="child.path">
        <EIcon :type="child.meta.icon" :size="20" color="rgba(53, 131, 208, 0.5)" />
        <span>{{ child.meta.title }}</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script setup>
import EIcon from "@/components/icon";
import useMenuFilter from "@/utils/menuFilter";
const { List, path } = useMenuFilter();
</script>
<style scoped>
.el-menu {
  border-right: 0 !important;
  padding: 0 5px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

.el-menu-vertical-demo:is(.el-menu--collapse) {
  width: auto;
}

.el-sub-menu__title,
.el-menu-item {
  min-width: 0 !important;
  padding: 0 20px !important;
  margin-bottom: 3px !important;
  border-radius: 10px !important;
}

.el-sub-menu {
  padding: 0 5px !important;
  min-width: 0 !important;
}

.el-menu-item,
.el-submenu {
  border-left: rgba(0, 0, 0, 0) solid 4px !important;
  border-right: rgba(0, 0, 0, 0) solid 4px !important;
  background-color: rgba(0, 0, 0, 0) !important;
}

.el-menu-item.is-active,
.el-submenu.el-submenu__title:hover {
  background-color: #33a2ef !important;
  color: white !important;
}

.el-menu-item:hover {
  background-color: #33a2ef !important;
}

.el-menu--popup {
  padding: 5px !important;
}

.el-popper,
.is-pure,
.is-light {
  border: none !important;
  border-radius: 10px;
}
</style>
