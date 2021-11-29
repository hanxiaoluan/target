import Table from './components/Table.vue'
import AdminMenu from './components/Admin/Menu.vue'
import NotFoundPage from './components/NotFoundPage.vue'
import Users from './components/Admin/Users.vue'

export const routes = [
  { path: '/', component: Table },
  {
    path: '/admin',
    component: AdminMenu,
    children: [
      {
        path: 'users',
        component: Users
      },
      {
        path: ':pathMatch(.*)*',
        component: NotFoundPage
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage
  }
]