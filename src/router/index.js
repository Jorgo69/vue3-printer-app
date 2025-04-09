import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import ProcessusView from '../views/ProcessusView.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getCurrentInstance } from 'vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/processus',
      name: 'processus',
      component: () => import('../views/ProcessusView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Auth/Register.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/Login.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Auth/Profile.vue'),
    },
    {
      path: '/password-forget',
      name: 'password-forget',
      component: () => import('../views/Auth/PasswordForget.vue'),
    },
    {
      path: '/connected-route',
      name: 'connected-route',
      component: () => import('../views/Connected/ConnectedRoute.vue'),
        meta: {
          requiresAuth: true,
        },
    },
  ],
});

// const getCurrentUser = () => {
//   return new Promise((resolve, rejet) => {
//     const removeListener = onAuthStateChanged(
//       getAuth(),
//       (user) => {
//         removeListener();
//         resolve(user);
//       },

//       rejet
//     );
//   });
// }

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe(); // N'oubliez pas de vous désabonner
        resolve(user);
      },
      (error) => {
        unsubscribe();
        reject(error);
      }
    );
  });
};


router.beforeEach(async(to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth )) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("Vous n'avez pas access");
      next("/");
    }
  }
  else{
    next();
  }
})

export default router
