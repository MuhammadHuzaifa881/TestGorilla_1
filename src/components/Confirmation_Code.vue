<template>
    <main>


        <!-- Login -->
        <div class="rounded-5 mt-5 p-5 d-flex flex-column align-items-center border border-black border-1 w-25 m-auto shadow-lg p-3 mb-5 rounded bg-dark-subtle"
            style="background-image: url(https://img.freepik.com/free-vector/beautiful-blue-watercolor-texture-background_1035-20478.jpg?size=626&ext=jpg&ga=GA1.1.162227864.1686034352&semt=ais);transform: perspective(800px) rotateX(20deg);">


            <div class="mb-3 w-100 ">
                <label for="exampleFormControlInput1" class="form-label fw-bold">Enter Code</label>
                <input type="text" class="form-control shadow-lg " id="exampleFormControlInput1"
                    placeholder="Enter Code">
            </div>
            <div class="d-grid w-50">
                <button class="btn btn-primary text-decoration-none fw-bold my-5" @click="$router.push('/Confirmation_Password')" role="link" type="button">Next</button>
            </div>
            
        </div> 
    </main>
</template> 


<script>
export default{
    name:"Confirmation_Code",
}

</script> 


<style>
h1{
    color: purple;
}
</style>