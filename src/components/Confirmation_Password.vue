<template>
  <main>
    <!-- Login -->
    <div
      class="rounded-5 mt-5 p-5 d-flex flex-column align-items-center border border-black border-1 w-25 m-auto shadow-lg p-3 mb-5 rounded bg-dark-subtle"
      style="
        background-image: url(https://img.freepik.com/free-vector/beautiful-blue-watercolor-texture-background_1035-20478.jpg?size=626&ext=jpg&ga=GA1.1.162227864.1686034352&semt=ais);
        transform: perspective(800px) rotateX(20deg);
      "
    >
      <div class="col-auto w-100">
        <label for="inputPassword2" class="form-label fw-bold">
          New Password</label
        >
        <input
          type="password"
          class="form-control shadow-lg"
          id="inputPassword2"
          placeholder="******"
        />
      </div>
      <div class="col-auto w-100">
        <label for="inputPassword2" class="form-label fw-bold">
          Confirm Password</label
        >
        <input
          type="password"
          class="form-control shadow-lg"
          id="inputPassword2"
          placeholder="******"
        />
      </div>
      <div class="d-grid w-50">
        <button
          type="button" 
          class="btn btn-primary shadow my-5 fw-bold"  @click="$router.push('/Login')"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Confirm
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Confirmation_Password",
};
</script>

<style>
h1 {
  color: purple;
}
</style>
