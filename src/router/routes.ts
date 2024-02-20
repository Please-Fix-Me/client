const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/LandingPage.vue") },
      {
        path: "/offerings",
        component: () => import("pages/OfferingsPage.vue"),
      },
      {
        path: "/offering/:id",
        component: () => import("pages/OfferingPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
