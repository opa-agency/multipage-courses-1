import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './styles/tailwind.css'

// Import page components
import LoginPage from './pages/auth/LoginPage.vue'
import OTPPage from './pages/auth/OTPPage.vue'
import HomePage from './pages/HomePage.vue'
import LessonPage from './pages/LessonPage.vue'
import InterviewsPage from './pages/InterviewsPage.vue'
import InterviewDetailPage from './pages/InterviewDetailPage.vue'
import ResourcesPage from './pages/ResourcesPage.vue'

// Import layout components
import AuthLayout from './layouts/AuthLayout.vue'
import CenteredLayout from './layouts/CenteredLayout.vue'
import SidebarLayout from './layouts/SidebarLayout.vue'

const routes = [
  {
    path: '/login',
    component: AuthLayout,
    children: [
      {
        path: '',
        component: LoginPage,
      },
    ],
  },
  {
    path: '/otp',
    component: AuthLayout,
    children: [
      {
        path: '',
        component: OTPPage,
      },
    ],
  },
  {
    path: '/',
    component: SidebarLayout,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: ':slug',
        component: LessonPage,
      },
    ],
  },
  {
    path: '/interviews',
    component: CenteredLayout,
    children: [
      {
        path: '',
        component: InterviewsPage,
      },
      {
        path: ':slug',
        component: InterviewDetailPage,
      },
    ],
  },
  {
    path: '/resources',
    component: CenteredLayout,
    children: [
      {
        path: '',
        component: ResourcesPage,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

