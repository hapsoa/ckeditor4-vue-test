import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ckeditor-component',
      component: () => import('./components/ckeditor/ckeditor.vue'),
    },
    // {
    //   path: '/ckeditor-sample',
    //   name: 'ckeditor-sample',
    //   component: () => import('./lib/ckeditor/samples/index.html'),
    // },
  ],
});
