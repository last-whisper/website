import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/view/index'
import Help from '@/components/view/help'
import Support from '@/components/view/support'
import Policy from '@/components/view/policy'

import Concepts from '@tpl/help/blockchain/concepts'
import FunIntroduce from '@tpl/help/newuser/funintroduce'
import OfflineSignature from '@tpl/help/newuser/offlinesignature'
import DownloadInstall from '@tpl/help/newuser/install'
import SupportAssets from '@tpl/help/newuser/supportassets'
import UserRegister from '@tpl/help/newuser/userregister'
import CreateEos from '@tpl/help/eos/createeos'
import AccountOrder from '@tpl/help/eos/accountorder'
import BandwidthRam from '@tpl/help/eos/bandwidthandRAM'


import Activity from '@tpl/help/newactivity/activity'
import ActivityList from '@tpl/help/newactivity/activitydetail/activitylist'


import ActivityItem from '@tpl/help/newactivity/activitydetail/activity2018-9-20'
import ActivityItem1 from '@tpl/help/newactivity/activitydetail/activity2018-9-30'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/:lang?',
      name: 'home',
      component: Index
    },
    {
      path:'/:lang?/support',
      name:'support',
      component: Support
    },
    {
      path:'/:lang?/policy',
      name:'policy',
      component: Policy
    },
    {
      path:'/:lang?/help',
      component:Help,
      children:[
        {
          path:'',
          name:'help',
          component: DownloadInstall,
          props:true,
        },
        {
          path:'userregister',
          name:'userregister',
          component:UserRegister,
          props:true,
        },
        {
          path:'funcintroduce',
          name:'funcintroduce',
          component:FunIntroduce,
          props:true,
        },
        {
          path:'offlinesignature',
          name:'offlinesignature',
          component:OfflineSignature,
          props:true,
        },

        {
          path:'supportassets',
          name:'supportassets',
          component:SupportAssets,
          props:true,
        },
        {
          path:'concepts',
          name:'concepts',
          component:Concepts,
          props:true,
        },
        {
          path:'createeos',
          name:'createeos',
          component:CreateEos
        },
        {
          path:'accountorder',
          name:'accountorder',
          component:AccountOrder
        },
        {
          path:'bandwidthandram',
          name:'bandwidthandram',
          component:BandwidthRam
        },
        {
          path:'activity',
          component:Activity,
          children: [
            {
              path:'',
              name:'newestactivity',
              component:ActivityList
            },
            {
              path:'2018-9-20',
              name:'2018-9-20',
              component:ActivityItem
            },
            {
              path:'2018-9-30',
              name:'2018-9-30',
              component:ActivityItem1
            }
          ]
        }
      ]
    }
  ],

});

router.beforeEach((to,from,next)=>{
  next()
})

export default router
