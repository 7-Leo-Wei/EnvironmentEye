<template>
	<div class="headerPart">
		<div class="logoPart">
          <img src="../../../static/images/logo.png" alt="智眼">
          <div class="logoName">
            <p>环保智眼</p>
            <p>Intelligent video analysis system</p>
          </div>
        </div>
        <div class="headCont">
        	<div class="leftPart">
        		<p class="navCtrl" @click="handleNav(null)">
        			<i class="icon icon-224" v-if="isNavShow"></i>
        			<i class="icon icon-225" else></i>
        		</p>
        		<p class="mainPage"><i class="icon icon-04"></i></p>
        	</div>
        	<div class="rightPart">
        		<p class="userInfor">
        			<i class="icon icon-16"></i>
        			<span>{{loginName}}</span>
        		</p>
        		<p class="loginOut" @click="loginOut">
        			<i class="icon icon-13"></i>
        			<span>退出</span>
        		</p>
        	</div>
        </div>
	</div>
</template>
<script>
	export default {
		name: 'headerPart',
		props:['loginName'],
		data() {
			return {
				isNavShow: false,
			}
		},
		methods: {
			//控制菜单栏显示隐藏
			handleNav(showAll) {
				if (!showAll) {
					this.isNavShow = !this.isNavShow;
					this.$emit('navCtrlFunc', [this.isNavShow]);
				}else {
					this.isNavShow = !showAll;
				}
			},
			loginOut() {
				this.$router.push({
			      path: '/'
			    })
			}	
		}
	}
</script>
<style>
div.headerPart{
	width: 100%;
	height: 60px;
	background: #000;
	padding: 0;
	display: flex;
	color: #fff;
}
div.headerPart .logoPart{
	width: 250px;
	display: flex;
	align-items: center;
}
div.headerPart .logoPart img{
  	margin: 0 3px;
}
div.headerPart .logoPart .logoName{
	height: 44px;
	text-align: left;
}
div.headerPart .logoPart .logoName p:first-child{
	font-size: 16px;
	letter-spacing: 2px;
	line-height: 28px;
}
div.headerPart .logoPart .logoName p:last-child{
	font-size: 12px;
	color: #fff;
	line-height: 16px;
}
div.headerPart .headCont{
	width: calc(100% - 250px);
	background: #272C30;
	display: flex;
	justify-content: space-between;
}
div.headerPart .headCont div{
	display: flex;
}
div.headerPart .headCont div p{
	width: 60px;
	text-align: center;
	line-height: 60px;
}
div.headerPart .headCont div p:hover{
	background: #000;
	cursor: pointer;
}
div.headerPart .headCont div p i{
	font-size: 28px;
}
div.headerPart .headCont div.rightPart p{
	width: 160px;
	display: flex;
	justify-content: center;
}
div.headerPart .headCont div.rightPart p span{
	font-size: 14px;
	margin: 0 5px;
}
</style>