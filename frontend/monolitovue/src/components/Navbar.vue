<template>
  <nav class="navbar">

    <div class="logo">
      <router-link to="/">🛍️ MiTienda</router-link>
    </div>

    <div class="menu">
      <router-link to="/">Inicio</router-link>
      <router-link to="/products">Productos</router-link>
    </div>

    <div class="auth">
      <router-link to="/login" class="btn login">Login</router-link>
      <router-link to="/register" class="btn register">Register</router-link>
    </div>

  </nav>
</template>

<style scoped>

.navbar{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:70px;

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:0 40px;

  background:#4f46e5;
  color:white;

  box-shadow:0 4px 10px rgba(0,0,0,0.1);

  z-index:1000;
}

.logo a{
  color:white;
  text-decoration:none;
  font-weight:bold;
  font-size:20px;
}

.menu a{
  margin:0 15px;
  color:white;
  text-decoration:none;
}

.menu a:hover{
  opacity:0.8;
}

.auth .btn{
  margin-left:10px;
  padding:8px 15px;
  border-radius:6px;
  text-decoration:none;
  font-weight:bold;
}

.login{
  background:white;
  color:#4f46e5;
}

.register{
  background:#312e81;
  color:white;
}

</style>