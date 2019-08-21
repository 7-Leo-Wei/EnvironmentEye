<template>
  <div id="mainPage">
    <el-container>
      <el-header>
        <headerPart ref="headerPart" @navCtrlFunc="navCtrlFunc" :loginName="loginName"></headerPart>
      </el-header>
      <el-container style="height: calc(100% - 60px);">
        <el-aside width="250px">
          <leftNav ref="leftNav" @showAllNav="showAllNav" :loginName="loginName"></leftNav>
        </el-aside>
        <el-main style="height: 100%;overflow: auto;" class="div-scroll">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
import headerPart from '@/components/common/HeaderPart'
export default {
  name: 'MainPage',
  data() {
    return{
      loginName: ''
    }
  },
  components: {
    leftNav,
    headerPart
  },
  methods: {
    // 菜单栏控制
    navCtrlFunc(params) {
      if (!params[0]) {
        $(".el-aside").animate({width: "250px"});
      }else {
        $(".el-aside").animate({width: "45px"});
        this.$refs.leftNav.showChildNav(-1);
        // this.$refs.leftNav.showPage();
      }
      this.$refs.leftNav.handleNavTitle(params[0]);
    },
    // 菜单栏全宽设置
    showAllNav(params) {
      this.$refs.headerPart.handleNav(params[0]);
      this.navCtrlFunc(params[0]);
    }
  },
  beforeMount() {
    var _this = this;
    _this.loginName = _this.$route.params.loginName;
  },
  mounted() {
    this.$router.push({
      path: '/AlarmMap'
    })
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#mainPage{
  width: 100%;
  height: 100%;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
.el-container{
  width: 100%;
  height: 100%;
}
.el-header{
  padding: 0 !important;
}
.el-aside{
  overflow: hidden !important;
}
/*定义滚动条轨道*/
.div-scroll::-webkit-scrollbar-track
{
    background-color: rgba(241, 241, 241, 0.22);
    -webkit-box-shadow: inset 0 0 6px rgba(241, 241, 241, 0.22);
}
/*定义滚动条高宽及背景*/
.div-scroll::-webkit-scrollbar
{
    width: 6px;
    background-color: rgba(241, 241, 241, 0.34);
}
/*定义滚动条*/
.div-scroll::-webkit-scrollbar-thumb
{
    background-color: rgba(0, 0, 0, .4);
    border-radius: 10px;
}
</style>
