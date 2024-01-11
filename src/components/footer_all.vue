<template>
    <div class="footer-area">
      <div class="name">M.Sagheer</div>
      <div class="contact">
        <div class="item phone" title="+923006260972">
          <a href="tel:+923006260972">
            <i class="fas fa-phone"></i>
          </a>
        </div>
        <div class="item whatsapp" title="+923400679217">
          <a href="https://wa.me/923400679217">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
        <div class="item email" title="imsagheer2@gmail.com">
          <a href="mailto:imsagheer2@gmail.com">
            <i class="far fa-envelope"></i>
          </a>
        </div>
      </div>
      <div class="reserved">&copy; All Rights Reserved</div>

    </div>
  </template>
  
  <script>
  export default {
    name: "FooterAll",
  };
  </script>
  
  <style >
  :root {
    --text-color: #FFFFFF;
    --icon-size: 24px; /* Adjust the icon size as needed */
    --back_color:#0d1730;
  }
  
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  
  .footer-area {
    background-color: var(--back_color);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--text-color);
    padding: 30px;
  }
  
  .name {
    padding: 10px;
    margin: 10px;
    font-size: 30px;
  }
  
  .contact {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  
  .item {
    padding: 5px;
    margin: 5px;
    display: flex;
    align-items: center;
  }
  
  .item i {
    margin-right: 10px;
    font-size: var(--icon-size);
  }
  
  .phone a, .whatsapp a, .email a {
    text-decoration: none;
    color: var(--text-color);
    cursor: pointer;
  }
  .reserved{
    margin: 20px;
  }
  </style>
  