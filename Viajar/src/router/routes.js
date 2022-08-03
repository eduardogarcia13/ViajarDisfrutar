const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
    { path: '',
      component: () => import('pages/Index.vue')
    },
    { name: 'domDatos',
      path: '/domDatos',
      component: () => import('pages/domDatos.vue')
    },
    { name: 'anaData',
      path: '/anaData',
      component: () => import('pages/anaData.vue')
    },
    { name: 'preguntas',
      path: '/preguntas',
      component: () => import('pages/preguntas.vue')
    }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
