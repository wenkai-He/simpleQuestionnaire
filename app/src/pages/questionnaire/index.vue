<template>
   <div>
    <h1 class="title">自我表征的衰老量表</h1>
    <div
      style="margin-top: 3%"
      v-for="(questionnaire, index) in questionnaireList"
      :key="questionnaire.id"
    >
      <el-card style="margin-left: 10%; margin-right: 10%">
        <div slot="header" class="clearfix">
          <span class="smallTitle">{{ questionnaire.title }}</span>
        </div>
        <el-radio-group v-model="questionnaire.radio">
          <el-radio
            v-for="(option, index) in questionnaire.options"
            :label="option"
            :key="option.id"
            @change="showValue(questionnaire.id, option.id)"
            >{{ option.name }}</el-radio
          >
        </el-radio-group>
      </el-card>
    </div>
    <el-tooltip
      effect="dark"
      :disabled="questionnaireResult.indexOf(0)===-1?true:false"
      content="未完成问卷"
      placement="top"
    >
    <div class="button">
    <el-button type="primary" :disabled="questionnaireResult.indexOf(0)===-1?false:true"  @click="toResult">提交</el-button>
    </div>
  </el-tooltip>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "questionnaire",
  
  data() {
    return {
        questionnaireResult: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    };
  },
   
  mounted() {
    this.$store.dispatch("getQuestionnaire");
  },
  computed: {
    ...mapState({
      questionnaireList: (state) => state.questionnaireList,
    }),
  },
  methods: {
    showValue(questionnaireId, optionId) {
      this.questionnaireResult.splice(questionnaireId-1,1,optionId)
    },
    toResult(){
      setTimeout(()=>{
        this.$bus.$emit("questionnaireResult",this.questionnaireResult)
      },100)
      this.$router.push("/result")
    }
  },
};
</script>

<style scoped>
.title {
  margin-top: -7px;
  text-align: center;
}
.smallTitle {
  text-align: center;
  display: block;
}
.el-radio-group {
  text-align: center;
  display: block;
}
.button{
  display: blcok;
  margin-top: 3%;
  margin-left:48%;
  margin-right:47%
}
</style>