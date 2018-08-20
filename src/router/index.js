import Vue from 'vue';
import Router from 'vue-router';

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router);

/* Layout */
import Layout from '../views/layout/Layout';

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  {
    path: '/',
    redirect: '/standard/m3gl_init',
    hidden: true
  },
  {
    component: Layout,
    path: '/standard',
    name: 'standard',
    meta: { title: '基础组件调试', icon: 'system' },
    children: [
      {
        path: 'm3gl_init',
        name: 'm3gl_init',
        component: () => import('@/views/standard/m3gl/init'),
        meta: { title: '图形初始化', icon: 'user-manager' }
      },
      {
        path: 'm3gl_init_dynamic',
        name: 'm3gl_init_dynamic',
        component: () => import('@/views/standard/m3gl/init_dynamic'),
        meta: { title: '动态加卸载', icon: 'user-manager' }
      }
    ]
  }
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
