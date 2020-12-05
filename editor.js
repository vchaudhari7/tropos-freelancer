function navbarSelect() {
  let navbar = document.getElementById('navbar');

  let e = document.getElementById('navbar-select');
  let selectedNavbar = e.options[e.selectedIndex].value;

  if (selectedNavbar === "version1") {
    navbar.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="mainNav">
  <a class="navbar-brand" href="#">
    <img src="./assets/img/logo.png" width="40" height="40" class="rounded" alt="freelancer logo" loading="lazy">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a>
          </li>
      </ul>
  </div>`;
  }

  if (selectedNavbar === "version2") {
    navbar.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="mainNav">
    <!-- logo only visible on small and medium size screen device -->
    <a class="navbar-brand d-flex d-lg-none" href="#">
      <img src="./assets/img/logo.png" width="40" height="40" class="rounded" alt="freelancer logo" loading="lazy">
    </a>
    <!-- /logo only visible on small and medium size screen device -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      
    <div class="collapse navbar-collapse justify-content-md-center" id="navbarResponsive">
      <!-- links only visible on large and x-large size screen device -->
      <ul class="navbar-nav d-none d-lg-flex">
        <li class="nav-item mx-0 mx-lg-1">
          <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a>
        </li>
        <li class="nav-item mx-0 mx-lg-1">
          <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a>
        </li>
        <li class="nav-item mx-0 mx-lg-1">
          <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a>
        </li>
      </ul>
      <!-- /links only visible on large and x-large size screen device -->

      <!-- logo only visible on large and x-large size screen device --> 
      <a class="navbar-brand justify-content-md-center d-none d-lg-flex" href="#">
        <img src="./assets/img/logo.png" width="40" height="40" class="rounded" alt="freelancer logo" loading="lazy">
      </a>
      <!-- /logo only visible on large and x-large size screen device -->

      <ul class="navbar-nav">
        <li class="nav-item mx-0 mx-lg-1">
          <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a>
        </li>
        <li class="nav-item mx-0 mx-lg-1">
          <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a>
        </li>
        <li class="nav-item mx-0 mx-lg-1">
          <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>`;
  }

  if (selectedNavbar === "version3") {
    navbar.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="mainNav">
    <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a>
          </li>
      </ul>
    </div>
  </nav>`;
  }
  
}



function headerSelect() {
  let header = document.getElementById('header');

  let e = document.getElementById('header-select');
  let selectedHeader = e.options[e.selectedIndex].value;

  if (selectedHeader === "version1") {
    header.innerHTML = `<header class="masthead bg-primary text-white text-center vh-100">
    <div class="container pt-5">
      <!-- Masthead Avatar Image --><img src="./assets/img/profile-img .png" width="300" height="300" class="masthead-avatar rounded-circle border border-dark mt-5 mb-3" alt="freelancer profile photo">
      <!-- Masthead Heading-->
      <h1 class="masthead-heading mb-0">Hi I am Name</h1>
      <!-- Masthead Subheading-->
      <p class="masthead-subheading font-weight-light">Web Developer | Graphic Designer</p>
    </div>
  </header>`;
  }

  if (selectedHeader === "version2") {
    header.innerHTML = `<header class="masthead bg-primary text-white text-center vh-100">
    <div class="container pt-5">
      <!-- Masthead Avatar Image --><img src="./assets/img/profile-img .png" width="300" height="300" class="masthead-avatar rounded-circle border border-dark mt-5 mb-3" alt="freelancer profile photo">
      <!-- Masthead Heading-->
      <h1 class="masthead-heading mb-0">Hi I am Name</h1>
    </div>
  </header>`
  }

  if (selectedHeader === "version3") {
    header.innerHTML = `<header class="masthead bg-primary text-white text-center vh-100">
    <div class="container pt-5 d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 pt-5 my-auto">
          <!-- Masthead Heading-->
          <h1 class="masthead-heading mb-0">Hi I am Name</h1>
          <!-- Masthead Subheading-->
          <!-- <p class="masthead-subheading font-weight-light">Web Developer | Graphic Designer</p> -->
          <span class="badge badge-pill badge-light">Web Developer</span>
          <span class="badge badge-pill badge-light">Graphic Designer</span>
        </div>
        <div class="col col-sm-12 col-md-6 col-lg-6 pt-5">
          <!-- Masthead Avatar Image -->
          <img src="./assets/img/profile-img .png" width="300" height="300" class="masthead-avatar rounded border border-dark" alt="freelancer profile photo">
        </div>
      </div>
    </div>
  </header>`
  }
}