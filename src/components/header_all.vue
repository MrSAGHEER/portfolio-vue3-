<template>
  <div class="header-container">
      <div class="headers">
        <div class="me">
        <router-link class="links sagheer" to="/">Sagheer</router-link>
        </div>
        <div class="other">
          <router-link class="links" to="/">Home</router-link>
        <router-link class="links" to="/about_page">About</router-link>
        <router-link class="links" to="/education_page">Education</router-link>
        <router-link class="links" to="/skill_page">Skills</router-link>
        <router-link class="links" to="/work_page">Work</router-link>
        <router-link class="links" to="/contacts_page">Contacts</router-link>
      </div>
      </div>
    </div>
      <router-view></router-view>
  </template>
<script>

export default{
    name:'header_all',
}

</script>
<style scoped >
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.header-container {
  width: 90%;
  margin: 0 auto;
}
.headers {
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  margin: 0px 10px;
  box-shadow: 0 1px 4px rgba(146,161,176,.15);

}
.other{
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  max-width: 60%;
  font-style: poppins;
}

.headers .links {
  text-decoration: none;
  color: black;
  font-size: 25px; 
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.5s ease-in-out;
}

.headers .links:hover {
  padding-top: 0px;
  border-bottom: 3px solid #3E6FF4;
}




.me{
  margin-right: 0px;
}

</style>

