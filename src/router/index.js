import Vue from "vue"
import Router from "vue-router"
import Login from "./../views/Login.vue"
// import Home from "./views/Home.vue"
// import Welcome from "./views/admin/Welcome.vue"
// import DecorationSequence from "./views/admin/DecorationSequence.vue"
// import User from "./views/admin/User.vue"
// import Project from "./views/admin/Project.vue"
// import File from "./views/admin/File.vue"
// import Equipment from "./views/admin/Equipment.vue"
// import OperationLog from "./views/admin/OperationLog.vue"
// import FileUpload from "./components/FileUpload.vue"

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
        path: "*",
        redirect: "/login",
    }, {
        path: "",
        redirect: "/login",
    }, {
        path: "/login",
        component: Login
    }
    // , {
    //     path: "/",
    //     name: "home",
    //     component: Home,
    //     meta: {
    //         loginRequire: true
    //     },
    //     children: [{
    //         path: "welcome",
    //         name: "welcome",
    //         component: Welcome,
    //     }, {
    //         path: "decoration",
    //         name: "decoration",
    //         component: DecorationSequence,
    //     }, {
    //         path: "user",
    //         name: "user",
    //         component: User,
    //     }, {
    //         path: "project",
    //         name: "project",
    //         component: Project,
    //     }, {
    //         path: "file",
    //         name: "file",
    //         component: File,
    //     }, {
    //         path: "equipment",
    //         name: "equipment",
    //         component: Equipment,
    //     }, {
    //         path: "operationLog",
    //         name: "operationLog",
    //         component: OperationLog,
    //     }
    //     , {
    //         path: "fileUpload",
    //         name: "fileUpload",
    //         component: FileUpload,
    //     }
    //     ]
    // }
    ]
})

