//引入mockjs
import Mock from 'mockjs';
import questionnaire from './questionnaire.json'
import food from './food.json'
import number from './number.json'
Mock.mock("/mock/questionnaire",{code:200,data:questionnaire});
Mock.mock("/mock/food",{code:200,data:food});
Mock.mock("/mock/number",{code:200,data:number});