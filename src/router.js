import { createWebHistory, createRouter } from "vue-router";
import home_def from "./components/home_def.vue";
import about_page from './components/about_page.vue'
import skill_page from "./components/skill_page.vue";
import work_page from "./components/work_page.vue";
import contacts_page from "./components/contacts_page.vue";
import education_page from "./components/education_page.vue";
const routes = [
    {
        name: "home_def",
        path: "/",
        component: home_def
    },
    {
        name:"about_page",
        path:"/about_page",
        component:about_page
    },
    {
        name:"skill_page",
        path:"/skill_page",
        component:skill_page    
    },
    {
        name:"work_page",
        path:"/work_page",
        component:work_page
    },
    {
        name:"contacts_page",
        path:"/contacts_page",
        component:contacts_page
    },
    {
        name:"education_page",
        path:"/education_page",
        component:education_page
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
