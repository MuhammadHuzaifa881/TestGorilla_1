<template>
    <div class="main">
      <!-- Language Nav bar + Log in -->
      <nav class="navbar px-5" style="position: fixed; top: 0; width: 100%; background-color: lightgrey">
        <div class="container-fluid d-flex justify-content-between align-items-center">
          <div class="d-flex">
            <a class="navbar-brand" href="#">
              <img src="https://www.testgorilla.com/wp-content/themes/testgorilla/assets/images/world.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
            </a>
            <div class="dropdown">
              <a class="btn btn-secondary dropdown-toggle language" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                EN
              </a>
              <!-- Drop menu items -->
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Arabic</a></li>
                <li><a class="dropdown-item" href="#">English</a></li>
                <li><a class="dropdown-item" href="#">French</a></li>
                <li><a class="dropdown-item" href="#">Dutch</a></li>
                <li><a class="dropdown-item" href="#"></a></li>
                <li><a class="dropdown-item" href="#">French</a></li>
                <li><a class="dropdown-item" href="#">French</a></li>
              </ul>
            </div>
          </div>
          <div>
            <router-link class="text-decoration-none" to="/Login">Log in</router-link>
          </div>
        </div>
      </nav>
    <!-- New Header content -->
<!-- Logo + nav items -->
<header class="bg-primary nav-header w-100" style="position: fixed; top: 56px">
    <div class="container-fluid d-flex justify-content-center bg-secondary pad-remover">
      <nav class="navbar navbar-expand-lg bg-body-tertiary w-100 px-5">
        <div class="container-fluid">
          <!-- Logo Test Gorilla -->
          <a class="navbar-brand" href="#">
            <img src="https://www.testgorilla.com/wp-content/uploads/2020/01/testgorilla-logo.png" style="width: 200px; height: 65px" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Nav menu items -->
          <div class="collapse navbar-collapse float-end navbar-text">
            <ul class="navbar-nav text-center">
              <li class="nav-item mx-5">
                <a class="nav-link active" aria-current="page" href="#">Product Tour</a>
              </li>
              <li class="nav-item mx-5">
                <a class="nav-link" href="#">Science</a>
              </li> 
              <li class="nav-item mx-5">
                <a class="nav-link" href="#">Test Library</a>
              </li>
              <li class="nav-item mx-5">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item dropdown mx-5">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Learn
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
    </div>
  </template>
  
  <script>
  import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle";
  export default {
    name: "Dashboard_gorilla",
    mounted() {
      // Initialize Bootstrap dropdown functionality
      new bootstrap.Dropdown(document.getElementById("languageDropdown"));
    },
  };
  </script>
  
  <style>
  .nav-adj {
    justify-content: left !important;
  }
  .pad-remover {
    padding-left: 0 !important ;
    padding-right: 0 !important ;
  }
  </style>
  