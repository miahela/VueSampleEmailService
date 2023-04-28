import {
  createRouter,
  createWebHistory
} from 'vue-router';
import InboxView from '@/views/InboxView.vue';
import EmailView from '@/views/EmailView.vue';

const routes = [{
    path: '/',
    redirect: '/inbox',
  },
  {
    path: '/inbox',
    name: 'Inbox',
    component: InboxView,
    props: {
      type: 'Inbox'
    },
  },
  {
    path: '/:typeOfMail/email/:emailId',
    name: 'EmailView',
    component: EmailView,
    props: (route) => ({
      typeOfMail: route.params.typeOfMail,
      emailId: parseInt(route.params.emailId, 10),
    }),
  },
  {
    path: '/archive',
    name: 'Archive',
    component: InboxView,
    props: {
      type: 'Archive'
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;