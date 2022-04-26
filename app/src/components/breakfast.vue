<template>
  <div class="select">
    <h3>请选择一天所吃食物种类以及重量</h3>
    <el-select
      v-model="value"
      filterable
      placeholder="请选择或者输入"
      style="width: 100px"
    >
      <el-option
        v-for="item in number"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <h4>必选盐和油</h4>
    <div class="absolute">
      <div class="oil">
        <el-select
          v-model="selectValue[0]"
          placeholder="盐"
          disabled
        >
        <el-option
            v-for="item in food"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
           </el-option>
        </el-select>
        <el-input
          v-model="input[0]"
          placeholder="请输入重量(g)"
          style="width: 150px"
        ></el-input>
      </div>
      <div class="oil">
        <el-select
          v-model="selectValue[1]"
          placeholder="请选择油的种类"
        >
        <el-option
            v-for="item in food.slice(85,89)"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
           </el-option>
        </el-select>
        <el-input
          v-model="input[1]"
          placeholder="请输入重量(g)"
          style="width: 150px"
        ></el-input>
      </div>
    </div>
    <div class="breakfast">
      <div class="item" v-for="item in value" :key="item">
        <el-select
          v-model="selectValue[Number(item)+1]"
          filterable
          placeholder="请选择或者输入"
        >
          <el-option
            v-for="item in food"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="selectValue.indexOf(item.value)!==-1"
          >
          </el-option>
        </el-select>
        <el-input
          v-model="input[Number(item)+1]"
          placeholder="请输入重量(g)"
          style="width: 150px"
        ></el-input>
      </div>
    </div>
    <el-tooltip
      effect="dark"
      :disabled="booling ? false : true"
      content="未填完所有表格"
      placement="top"
    >
      <div class="button">
        <el-button
          type="primary"
          :disabled="booling ? true : false"
          @click="toResult"
          >提交</el-button
        >
      </div>
    </el-tooltip>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      value: "1",
      selectValue: ["90","","", "", "", "", "", "", "", "", "", "","", "", "", "", "", "", "", "", "", ""],
      input: ["","","", "", "", "", "", "", "", "", "", "","", "", "", "", "", "", "", "", "", ""],
    };
  },

  computed: {
    ...mapState({
      number: (state) => state.number,
      food: (state) => state.food,
    }),
    booling() {
      return (
        this.selectValue.slice(0,Number(this.value)+2).some(item=>item=='')||this.input.slice(0,Number(this.value)+2).some(item=>item=='')
      );
    },
  },
  methods: {
    toResult() {
      setTimeout(() => {
        this.$bus.$emit("breakfastSelect", this.selectValue.slice(0,Number(this.value)+2));
        this.$bus.$emit("breakfastInput", this.input.slice(0,Number(this.value)+2));
        this.$bus.$emit("breakfastValue", Number(this.value));
      }, 100);
      this.$router.push('/dietResult')
    },
  },
};
</script>
<style scoped>
.select {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.breakfast {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  
}
.absolute{
  display: flex;
  justify-content: space-between;
}
.oil{
  padding: 10px;
}
h4{
    margin-top: 50px;
}
.item {
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  justify-content: space-around;
}
</style>