<template>
  <div>
    <el-button type="primary" plain class="button" @click.native="goMain">回到主页</el-button>
    <h1>您的饮食评分为：{{ total }}分</h1>
    <h5>
      评分为负代表您的饮食具有减缓衰老的潜力，评分为正代表您的饮食具有加速衰老的潜力。
    </h5>
    <div v-if="this.totalEnergy > 2000">
      <h3>您的热量太高了，给您推荐以下低热量食物</h3>
      <div class="food">
        <div class="item">
          <img src="../../assets/lowEnergy/1.jpg" />
          <h4>大白菜</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowEnergy/2.jpg" />
          <h4>黄瓜</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowEnergy/3.jpg" />
          <h4>木瓜</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowEnergy/4.jpg" />
          <h4>生菜</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowEnergy/5.jpg" />
          <h4>土豆</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowEnergy/6.jpg" />
          <h4>西瓜</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowEnergy/7.jpg" />
          <h4>杨梅</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowEnergy/8.jpg" />
          <h4>油麦菜</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowEnergy/9.jpg" />
          <h4>芋头</h4>
        </div>
      </div>
    </div>
    <div v-if="this.totalNa > 1224">
      <h3>您的食物中含钠太高了，给您推荐以下低钠食物</h3>
      <div  class="food">
        <div class="item">
          <img src="../../assets/lowNa/1.jpg" />
          <h4>菠萝</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowNa/2.jpg" />
          <h4>南瓜</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowNa/3.jpg" />
          <h4>苹果</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowNa/4.jpg" />
          <h4>柿子</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowNa/5.jpg" />
          <h4>香蕉</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowNa/6.jpg" />
          <h4>芸豆</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowNa/7.jpg" />
          <h4>竹笋</h4>
        </div>
      </div>
    </div>

    <div v-if="this.totalK < 3645">
      <h3>您的食物中含钾太低了，给您推荐以下高钾食物</h3>
      <div  class="food">
        <div class="item">
          <img src="../../assets/lowK/1.jpg" />
          <h4>红枣</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowK/2.jpg" />
          <h4>绿豆</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowK/3.jpg" />
          <h4>香蕉</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowK/4.jpg" />
          <h4>椰子</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowK/5.jpg" />
          <h4>红豆</h4>
        </div>
      </div>
    </div>

    <div v-if="this.totaldietaryfiber < 43">
      <h3>您的食物中膳食纤维量太低了，给您推荐以下高纤维食物</h3>
      <div  class="food">
        <div class="item">
          <img src="../../assets/lowFiber/1.jpg" />
          <h4>扁豆</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowFiber/2.jpg" />
          <h4>麸皮</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowFiber/3.jpg" />
          <h4>毛豆</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowFiber/4.jpg" />
          <h4>豌豆</h4>
        </div>
        <div class="item">
          <img src="../../assets/lowFiber/5.jpg" />
          <h4>杏仁</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      breakfastSelect: [],
      breakfastInput: [],
      breakfastValue: 0,
      lowEnergy: [
        {
          id: "1",
          imgUrl: "/lowEnergy/1.jpg",
        },
        {
          id: "2",
          imgUrl: "../../assets/lowEnergy/2.jpg",
        },
        {
          id: "3",
          imgUrl: "../../assets/lowEnergy/3.jpg",
        },
        {
          id: "4",
          imgUrl: "../../assets/lowEnergy/4.jpg",
        },
        {
          id: "5",
          imgUrl: "../../assets/lowEnergy/5.jpg",
        },
        {
          id: "6",
          imgUrl: "../../assets/lowEnergy/6.jpg",
        },
        {
          id: "7",
          imgUrl: "../../assets/lowEnergy/7.jpg",
        },
        {
          id: "8",
          imgUrl: "../../assets/lowEnergy/8.jpg",
        },
        {
          id: "9",
          imgUrl: "../../assets/lowEnergy/9.jpg",
        },
      ],
      lowFiber: [
        {
          id: "1",
          imgUrl: "../../assets/lowFiber/1.jpg",
        },
        {
          id: "2",
          imgUrl: "../../assets/lowFiber/2.jpg",
        },
        {
          id: "3",
          imgUrl: "../../assets/lowFiber/3.jpg",
        },
        {
          id: "4",
          imgUrl: "../../assets/lowFiber/4.jpg",
        },
        {
          id: "5",
          imgUrl: "../../assets/lowFiber/5.jpg",
        },
      ],
      lowK: [
        {
          id: "1",
          imgUrl: "../../assets/lowK/1.jpg",
        },
        {
          id: "2",
          imgUrl: "../../assets/lowK/2.jpg",
        },
        {
          id: "3",
          imgUrl: "../../assets/lowK/3.jpg",
        },
        {
          id: "4",
          imgUrl: "../../assets/lowK/4.jpg",
        },
        {
          id: "5",
          imgUrl: "../../assets/lowK/5.jpg",
        },
      ],
      lowNa: [
        {
          id: "1",
          imgUrl: "../../assets/lowNa/1.jpg",
        },
        {
          id: "2",
          imgUrl: "../../assets/lowNa/2.jpg",
        },
        {
          id: "3",
          imgUrl: "../../assets/lowNa/3.jpg",
        },
        {
          id: "4",
          imgUrl: "../../assets/lowNa/4.jpg",
        },
        {
          id: "5",
          imgUrl: "../../assets/lowNa/5.jpg",
        },
        {
          id: "6",
          imgUrl: "../../assets/lowNa/6.jpg",
        },
        {
          id: "7",
          imgUrl: "../../assets/lowNa/7.jpg",
        },
      ],
    };
  },
  mounted() {
    this.$bus.$on(
      "breakfastValue",
      (breakfastValue) => (this.breakfastValue = breakfastValue + 2)
    );
    this.$bus.$on(
      "breakfastSelect",
      (breakfastSelect) => (this.breakfastSelect = breakfastSelect)
    );
    this.$bus.$on(
      "breakfastInput",
      (breakfastInput) => (this.breakfastInput = breakfastInput)
    );
  },
  computed: {
    ...mapState({
      food: (state) => state.food,
    }),
    energy() {
      let arr = [];
      for (let i = 0; i < this.breakfastSelect.length; i++) {
        arr[i] = this.food[Number(this.breakfastSelect[i]) - 1].energy;
      }
      return arr;
    },
    totalEnergy() {
      let sum = 0;
      for (let i = 0; i < this.energy.length; i++) {
        sum += this.energy[i] * this.breakfastInput[i];
      }
      return sum;
    },
    protein() {
      let arr = [];
      for (let i = 0; i < this.breakfastSelect.length; i++) {
        arr[i] = this.food[Number(this.breakfastSelect[i]) - 1].protein;
      }
      return arr;
    },
    totalprotein() {
      let sum = 0;
      for (let i = 0; i < this.protein.length; i++) {
        sum += this.protein[i] * this.breakfastInput[i];
      }
      return sum;
    },
    K() {
      let arr = [];
      for (let i = 0; i < this.breakfastSelect.length; i++) {
        arr[i] = this.food[Number(this.breakfastSelect[i]) - 1].K;
      }
      return arr;
    },
    totalK() {
      let sum = 0;
      for (let i = 0; i < this.K.length; i++) {
        sum += this.K[i] * this.breakfastInput[i];
      }
      return sum;
    },
    Na() {
      let arr = [];
      for (let i = 0; i < this.breakfastSelect.length; i++) {
        arr[i] = this.food[Number(this.breakfastSelect[i]) - 1].Na;
      }
      return arr;
    },
    totalNa() {
      let sum = 0;
      for (let i = 0; i < this.Na.length; i++) {
        sum += this.K[i] * this.breakfastInput[i];
      }
      return sum;
    },
    saturatedFat() {
      let arr = [];
      for (let i = 0; i < this.breakfastSelect.length; i++) {
        arr[i] = this.food[Number(this.breakfastSelect[i]) - 1].saturatedFat;
      }
      return arr;
    },
    totalsaturatedFat() {
      let sum = 0;
      for (let i = 0; i < this.saturatedFat.length; i++) {
        sum += this.K[i] * this.breakfastInput[i];
      }
      return sum;
    },
    dietaryfiber() {
      let arr = [];
      for (let i = 0; i < this.breakfastSelect.length; i++) {
        arr[i] = this.food[Number(this.breakfastSelect[i]) - 1].dietaryfiber;
      }
      return arr;
    },
    totaldietaryfiber() {
      let sum = 0;
      for (let i = 0; i < this.dietaryfiber.length; i++) {
        sum += this.dietaryfiber[i] * this.breakfastInput[i];
      }
      return sum;
    },
    total() {
      return (
        -6.849 +
        0.002 * this.totalNa +
        0.007 * this.totalEnergy -
        0.005 * this.totalK +
        0.091 * this.totalprotein -
        0.362 * this.totaldietaryfiber -
        0.268 * this.totalsaturatedFat
      ).toFixed(2);
    },
  },
  methods: {
     goMain(){
      this.$router.push('/')
    },
  },
};
</script>

<style>
.food {
  /* text-align: center; */
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}
h6 {
  text-align: center;
}
h5 {
  text-align: center;
}
h4{
  text-align: center;
}
h3 {
  margin-top: 100px;
  text-align: center;
}
h1 {
  margin-top: -7px;
  text-align: center;
  
}
img {
  width: 150px;
  padding: 25px;
  height: 150px;
}
</style>