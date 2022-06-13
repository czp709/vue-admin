import { ref, computed, watch, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
function useMenuFilter() {
  const store = useStore();
  const route = useRoute();
  const List = computed(() => {
    return store.getters["user/addRouters"][0].children.filter((item) => {
      if (!item.meta.hidden) {
        return true;
      } else {
        return false;
      }
    });
  });
  let path = ref('/home');
  watch(() => route.path, () => {
    path.value = route.path;
  }, { immediate: true });
  onMounted(() => {
    path.value = route.path == '/' ? store.getters["user/addRouters"][0].children[1].path : route.path;
  });
  return {
    List,
    path
  }
}
export default useMenuFilter;