<template>
  <div>
    <h1>膳食计算器</h1>
    <breakfast></breakfast>
  </div>
</template>

<script>
import breakfast from "/src/components/breakfast.vue";
export default {
  components: {
    breakfast,
  },
  mounted() {
    this.$store.dispatch("getNumber");
    this.$store.dispatch("getFood");
  },
};
</script>
<style scoped>
h1 {
  margin-top: -7px;
  text-align: center;
}
</style>

