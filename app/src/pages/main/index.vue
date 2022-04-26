<template>
  <div>
    <div class="background"></div>
    <h1>精食抗衰</h1>
    <h2>测测你的饮食有多抗老</h2>
    <div class="button">
      <button class="questionnaire" @click="gotoQuestionnaire">
        生理年龄测评
      </button>
      <button class="diet" @click="gotoDiet">饮食抗衰老测评</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoQuestionnaire() {
      this.$router.push("/questionnaire");
    },
    gotoDiet() {
      this.$router.push("/diet");
    },
  },
};
</script>

<style scoped>
h1 {
   margin-top: -7px;
  text-align: center;
}
h2 {
  text-align: center;
  margin-top:100px
}
.button {
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 50px;
}
.background {
  background-image: url("../../assets/scut.jpg");
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
.questionnaire {
  height: 200px;
  width: 200px;
}
.diet {
  height: 200px;
  width: 200px;
}
</style>