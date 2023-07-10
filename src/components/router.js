import {createRouter,createWebHistory} from 'vue-router';
import Login from '../components/Login.vue'
import Register from '../components/SignUp.vue'
import ForgetScreen from '../components/ForgetScreen.vue'
const routes=[
{
    name:'Login',
    path:'/',
    component:Login
},
{
    name:'Register',
    path:'/Register',
    component:Register
},
{
    name:'ForgetScreen',
    path:'/ForgetScreen',
    component:ForgetScreen
}
// {
//     name:'HomeScreen',
//     path:'/HomeScreen',
//     component:HomeScreen
// },

]     
const router=createRouter({
    history:createWebHistory(),
    routes
})  
export default router;