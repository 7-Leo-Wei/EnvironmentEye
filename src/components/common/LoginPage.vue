<template>
  <div id="loginPage">
    <el-container>
      <el-header class="loginPageHeader">
        <div class="logoImg">
          <img src="../../../static/images/logo.png" alt="智眼">
        </div>
        <div class="sysName">
          <p class="chineseWords">环保天眼·智能视觉监管平台</p>
          <p class="englishWords">"Environmental Eyes" Intelligent Vision Supervision Platform</p>
        </div>
      </el-header>
      <div class="loginDiv">
        <div class="errorTips">
          <p class="loginError">用户名或密码错误</p>
          <p class="helpNotice">请联系管理员</p>
          <p class="noEmptyLgNm">用户名不能为空</p>
          <p class="noEmptyPswd">密码不能为空</p>
        </div>
        <div class="inputDiv">
          <el-input placeholder="请输入用户名" v-model="iptLoginName" clearable @focus="hideErrorTips">
            <template slot="prepend"><i class="el-icon-user"></i></template>
          </el-input>
          <el-input placeholder="请输入密码" v-model="iptPasswords" show-password @focus="hideErrorTips">
            <template slot="prepend"><i class="el-icon-lock"></i></template>
          </el-input>
          <el-button type="primary" @click="checkLoginVal">登录</el-button>
        </div>
        <div class="loginTips">
          <div class="remember">
            <el-switch v-model="rememberMe"></el-switch>
            <p>记住我</p>
          </div>
          <div class="loginProb">
            <p @click="showLoginProbTips">登录遇到问题</p>
          </div>
        </div>
      </div>
      <div class="inforDiv">
        <div class="slogan">
          <p>让我们的地球更绿色</p>
        </div>
        <div class="sysInfor">
          <p>服务热线：023-68161560 | 技术支持：重庆扬讯软件技术股份有限公司</p>
          <p>©2018 Chongqing Upsoft Technology Co., Ltd.All Rights Reserved.</p>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'loginPage',
    data() {
      return {
        iptLoginName: 'admin',
        iptPasswords: '000000',
        rememberMe: false
      }
    },
    methods: {
      hideErrorTips() {
        $(".errorTips p").fadeOut();
      },
      showLoginProbTips() {
        $(".errorTips p.helpNotice").show();
      },
      showLoginError() {
        if (this.iptLoginName != 'admin' || this.iptPasswords != '000000') {
          $(".errorTips p.loginError").show();
          return false;
        }else {
          return true;
        }
      },
      showNoEmptyLgNm() {
        if (!this.iptLoginName) {
          $(".errorTips p.noEmptyLgNm").show();
          return false;
        }else {
          return true;
        }
      },
      showNoEmptyPswd() {
        if (!this.iptPasswords) {
          $(".errorTips p.noEmptyPswd").show();
          return false;
        }else {
          return true;
        }
      },
      checkLoginVal() {
        var _this = this;
        if (this.showNoEmptyLgNm() && this.showNoEmptyPswd() && this.showLoginError()) {
          $(".contentDiv").show();
          this.$router.push({
            name: 'MainPage',
            params: {
            	loginName: _this.iptLoginName
            }
          });
        }else {
          return;
        }
      }
    }
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#loginPage{
  width: 100%;
  height: 100%;
  background-image: url(../../../static/images/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.el-container{
  width: 100%;
  height: 100%;
}
.loginPageHeader{
  padding: 0 100px;
  margin: 4% 0 7%;
  height: 50px !important;
  display: flex;
  box-sizing: border-box;
}
.loginPageHeader .logoImg, .loginPageHeader .logoImg img{
  width: 50px;
  height: 50px;
}
.loginPageHeader .sysName{
  margin-left: 15px;
}
.loginPageHeader .sysName .chineseWords{
  font-size: 18px;
  letter-spacing: 2px;
  color: #fff;
  line-height: 30px;
}
.loginPageHeader .sysName .englishWords{
  font-size: 12px;
  letter-spacing: 1px;
  color: #fff;
  line-height: 20px;
}
.loginDiv{
  width: 480px;
  height: 330px;
  background: #fff;
  margin: 0 auto;
  padding: 30px 50px;
  box-sizing: border-box;
}
.loginDiv .errorTips{
  width: 100%;
  height: 20px;
  line-height: 20px;
}
.loginDiv .errorTips p{
  font-size: 14px;
  color: #fc4343;
  display: none;
}
.loginDiv .inputDiv .el-input{
  margin: 20px 0 0px;
  height: 40px;
  border-radius: 5px;
  overflow: hidden;
}
.loginDiv .inputDiv .el-input .el-input-group__prepend{
  background: #d1d9e0;
  width: 36px;
  padding: 0;
  text-align: center;
}
.loginDiv .inputDiv .el-input .el-input-group__prepend i{
  font-size: 20px;
  color: #fff;
}
.loginDiv .inputDiv .el-button{
  width: 100%;
  height: 40px;
  margin-top: 40px;
  font-size: 16px;
  letter-spacing: 4px;
}
.loginDiv .loginTips{
  width: 100%;
  height: 20px;
  line-height: 20px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.loginDiv .loginTips .remember{
  display: flex;
}
.loginDiv .loginTips .remember p{
  font-size: 12px;
  color: #A2A2A2;
  margin-left: 5px;
}
.loginDiv .loginTips .loginProb p{
  font-size: 12px;
  color: #5e93fc;
  text-decoration-line: underline;
  cursor: pointer;
}
.inforDiv{
  width: 480px;
  margin: 5% auto 0;
}
.inforDiv .slogan{
  font-size: 30px;
  letter-spacing: 10px;
  color: #0BF5D0;
  text-align: center;
}
.inforDiv .sysInfor{
  margin-top: 15%;
}
.inforDiv .sysInfor p{
  text-align: center;
  font-size: 12px;
  color: #B3B3B3;
  line-height: 20px;
}
</style>
<style>
	
</style>