import {createRouter,createWebHistory} from 'vue-router';
import Login from '../components/Login.vue'
import Register from '../components/SignUp.vue'
import ForgetScreen from '../components/ForgetScreen.vue'
import Confirmation_Code from '../components/Confirmation_Code.vue'
const routes=[
{
    name:'Login',
    path:'/',
    component:Login
},
{
    name:'register',
    path:'/register',
    component:Register
},
{
    name:'ForgetScreen',
    path:'/ForgetScreen',
    component:ForgetScreen
},
{
    name:'Confirmation_Code',
    path:'/Confirmation_Code',
    component:Confirmation_Code
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