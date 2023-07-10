import {createRouter,createWebHistory} from 'vue-router';
import Login from '../components/Login.vue'
import Register from '../components/SignUp.vue'
import ForgetScreen from '../components/ForgetScreen.vue'
import Confirmation_Code from '../components/Confirmation_Code.vue'
import Confirmation_Password from '../components/Confirmation_Password.vue'
const routes=[
{
    name:'Login',
    path:'/Login',
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

,
{
    name:'Confirmation_Password',
    path:'/Confirmation_Password',
    component:Confirmation_Password
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