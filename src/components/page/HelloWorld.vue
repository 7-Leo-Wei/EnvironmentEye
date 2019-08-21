<template>
  <div class="hello">
    <div v-JSTest1='color'>{{msg}}</div>
    <div>
      <ul>
        <li v-for="(item, index) in letterArr" :key="index">{{item}}</li>
      </ul>
    </div>
    <el-button type="primary" @click="changeLetterArr">changeLetterArr</el-button>
    <!-- <el-button type="danger" onclick="app.$destroy()">销毁app</el-button> -->
  </div>
</template>

<script>
import Vue from 'vue';
Vue.directive('JSTest1', function(el, binding){
  el.style.color = binding.value;
});
function showCons() {
  console.log('0000');
}
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      color: '#ff0099',
      letterArr: ['aaa', 'bbb', 'ccc']
    }
  },
  methods: {
    changeLetterArr() {
      Vue.set(this.letterArr, 1, 'dd');
    }
  },
  beforeCreate() {
    console.log('1-beforeCreate- 初始化之前');
  },
  created() {
    console.log('2-create- 创建完成');
  },
  beforeMount() {
    console.log('3-beforeMount- 挂载之前');
  },
  mounted() {
    console.log('4-mounted- 挂载完成');
  },
  beforeUpdate() {
    console.log('5-beforeUpdate- 数据更新前');
  },
  updated() {
    console.log('6-create- 数据更新完成');
  },
  activated() {
    console.log('7-activated');
  },
  deactivated() {
    console.log('8-deactivated');
  },
  beforeDestroy() {
    console.log('9-beforeDestroy- 销毁前');
  },
  destroyed() {
    console.log('10-destroyed- 销毁后');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
