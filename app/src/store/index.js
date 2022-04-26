import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex);
import {reqQuestionnaire} from '../api'
import {reqNumber} from '../api'
import {reqFood} from '../api'
const state={
    questionnaireList:[],
    number:[],
    food:[]
}
const mutations={
    GETQUESTIONNAIRE(state,questionnaireList){
        state.questionnaireList=questionnaireList
    },
    GETNUMBER(state,number){
        state.number=number
    },
    GETFOOD(state,food){
        state.food=food
    }
}
const actions = {
    async getQuestionnaire({ commit }) {
        let result = await reqQuestionnaire()
        if (result.code === 200) {
            commit("GETQUESTIONNAIRE", result.data)
        }
    },
    async getNumber({ commit }) {
        let result = await reqNumber()
        if (result.code === 200) {
            commit("GETNUMBER", result.data)
        }
    },
    async getFood({ commit }) {
        let result = await reqFood()
        if (result.code === 200) {
            commit("GETFOOD", result.data)
        }
    }
}
const getters={};
export default new vuex.Store({
    state,
    mutations,
    actions,
    getters
})
