<template>
    <main>
        <!-- Sign Up -->
        <div class="rounded-5 m-auto mt-3 p-3 d-flex flex-column align-items-center border border-black border-1 w-25 shadow-lg rounded"
             style="background-image: url(https://img.freepik.com/free-vector/beautiful-blue-watercolor-texture-background_1035-20478.jpg?size=626&ext=jpg&ga=GA1.1.162227864.1686034352&semt=ais); transform: perspective(800px) rotateX(20deg);">
            <form>
                <div class="mb-3">
                    <label for="nameInput" class="form-label fw-bold">Name</label>
                    <input type="text" class="form-control shadow-lg" id="nameInput" placeholder="Thomas">
                </div>
                <div class="mb-3">
                    <label for="emailInput" class="form-label fw-bold">Email address</label>
                    <input type="email" class="form-control shadow-lg" id="emailInput" placeholder="name@example.com">
                </div>
                <div class="mb-3">
                    <label for="phoneInput" class="form-label fw-bold">Phone No</label>
                    <input type="tel" class="form-control shadow-lg" id="phoneInput" placeholder="Enter your number">
                </div>
                <div class="col-auto">
                    <label for="passwordInput" class="form-label fw-bold">Password</label>
                    <input type="password" class="form-control shadow-lg" id="passwordInput" placeholder="******">
                </div>
                <div class="d-grid mt-3 m-auto w-50">
                    <button class="btn btn-primary shadow-lg" type="button"><a
                            class="text-decoration-none text-reset fw-bold">Sign Up</a></button>
                </div>
                <div>
                    <p class="mt-3" style="font-size: 75%; font-weight: bold;">Already have an account? <a
                            class="ps-2"><router-link to="/Login">Login</router-link></a></p>
                </div>
            </form>
        </div>
    </main>
</template>
<script>
export default {
    name:"SignUp_", 
  
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