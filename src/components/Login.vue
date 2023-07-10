<template>
    <main>
        <!-- Login -->
        <div class="rounded-5 mt-3 p-5 d-flex flex-column align-items-center border border-black border-1 w-25 m-auto shadow-lg p-3 mb-5 rounded bg-dark-subtle"
            style="background-image: url(https://img.freepik.com/free-vector/beautiful-blue-watercolor-texture-background_1035-20478.jpg?size=626&ext=jpg&ga=GA1.1.162227864.1686034352&semt=ais); transform: perspective(800px) rotateX(20deg);">
            <div><i class="fa fa-user fa-lg shadow-lg mb-1"></i></div>
            <div class="mb-3 w-100">
                <label for="exampleFormControlInput1" class="form-label fw-bold">Email Address</label>
                <input type="email" class="form-control shadow-lg" id="exampleFormControlInput1"
                    placeholder="name@example.com">
            </div>
            <div class="col-auto w-100">
                <label for="inputPassword2" class="form-label fw-bold ">Password</label>
                <input type="password" class="form-control shadow-lg" id="inputPassword2" placeholder="******">
                <a class="mt-1 fw-bold "
                    style="font-size: 75%;"><router-link to="/ForgetScreen">Forgot Password?</router-link></a>
            </div>
            <div class="d-grid w-50">
                <button class="btn btn-primary shadow my-3" type="button"><a
                        class="text-decoration-none text-reset fw-bold">Login</a></button>
            </div>
            <div>
                <p class=" " style="font-size: 50%; font-weight: bold;">Don't have an account?<a
                     class="ps-2 "><router-link to="/Register">Sign up</router-link></a></p>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    name:"login_", 
  
} 
</script>
<style>
@keyframes zoomInOut {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}

.bg-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    animation: zoomInOut 10s infinite; 
     
} 
.bg-animation img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>