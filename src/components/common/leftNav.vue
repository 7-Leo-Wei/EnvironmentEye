<template>
	<div class="leftNav">
		<div class="navTitle">
			<p><span>系统菜单</span><span v-show="childNavName"> - {{childNavName}}</span></p>
		</div>
		<div class="navContainer">
			<div class="mainNavDiv" v-show="loginName">
				<ul>
					<li v-for="(item, index) in mainNav">
						<div class="mainNav" @click="showChildNav(index)">
							<p class="iconFont navFont">
								<i :class="item.navIcon"></i>
							</p>
							<p class="MainNavName">{{item.navName}}</p>
							<p class="arrow iconFont">
								<i class="icon icon-189" v-if="item.choosed"></i>
								<i class="icon icon-190" v-else></i>
							</p>
						</div>
						<div class="childNav">
							<router-link v-for="(it, idx) in item.navChildren" :to="it.pageName" :key="idx" @click.native="showPage(true, it.hasSglNav, it.navName)">{{it.navName}}</router-link>
						</div>
					</li>
				</ul>
			</div>
			<div class="crtVideoNav">
				<div class="navItem">
					<div class="itemTitle">
						<p>监控统计</p>
					</div>
					<div class="itemCont">
						<div class="item">
							<p class="ico">
								<i class="icon icon-36"></i>
							</p>
							<p class="number">{{crtVideoNav.monitorStat.allMntrPoint}}</p>
						</div>
						<div class="item">
							<p class="ico">
								<i class="icon icon-62"></i>
							</p>
							<p class="number">{{crtVideoNav.monitorStat.waterMntrPoint}}</p>
						</div>
						<div class="item">
							<p class="ico">
								<i class="icon icon-56"></i>
							</p>
							<p class="number">{{crtVideoNav.monitorStat.gasMntrPoint}}</p>
						</div>
						<div class="item">
							<p class="ico">
								<i class="icon icon-65"></i>
							</p>
							<p class="number">{{crtVideoNav.monitorStat.solidMntrPoint}}</p>
						</div>
					</div>
				</div>
				<div class="navItem" style="height: calc(100% - 118px);">
					<div class="itemTitle">
						<p>监控信息</p>
					</div>
					<div class="itemCont">
						<div class="chsMntrType" @click="chsMntrType($event)">
							<p class="choosed">实时视频</p>
							<p>收藏视频</p>
						</div>
					</div>
					<div class="searchVideo">
						<input type="text" placeholder="请选择搜索内容" v-model="searchVideo" @keyup="setCrtPage"/>
						<p class="srchBtn">
							<i class="icon icon-01"></i>
						</p>
					</div>
					<div class="videoListDiv" style="height: calc(100% - 118px);">
						<div class="videoListPart crtVideo">
							<div class="vdoList div-scroll">
								<ul v-if="videoList.length">
									<li v-for="(item, index) in videoList" v-show="pageSet.pageSize*(pageSet.crtPage - 1) <= index && pageSet.pageSize*pageSet.crtPage > index">
										<div class="cpnyName" @click="chsCpny($event)">
											<p class="iconFont navFont">
												<i class="icon icon-208"></i>
											</p>
											<p class="name">{{item.cpnyName}}</p>
											<p class="arrow iconFont">
												<i class="icon icon-189"></i>
												<i class="icon icon-190"></i>
											</p>
										</div>
										<div class="videoList">
											<p v-for="(it, idx) in item.videoList" :key="idx" @click="it.collected = !it.collected">{{it.videoName}}</p>
										</div>
									</li>
								</ul>
								<div class="noDataTips" v-else>
									<p><i class="icon icon-137"></i></p>
									<p>暂无相关数据</p>
								</div>
							</div>
							<div class="pageDiv">
								<el-pagination :page-size="pageSet.pageSize" layout="prev, pager, next" :total="videoList.length" @current-change="getCrtPage" :current-page="pageSet.crtPage"></el-pagination>
							</div>
						</div>
						<div class="videoListPart clctVideo">
							<div class="vdoList div-scroll">
								<ul v-if="videoClcltList.length">
									<li v-for="(item, index) in videoClcltList" v-show="pageSet.pageSize*(pageSet.clctPage - 1) <= index && pageSet.pageSize*pageSet.clctPage > index">
										<div class="cpnyName">
											<p class="iconFont navFont">
												<i class="icon icon-208"></i>
											</p>
											<p class="name">{{item.videoName}}</p>
										</div>
									</li>
								</ul>
								<div class="noDataTips" v-else>
									<p><i class="icon icon-137"></i></p>
									<p>暂无相关数据</p>
								</div>
							</div>
							<div class="pageDiv">
								<el-pagination :page-size="pageSet.pageSize" layout="prev, pager, next" :total="videoClcltList.length" @current-change="getClctPage" :current-page="pageSet.clctPage"></el-pagination>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="sysInfor">
			<p>©2018 Chongqing Upsoft</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'leftNav',
		props:['loginName'],
		data() {
			return {
				pageSet: {
					pageSize: 9,
					pagerCount: 3,
					crtPage: 1,
					clctPage: 1
				},
				childNavName: '',
				mainNav: [
					{
						navName: '视频监控',
						navIcon: 'icon icon-120',
						choosed: false,
						navChildren: [{
							navName: '取证管理',
							hasSglNav: false,
							pageName: '/EvidenceManage'
						}, {
							navName: '视频分析',
							hasSglNav: false,
							pageName: '/VideoAnalysis'
						}, {
							navName: '实时视频',
							hasSglNav: true,
							pageName: '/CurrentVideo'
						}, {
							navName: '视频回放',
							hasSglNav: false,
							pageName: '/VideoReplay'
						}]
					}, {
						navName: '报警管理',
						navIcon: 'icon icon-50',
						choosed: false,
						navChildren: [{
							navName: '报警管理',
							hasSglNav: false,
							pageName: '/AlarmManage'
						}, {
							navName: '报警配置',
							hasSglNav: false,
							pageName: '/AlarmDeploy'
						}, {
							navName: '企业规则',
							hasSglNav: false,
							pageName: '/CompanyRules'
						}]
					}, {
						navName: '统计分析',
						navIcon: 'icon icon-23',
						choosed: false,
						navChildren: [{
							navName: '统计分析',
							hasSglNav: false,
							pageName: '/StatisticsAnalysis'
						}]
					}, {
						navName: '设备管理',
						navIcon: 'icon icon-89',
						choosed: false,
						navChildren: [{
							navName: '设备管理',
							hasSglNav: false,
							pageName: '/DeviceManage'
						}]
					}, {
						navName: '系统管理',
						navIcon: 'icon icon-02',
						choosed: false,
						navChildren: [{
							navName: '用户管理',
							hasSglNav: false,
							pageName: '/UserManage'
						}, {
							navName: '角色管理',
							hasSglNav: false,
							pageName: '/RoleManage'
						}, {
							navName: '菜单管理',
							hasSglNav: false,
							pageName: '/NavManage'
						}, {
							navName: '企业管理',
							hasSglNav: false,
							pageName: '/CompanyManage'
						}, {
							navName: '机构管理',
							hasSglNav: false,
							pageName: '/OrganizationManage'
						}]
					}
				],
				activeName: 'first',
				searchVideo: '',
				crtVideoNav: {
					monitorStat: {
						allMntrPoint: 36,
						waterMntrPoint: 10,
						gasMntrPoint: 14,
						solidMntrPoint: 12,
					},
					crtVideoList: [
						{
							cpnyName: '兴发金冠',
							videoList: [{
								videoName: '环保站取样口',
								id: '',
								collected: false
							}, {
								videoName: '环保站取样口',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '垫江俊航',
							videoList: [{
								videoName: '俊航监控一',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控二',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控三',
								id: '',
								collected: true
							}, {
								videoName: '俊航监控四',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '西南水泥',
							videoList: [{
								videoName: '废气排口',
								id: '',
								collected: true
							}, {
								videoName: '氨氮加药处',
								id: '',
								collected: false
							}, {
								videoName: '站房',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '旗能电铝电厂',
							videoList: [{
								videoName: '电厂废气排口',
								id: '',
								collected: false
							}, {
								videoName: '#1 脱硫CEMS间',
								id: '',
								collected: true
							}, {
								videoName: '#2 脱硫CEMS间',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '兴发金冠2',
							videoList: [{
								videoName: '环保站取样口',
								id: '',
								collected: false
							}, {
								videoName: '环保站取样口',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '垫江俊航2',
							videoList: [{
								videoName: '俊航监控一',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控二',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控三',
								id: '',
								collected: true
							}, {
								videoName: '俊航监控四',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '西南水泥2',
							videoList: [{
								videoName: '废气排口',
								id: '',
								collected: true
							}, {
								videoName: '氨氮加药处',
								id: '',
								collected: false
							}, {
								videoName: '站房',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '旗能电铝电厂2',
							videoList: [{
								videoName: '电厂废气排口',
								id: '',
								collected: false
							}, {
								videoName: '#1 脱硫CEMS间',
								id: '',
								collected: true
							}, {
								videoName: '#2 脱硫CEMS间',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '兴发金冠3',
							videoList: [{
								videoName: '环保站取样口',
								id: '',
								collected: false
							}, {
								videoName: '环保站取样口',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '垫江俊航3',
							videoList: [{
								videoName: '俊航监控一',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控二',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控三',
								id: '',
								collected: true
							}, {
								videoName: '俊航监控四',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '西南水泥3',
							videoList: [{
								videoName: '废气排口',
								id: '',
								collected: true
							}, {
								videoName: '氨氮加药处',
								id: '',
								collected: false
							}, {
								videoName: '站房',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '旗能电铝电厂3',
							videoList: [{
								videoName: '电厂废气排口',
								id: '',
								collected: false
							}, {
								videoName: '#1 脱硫CEMS间',
								id: '',
								collected: true
							}, {
								videoName: '#2 脱硫CEMS间',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '兴发金冠4',
							videoList: [{
								videoName: '环保站取样口',
								id: '',
								collected: false
							}, {
								videoName: '环保站取样口',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '垫江俊航4',
							videoList: [{
								videoName: '俊航监控一',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控二',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控三',
								id: '',
								collected: true
							}, {
								videoName: '俊航监控四',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '西南水泥4',
							videoList: [{
								videoName: '废气排口',
								id: '',
								collected: true
							}, {
								videoName: '氨氮加药处',
								id: '',
								collected: false
							}, {
								videoName: '站房',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '旗能电铝电厂4',
							videoList: [{
								videoName: '电厂废气排口',
								id: '',
								collected: false
							}, {
								videoName: '#1 脱硫CEMS间',
								id: '',
								collected: true
							}, {
								videoName: '#2 脱硫CEMS间',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '垫江俊航',
							videoList: [{
								videoName: '俊航监控一',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控二',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控三',
								id: '',
								collected: true
							}, {
								videoName: '俊航监控四',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '西南水泥',
							videoList: [{
								videoName: '废气排口',
								id: '',
								collected: true
							}, {
								videoName: '氨氮加药处',
								id: '',
								collected: false
							}, {
								videoName: '站房',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '旗能电铝电厂',
							videoList: [{
								videoName: '电厂废气排口',
								id: '',
								collected: false
							}, {
								videoName: '#1 脱硫CEMS间',
								id: '',
								collected: true
							}, {
								videoName: '#2 脱硫CEMS间',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '兴发金冠2',
							videoList: [{
								videoName: '环保站取样口',
								id: '',
								collected: false
							}, {
								videoName: '环保站取样口',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '垫江俊航2',
							videoList: [{
								videoName: '俊航监控一',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控二',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控三',
								id: '',
								collected: true
							}, {
								videoName: '俊航监控四',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '西南水泥2',
							videoList: [{
								videoName: '废气排口',
								id: '',
								collected: true
							}, {
								videoName: '氨氮加药处',
								id: '',
								collected: false
							}, {
								videoName: '站房',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '旗能电铝电厂2',
							videoList: [{
								videoName: '电厂废气排口',
								id: '',
								collected: false
							}, {
								videoName: '#1 脱硫CEMS间',
								id: '',
								collected: true
							}, {
								videoName: '#2 脱硫CEMS间',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '兴发金冠3',
							videoList: [{
								videoName: '环保站取样口',
								id: '',
								collected: false
							}, {
								videoName: '环保站取样口',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '垫江俊航3',
							videoList: [{
								videoName: '俊航监控一',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控二',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控三',
								id: '',
								collected: true
							}, {
								videoName: '俊航监控四',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '西南水泥3',
							videoList: [{
								videoName: '废气排口',
								id: '',
								collected: true
							}, {
								videoName: '氨氮加药处',
								id: '',
								collected: false
							}, {
								videoName: '站房',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '旗能电铝电厂3',
							videoList: [{
								videoName: '电厂废气排口',
								id: '',
								collected: false
							}, {
								videoName: '#1 脱硫CEMS间',
								id: '',
								collected: true
							}, {
								videoName: '#2 脱硫CEMS间',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '兴发金冠4',
							videoList: [{
								videoName: '环保站取样口',
								id: '',
								collected: false
							}, {
								videoName: '环保站取样口',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '垫江俊航4',
							videoList: [{
								videoName: '俊航监控一',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控二',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控三',
								id: '',
								collected: true
							}, {
								videoName: '俊航监控四',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '西南水泥4',
							videoList: [{
								videoName: '废气排口',
								id: '',
								collected: true
							}, {
								videoName: '氨氮加药处',
								id: '',
								collected: false
							}, {
								videoName: '站房',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '旗能电铝电厂4',
							videoList: [{
								videoName: '电厂废气排口',
								id: '',
								collected: false
							}, {
								videoName: '#1 脱硫CEMS间',
								id: '',
								collected: true
							}, {
								videoName: '#2 脱硫CEMS间',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '垫江俊航',
							videoList: [{
								videoName: '俊航监控一',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控二',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控三',
								id: '',
								collected: true
							}, {
								videoName: '俊航监控四',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '西南水泥',
							videoList: [{
								videoName: '废气排口',
								id: '',
								collected: true
							}, {
								videoName: '氨氮加药处',
								id: '',
								collected: false
							}, {
								videoName: '站房',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '旗能电铝电厂',
							videoList: [{
								videoName: '电厂废气排口',
								id: '',
								collected: false
							}, {
								videoName: '#1 脱硫CEMS间',
								id: '',
								collected: true
							}, {
								videoName: '#2 脱硫CEMS间',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '兴发金冠2',
							videoList: [{
								videoName: '环保站取样口',
								id: '',
								collected: false
							}, {
								videoName: '环保站取样口',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '垫江俊航2',
							videoList: [{
								videoName: '俊航监控一',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控二',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控三',
								id: '',
								collected: true
							}, {
								videoName: '俊航监控四',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '西南水泥2',
							videoList: [{
								videoName: '废气排口',
								id: '',
								collected: true
							}, {
								videoName: '氨氮加药处',
								id: '',
								collected: false
							}, {
								videoName: '站房',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '旗能电铝电厂2',
							videoList: [{
								videoName: '电厂废气排口',
								id: '',
								collected: false
							}, {
								videoName: '#1 脱硫CEMS间',
								id: '',
								collected: true
							}, {
								videoName: '#2 脱硫CEMS间',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '兴发金冠3',
							videoList: [{
								videoName: '环保站取样口',
								id: '',
								collected: false
							}, {
								videoName: '环保站取样口',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '垫江俊航3',
							videoList: [{
								videoName: '俊航监控一',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控二',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控三',
								id: '',
								collected: true
							}, {
								videoName: '俊航监控四',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '西南水泥3',
							videoList: [{
								videoName: '废气排口',
								id: '',
								collected: true
							}, {
								videoName: '氨氮加药处',
								id: '',
								collected: false
							}, {
								videoName: '站房',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '旗能电铝电厂3',
							videoList: [{
								videoName: '电厂废气排口',
								id: '',
								collected: false
							}, {
								videoName: '#1 脱硫CEMS间',
								id: '',
								collected: true
							}, {
								videoName: '#2 脱硫CEMS间',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '兴发金冠4',
							videoList: [{
								videoName: '环保站取样口',
								id: '',
								collected: false
							}, {
								videoName: '环保站取样口',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '垫江俊航4',
							videoList: [{
								videoName: '俊航监控一',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控二',
								id: '',
								collected: false
							}, {
								videoName: '俊航监控三',
								id: '',
								collected: true
							}, {
								videoName: '俊航监控四',
								id: '',
								collected: false
							}]
						}, {
							cpnyName: '西南水泥4',
							videoList: [{
								videoName: '废气排口',
								id: '',
								collected: true
							}, {
								videoName: '氨氮加药处',
								id: '',
								collected: false
							}, {
								videoName: '站房',
								id: '',
								collected: true
							}]
						}, {
							cpnyName: '旗能电铝电厂4',
							videoList: [{
								videoName: '电厂废气排口',
								id: '',
								collected: false
							}, {
								videoName: '#1 脱硫CEMS间',
								id: '',
								collected: true
							}, {
								videoName: '#2 脱硫CEMS间',
								id: '',
								collected: false
							}]
						}
					]
				}
			}
		},
		computed: {
			// 实时视频搜索列表
			srchVideo() {
				var videoArr = [];
				var that = this;
				this.crtVideoNav.crtVideoList.forEach(function(element, index) {
					if (element.cpnyName.search(that.searchVideo)>-1) {
						videoArr.push(element);
					}else {
						var vdoList = [];
						for (var i = 0; i < element.videoList.length; i++) {
							if (element.videoList[i].videoName.search(that.searchVideo)>-1) {
								vdoList.push(element.videoList[i]);
							}else {
								continue;
							}
						}
						if (vdoList.length>0) {
							videoArr.push(element);
							videoArr[videoArr.length-1].videoList = vdoList;
						}
					}
				});
				return videoArr;
			},
			// 实时视频列表
			videoList() {
				return this.searchVideo?this.srchVideo:this.crtVideoNav.crtVideoList;
			},
			// 收藏视频数据
			clctVideo() {
				var listArr = [];
				this.crtVideoNav.crtVideoList.map(function(item, index) {
					for (var i = 0; i < item.videoList.length; i++) {
						if (item.videoList[i].collected) {
							listArr.push(item.videoList[i]);
						}
					}
				});
				return listArr;
			},
			// 收藏视频搜索列表
			srchClctVideo() {
				var videoArr = [];
				var that = this;
				this.clctVideo.forEach(function(element, index) {
					if (element.videoName.search(that.searchVideo)>-1) {
						videoArr.push(element);
					}
				});
				return videoArr;
			},
			// 收藏视频列表
			videoClcltList() {
				return this.searchVideo?this.srchClctVideo:this.clctVideo;
			}
		},
		methods: {
			setCrtPage() {
				this.pageSet.crtPage = 1;
			},
			// 收藏视频页码切换
			getClctPage(currentPage) {
				this.pageSet.clctPage = currentPage;
			},
			// 实时视频页码切换
			getCrtPage(currentPage) {
				this.pageSet.crtPage = currentPage;
			},
			//菜单标题控制
			handleNavTitle(hideVal) {
				if (hideVal) {
					$(".navTitle").slideUp();
				}else {
					$(".navTitle").slideDown();
				}
			},
			// 子菜单控制
			showChildNav: function(index) {
				$('.mainNavDiv>ul>li .childNav').slideUp();
				for (var i = 0; i < this.mainNav.length; i++) {
					this.mainNav[i].choosed = false;
				}
				if (index>-1) {
					$('.mainNavDiv>ul>li').eq(index).children('.childNav').slideDown();
					this.mainNav[index].choosed = true;
					this.$emit('showAllNav', [true]);
					this.handleMainNav(false);
					this.handleCrtVideoNav(false);
				}
			},
			// 主菜单控制
			handleMainNav(params) {
				if (!params) {
					$(".mainNavDiv").animate({width: "100%"});
				}else {
					$(".mainNavDiv").animate({width: "40px"});
					this.showChildNav();
				}
			},
			// 页面导航
			showPage(setName, hasSglNav, navName) {
				if (setName) {
					this.childNavName = navName;
				}else {
					this.childNavName = '';
				}
				if (hasSglNav) {
					this.handleMainNav(true);
					this.handleCrtVideoNav(true);
				}
			},
			// 实时视频菜单控制
			handleCrtVideoNav(show) {
				if (show) {
					$(".crtVideoNav").slideDown();
				}else {
					$(".crtVideoNav").slideUp();
				}
			},
			// 实时视频和收藏视频切换
			chsMntrType(event) {
				$(".chsMntrType p").removeClass('choosed');
				$(".chsMntrType p").eq($(event.target).index()).addClass('choosed');
				$(".videoListDiv .videoListPart").hide().eq($(event.target).index()).fadeIn();
			},
			// 展开企业视频列表
			chsCpny(event) {
				$(".videoListDiv .crtVideo ul li").removeClass('choosed');
				$(".videoListDiv .crtVideo ul li .videoList").slideUp();
				$(event.currentTarget).parent('li').addClass('choosed');
				$(event.currentTarget).siblings('.videoList').slideDown();
			},
			showVideo() {

			}
		}
	}
</script>
<style scoped>
div.leftNav{
	width: 250px;
	height: 100%;
	background: #1E2326;
	color: #fff;
	padding: 5px;
	box-sizing: border-box;
}
div.leftNav .navTitle{
	width: 100%;
	height: 50px;
	text-align: left;
	background: #272C30;
	margin-bottom: 5px;
}
div.leftNav .navTitle p{
	line-height: 50px;
	font-size: 14px;
	text-indent: 15px;
	color: #858587;
}
.navContainer{
	height: calc(100% - 90px);
	display: flex;
	flex-direction: row;
}
.mainNavDiv{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
@keyframes ctrlMainNav
{
    from {width: 100%;}
    to {width: 40px;}
}
.mainNavDiv>ul{
	width: 240px;
}
.mainNavDiv>ul>li{
	width: 100%;
	height: auto;
	margin-bottom: 2px;
}
.mainNavDiv>ul>li .mainNav{
	width: 100%;
	height: 40px;
	line-height: 40px;
	display: flex;
	justify-content: space-between;
	background: #000;
	cursor: pointer;
}
.mainNavDiv>ul>li .mainNav .iconFont{
	width: 40px;
	height: 40px;
	text-align: center;
	/*line-height: 40px;*/
}
.mainNavDiv>ul>li .mainNav .iconFont i{
	color: #5e93fc;
	font-size: 20px;
}
.mainNavDiv>ul>li .mainNav .arrow i{
	color: #5e93fc;
	font-size: 16px;
}
.mainNavDiv>ul>li .mainNav .MainNavName{
	width: calc(100% - 80px);
	color: #fff;
	font-size: 14px;
}
.mainNavDiv>ul>li .mainNav:hover .MainNavName{
	color: #5e93fc;
}
.mainNavDiv>ul>li .childNav{
	width: 100%;
	display: none;
}
.mainNavDiv>ul>li .childNav a{
	width: 100%;
	height: 30px;
	line-height: 30px;
	text-indent: 40px;
	color: #999;
	font-size: 12px;
	cursor: pointer;
	display: block;
	text-align: left;
	color: #fff;
	text-decoration: none;
}
.mainNavDiv>ul>li .childNav a:hover{
	background: #1f3663;
}
.crtVideoNav{
	width: calc(100% - 45px);
	display: none;
	margin-left: 5px;
}
.crtVideoNav .navItem{
	width: 100%;
	margin-bottom: 5px;
}
.crtVideoNav .navItem:hover{
	box-shadow: 5px 5px 5px #000;
}
.crtVideoNav .navItem .itemTitle{
	width: 100%;
	height: 40px;
	line-height: 40px;
	background: #272C30;
	text-align: left;
	margin-bottom: 1px;
}
.crtVideoNav .navItem .itemTitle p{
	color: #fff;
	font-size: 14px;
	text-indent: 15px;
}
.crtVideoNav .navItem .itemCont{
	display: flex;
	background: #272C30;
}
.crtVideoNav .navItem .itemCont .item{
	width: 25%;
	margin: 10px 0;
}
.crtVideoNav .navItem .itemCont .item .ico{
	line-height: 32px;
}
.crtVideoNav .navItem .itemCont .item .ico .icon{
	font-size: 28px;
}
.crtVideoNav .navItem .itemCont .item:first-child .ico .icon{
	color: #5e93fc;
    text-shadow: 0px 0px 4px #5e93fc;
}
.crtVideoNav .navItem .itemCont .item:nth-child(2) .ico .icon{
	color: #5ee379;
    text-shadow: 0px 0px 4px #5ee379;
}
.crtVideoNav .navItem .itemCont .item:nth-child(3) .ico .icon{
	color: #db91fd;
    text-shadow: 0px 0px 4px #db91fd;
}
.crtVideoNav .navItem .itemCont .item:last-child .ico .icon{
	color: #ffd16e;
    text-shadow: 0px 0px 4px #ffd16e;
}
.crtVideoNav .navItem .itemCont .item .number{
	font-size: 16px;
	color: #fff;
}
.chsMntrType{
	width: 100%;
	height: 36px;
	line-height: 34px;
	padding-bottom: 2px;
	display: flex;
	justify-content: space-around;
}
.chsMntrType p{
	width: 40%;
	height: 34px;
	font-size: 14px;
	color: #fff;
	cursor: pointer;
}
.chsMntrType p.choosed{
	color: #5e93fc;
	border-bottom: 2px solid #5e93fc;
}
.searchVideo{
	width: 100%;
	height: 40px;
	position: relative;
}
.searchVideo input{
	width: 100%;
	height: 100%;
	border: none;
	background: #383e43;
	color: #222;
	text-indent: 10px;
}
.searchVideo input:hover, .searchVideo input:focus{
	background: #fff;
}
.searchVideo p{
	position: absolute;
	top: 0;
	right: 0;
	width: 40px;
	line-height: 40px;
	text-align: center;
	cursor: pointer;
}
.searchVideo p .icon{
	color: #858587;
}
.videoListDiv{
	flex: 1;
}
.videoListDiv .videoListPart{
	width: 100%;
	height: 100%;
}
.videoListDiv .videoListPart .vdoList{
	height: calc(100% - 32px);
	overflow: auto;
}
.videoListDiv .videoListPart ul{
	list-style: none;
}
.videoListDiv .videoListPart ul li{
	width: 100%;
	height: auto;
	margin-bottom: 2px;
}
.videoListDiv .videoListPart ul li .cpnyName{
	width: 100%;
	height: 40px;
	line-height: 40px;
	display: flex;
	justify-content: space-between;
	background: #272C30;
	cursor: pointer;
}
.videoListDiv .videoListPart ul li .cpnyName .iconFont{
	width: 40px;
	height: 40px;
	text-align: center;
	/*line-height: 40px;*/
}
.videoListDiv .videoListPart ul li .cpnyName .iconFont i{
	color: #5e93fc;
	font-size: 20px;
}
.videoListDiv .videoListPart ul li .cpnyName .arrow i{
	color: #5e93fc;
	font-size: 16px;
}
.videoListDiv .videoListPart ul li .cpnyName .arrow .icon-189{
	display: none;
}
.videoListDiv .videoListPart ul li.choosed .cpnyName .arrow .icon-190{
	display: none;
}
.videoListDiv .videoListPart ul li.choosed .cpnyName .arrow .icon-189{
	display: block;
}
.videoListDiv .videoListPart ul li .cpnyName .name{
	width: calc(100% - 80px);
	color: #fff;
	font-size: 14px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	text-align: left;
}
.videoListDiv .clctVideo ul li .cpnyName .name{
	width: calc(100% - 40px);
}
.videoListDiv .videoListPart ul li .cpnyName:hover .name{
	color: #5e93fc;
}
.videoListDiv .videoListPart ul li .videoList{
	width: 100%;
	display: none;
}
.videoListDiv .videoListPart ul li .videoList p{
	width: 100%;
	height: 30px;
	line-height: 30px;
	text-indent: 40px;
	color: #999;
	font-size: 12px;
	cursor: pointer;
	display: block;
	text-align: left;
	color: #fff;
	text-decoration: none;
}
.videoListDiv .videoListPart ul li .videoList p:hover{
	background: #1f3663;
}
.videoListDiv .videoListPart .noDataTips{
	width: 100%;
	text-align: center;
	margin-top: 10px;
}
.videoListDiv .videoListPart .noDataTips p .icon{
	font-size: 28px;
	color: #f0f0f0;
}
.videoListDiv .videoListPart .noDataTips p:last-child{
	font-size: 12px;
	line-height: 24px;
}
.videoListDiv .videoListPart .pageDiv{
	width: 100%;
	height: 32px;
}
.videoListDiv .clctVideo{
	display: none;
}
.sysInfor{
	width: 100%;
	height: 40px;
	line-height: 40px;
}
.sysInfor p{
	font-size: 12px;
	color: #7b8184;
}
</style>
<style>
.videoListDiv .videoListPart .pageDiv .el-pagination{
	background-color: transparent;
	width: 100%;
	display: flex;
	box-sizing: border-box;
}
.videoListDiv .videoListPart .pageDiv .el-pagination button, .videoListDiv .videoListPart .pageDiv .el-pagination ul{
	flex: 1 !important;
}
.videoListDiv .videoListPart .pageDiv .el-pagination ul{
	display: flex;
}
.el-pagination .btn-next, .el-pagination .btn-prev, .el-pager li{
	background-color: transparent !important;
	color: #ccc !important;
	flex: 1 !important;
	min-width: 12px !important;
	padding: 0 4px !important;
}
.el-pagination button:disabled{
	color: #303030 !important;
}
.el-pager li.active {
    color: #409eff !important;
    cursor: default;
}
</style>