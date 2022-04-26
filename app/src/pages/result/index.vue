<template>
  <div>
    <el-button type="primary" plain class="button" @click.native="goMain">回到主页</el-button>
    <div id="threed">
      <div class="score">
        <psychological :psychology="towNumber(psycology)"></psychological>
        <social :social="towNumber(social)"></social>
        <psycial :psycial="towNumber(psycial)"></psycial>
      </div>
      <div class="age">
        <age :age="towNumber(psycialAge)"></age>
      </div>
    </div>
  </div>
</template>

<script>
import psychological from "/src/components/psychological.vue";
import social from "/src/components/social.vue";
import psycial from "/src/components/psycial.vue";
import age from "/src/components/age.vue";
export default {
  components: {
    psychological,
    social,
    psycial,
    age,
  },
  name: "Result",
  data() {
    return {
      result: [],
      psycial1sum: 0,
      psycial2sum: 0,
      psycial3sum: 0,
      psycology1sum: 10,
      psycology2sum: 0,
      psycology3sum: 0,
      social1sum: 0,
      social2sum: 0,
      social3sum: 0,
    };
  },
  mounted() {
    this.$bus.$on("questionnaireResult", (Result) => {
      this.result = Result.map(Number);
      (this.psycial1sum = 0),
        (this.psycial2sum = 0),
        (this.psycial3sum = 0),
        (this.psycology1sum = 0),
        (this.psycology2sum = 0),
        (this.psycology3sum = 0),
        (this.social1sum = 0),
        (this.social2sum = 0),
        (this.social3sum = 0);
    });
  },
  methods: {
    goMain(){
      this.$router.push('/')
    },
    towNumber(val) {
      return val.toFixed(1);
    },
    toNumber(val) {
      return val.toFixed(0);
    },
  },
  computed: {
    psycial: {
      get: function () {
        for (let i = 0; i < 9; i++) {
          this.psycial1sum += this.result[i];
        }
        this.psycial1sum *= 0.5396;
        for (var i = 9; i < 16; i++) {
          this.psycial2sum += this.result[i];
        }
        this.psycial2sum *= 0.1634;
        for (var i = 16; i < 25; i++) {
          this.psycial3sum += this.result[i];
        }
        this.psycial3sum *= 0.297;
        return this.psycial1sum + this.psycial2sum + this.psycial3sum;
      },
    },
    psycology: {
      get: function () {
        for (let i = 25; i < 32; i++) {
          this.psycology1sum += this.result[i];
        }
        this.psycology1sum *= 0.4934;
        for (var i = 32; i < 39; i++) {
          this.psycology2sum += this.result[i];
        }
        this.psycology2sum *= 0.3108;
        for (var i = 39; i < 46; i++) {
          this.psycology3sum += this.result[i];
        }
        this.psycology3sum *= 0.1958;
        return this.psycology1sum + this.psycology2sum + this.psycology3sum;
      },
    },
    social: {
      get: function () {
        for (let i = 46; i < 49; i++) {
          this.social1sum += this.result[i];
        }
        this.social1sum *= 0.5499;
        for (var i = 49; i < 53; i++) {
          this.social2sum += this.result[i];
        }
        this.social2sum -= this.result[57];
        this.social2sum *= 0.2098;
        for (var i = 53; i < 57; i++) {
          this.social3sum += this.result[i];
        }
        this.social3sum += this.result[58];
        this.social3sum *= 0.2402;
        return this.social1sum + this.social2sum + this.social3sum;
      },
    },
    total: {
      get: function () {
        return (
          this.psycial * 0.5936 + this.psycology * 0.2493 + this.social * 0.1571
        );
      },
    },
    psycialAge: {
      get: function () {
        return (this.total * 100) / 37.333;
      },
    },
  },
};
</script>

<style scoped>
.score {
  position: relative;
  display: flex;
  justify-content: space-around;
}
.age {
  display: flex;
  justify-content: center;
}
</style>
