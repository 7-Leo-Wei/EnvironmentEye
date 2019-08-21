import Vue from 'vue'
import Router from 'vue-router'
// import Pos from '@/components/page/Pos'
// import HelloWorld from '@/components/page/HelloWorld'
import MainPage from '@/components/common/MainPage'
import LoginPage from '@/components/common/LoginPage'

import AlarmDeploy from '@/components/page/AlarmDeploy'
import AlarmManage from '@/components/page/AlarmManage'
import AlarmMap from '@/components/page/AlarmMap'
import CompanyManage from '@/components/page/CompanyManage'
import CompanyRules from '@/components/page/CompanyRules'
import CurrentVideo from '@/components/page/CurrentVideo'
import DeviceManage from '@/components/page/DeviceManage'
import EvidenceManage from '@/components/page/EvidenceManage'
import NavManage from '@/components/page/NavManage'
import OrganizationManage from '@/components/page/OrganizationManage'
import RoleManage from '@/components/page/RoleManage'
import StatisticsAnalysis from '@/components/page/StatisticsAnalysis'
import UserManage from '@/components/page/UserManage'
import VideoAnalysis from '@/components/page/VideoAnalysis'
import VideoReplay from '@/components/page/VideoReplay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/MainPage',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: '/AlarmMap',
          name: 'AlarmMap',
          component: AlarmMap
        },
        {
          path: '/AlarmDeploy',
          name: 'AlarmDeploy',
          component: AlarmDeploy
        }, 
        {
          path: '/AlarmManage',
          name: 'AlarmManage',
          component: AlarmManage
        },
        {
          path: '/CompanyManage',
          name: 'CompanyManage',
          component: CompanyManage
        },
        {
          path: '/CompanyRules',
          name: 'CompanyRules',
          component: CompanyRules
        },
        {
          path: '/CurrentVideo',
          name: 'CurrentVideo',
          component: CurrentVideo
        },
        {
          path: '/DeviceManage',
          name: 'DeviceManage',
          component: DeviceManage
        },
        {
          path: '/EvidenceManage',
          name: 'EvidenceManage',
          component: EvidenceManage
        },
        {
          path: '/NavManage',
          name: 'NavManage',
          component: NavManage
        },
        {
          path: '/OrganizationManage',
          name: 'OrganizationManage',
          component: OrganizationManage
        },
        {
          path: '/RoleManage',
          name: 'RoleManage',
          component: RoleManage
        },
        {
          path: '/StatisticsAnalysis',
          name: 'StatisticsAnalysis',
          component: StatisticsAnalysis
        },
        {
          path: '/UserManage',
          name: 'UserManage',
          component: UserManage
        },
        {
          path: '/VideoAnalysis',
          name: 'VideoAnalysis',
          component: VideoAnalysis
        },
        {
          path: '/VideoReplay',
          name: 'VideoReplay',
          component: VideoReplay
        }
      ]
    }
  ]
})
