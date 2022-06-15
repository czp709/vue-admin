<template>
  <el-menu class="el-menu-demo" mode="horizontal" :default-active="path" unique-opened router>
    <template v-for="(item) in List" :key="item.path">
      <el-menu-item :index="item.path" v-if="!item.children" :key="item.index">
        <EIcon :type="item.meta.icon" :size="20" color="rgba(53, 131, 208, 0.5)" />
      </el-menu-item>
      <el-sub-menu :index="item.path" v-else>
        <template #title>
          <EIcon :type="item.meta.icon" :size="20" color="rgba(53, 131, 208, 0.5)" />
        </template>
        <el-menu-item v-for="child in item.children" :key="child.index" :index="child.path">
          <EIcon :type="child.meta.icon" :size="20" color="rgba(53, 131, 208, 0.5)" />
          <span>{{ child.meta.title }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>
<script setup>
import useMenuFilter from "@/utils/menuFilter";
import EIcon from "@/components/icon";
const { List, path } = useMenuFilter();
</script>
<style scoped>
.header {
  justify-content: space-around !important;
}

.el-menu-demo {
  height: 100%;
  width: 100%;
}

.el-sub-menu {
  height: 100%;
}
</style>
