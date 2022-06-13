<template>
  <div style="width:100% !important;padding:40px 0;display:flex;justify-content:center;align-items: center;">
    <div class="error">
      <!-- 图片可保存到本地 -->
      <img src="../../assets/404.png">
      <p>抱歉！你访问的页面不存在 :( </p>
      <span class="back" @click="goback()">返回上页<br>({{ time }}s后自动返回)</span>
    </div>

  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
const router = useRouter();
let time = ref(5);
onMounted(() => {
  let timer = setInterval(() => {
    time.value--;
    if (time.value <= 0) {
      clearInterval(timer);
      goback();
    }
  }, 1000);
});
const goback = () => {
  router.go(-1);
};
</script>

<style scoped>
.error {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.error img {
  display: block;
  margin: 0 auto;
  width: 50%;
}

.error p {
  text-align: center;
  font-size: 16px !important;
  font-weight: 600;
}

.back {
  display: block;
  width: auto;
  text-align: center;
  margin: 20px auto;
  padding: 5px 20px;
  background-color: #1890ff;
  border-radius: 100px;
  cursor: pointer;
  color: white;
  font-size: 14px;
}
</style>
