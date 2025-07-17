import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import store from '@/store';

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/services",
        name: "services",
        component: () => import(/* webpackChunkName: "about" */ "../views/ServicesView.vue"),
    },
    {
        path: "/services/:slug",
        name: "single-service",
        component: () => import(/* webpackChunkName: "about" */ "../views/SingleService.vue"),
        props: true,
    },
    {
        path: "/sample",
        name: "sample",
        component: () => import(/* webpackChunkName: "about" */ "../views/SampleView.vue"),
    },
    {
        path: "/pricing",
        name: "pricing",
        component: () => import(/* webpackChunkName: "about" */ "../views/PricingView.vue"),
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
    },
    {
        path: "/quotation",
        name: "quotation",
        component: () => import(/* webpackChunkName: "about" */ "../views/QuotationView.vue"),
    },
    {
        path: "/free-trial",
        name: "free-trial",
        component: () => import(/* webpackChunkName: "about" */ "../views/FreeTrailView.vue"),
    },
    {
        path: "/upload",
        name: "upload",
        component: () => import(/* webpackChunkName: "about" */ "../views/UploadView.vue"),
    },
    {
        path: "/faq",
        name: "faq",
        component: () => import(/* webpackChunkName: "about" */ "../views/FaqView.vue"),
    },
    {
        path: "/blog",
        name: "blog",
        component: () => import(/* webpackChunkName: "about" */ "../views/BlogView.vue"),
    },
    {
        path: "/testimonial",
        name: "testimonial",
        component: () => import(/* webpackChunkName: "about" */ "../views/TestimonialView.vue"),
    },
    {
        path: "/order",
        name: "order",
        component: () => import(/* webpackChunkName: "about" */ "../views/OrderView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        // Always scroll to top when changing routes
        return { top: 0 };
    },
});

router.beforeEach((to, from, next) => {
    if (!to.matched.length) {
        console.warn("No matching route found for:", to.fullPath);
    }

    if (!from.matched.length) {
        console.warn("No matching route found for the previous page:", from.fullPath);
    }

    next(); // Make sure to always call next()!
});

export default router;
