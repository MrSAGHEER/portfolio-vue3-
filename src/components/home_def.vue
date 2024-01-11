<template>
    <div class="container">
      <div class="about">
        <h1>Hi,</h1>
        <h1>I am <span class="name">M.Sagheer</span></h1>
        <h1>A web Developer</h1>
        <button>contact</button>
      </div>
      <div class="image">
        <img src="../assets/cv-img.png" alt="Owner Pic/with Blue background">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    },
  };
  </script>
  
  <style>
  :root {
    --time-transisition: 1.5s;
    --bacground-colour: #02a8dd;
    --text-colour: #02a8dd;
    --text-size: 56px;
  }
  
  .container {
    display: flex;
    justify-content: center;
    width: 90%;
    margin: auto;
    padding: 20px;
  }
  
  .about {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: left;
    height: 400px;
  }
  
  .about h1 {
    font-size: var(--text-size);
  }
  
  .about h1 .name {
    color: var(--text-colour);
    font-size: var(--text-size);
  }
  
  .about button {
    font-size: 35px;
    padding: 5px;
    background-color: transparent;
    border: none;
    color: white;
    margin: auto;
    background-color: var(--bacground-colour);
    width: 150px;
    height: 70px;
    padding: 10px 10px;
    margin: 10px;
    border-radius: 10px;
    transition: all var(--time-transisition) ease-in-out;
  }
  
  .about button:hover {
    cursor: pointer;
    border-radius: 30px;
  }
  
  .container .image {
    width: 40%;
    height: 400px;
  }
  
  .container .image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    cursor: pointer;
    transition: clip-path var(--time-transisition), transform var(--time-transisition), border-radius var(--time-transisition);
  }
  
  .container .image img:hover {
    transform: scale(1.1);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    border-radius: 80%;
  }
  </style>
  