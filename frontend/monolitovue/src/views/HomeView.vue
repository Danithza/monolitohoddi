<template>
  <div class="home">

    <section class="hero">
      <h1>🛍️ Bienvenido a la tienda</h1>
      <p>Explora nuestros productos y gestiona tu inventario fácilmente.</p>

      <div class="buttons">
        <router-link to="/products" class="btn primary">
          Ver Productos
        </router-link>

        <router-link to="/register" class="btn secondary">
          Crear Cuenta
        </router-link>
      </div>
    </section>

    <section class="features">

      <div class="card">
        <h3>📦 Gestión de Productos</h3>
        <p>
          Administra tu catálogo de productos fácilmente con nuestro sistema.
        </p>
      </div>

      <div class="card">
        <h3>🔐 Seguridad</h3>
        <p>
          Sistema de autenticación con login y registro seguro.
        </p>
      </div>

      <div class="card">
        <h3>⚡ Rápido</h3>
        <p>
          Aplicación construida con Vue y Node para alto rendimiento.
        </p>
      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>

.home{
  padding:40px;
  font-family: Arial, Helvetica, sans-serif;
}

/* HERO */

.hero{
  text-align:center;
  margin-bottom:50px;
}

.hero h1{
  font-size:42px;
  margin-bottom:10px;
}

.hero p{
  color:#666;
  font-size:18px;
}

/* BOTONES */

.buttons{
  margin-top:20px;
}

.btn{
  padding:12px 22px;
  border-radius:8px;
  text-decoration:none;
  margin:10px;
  font-weight:bold;
  transition:0.3s;
}

.primary{
  background:#4f46e5;
  color:white;
}

.primary:hover{
  background:#4338ca;
}

.secondary{
  border:2px solid #4f46e5;
  color:#4f46e5;
}

.secondary:hover{
  background:#4f46e5;
  color:white;
}

/* FEATURES */

.features{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
}

.card{
  background:white;
  padding:25px;
  border-radius:10px;
  box-shadow:0 5px 15px rgba(0,0,0,0.08);
  transition:0.3s;
}

.card:hover{
  transform:translateY(-5px);
}

.card h3{
  margin-bottom:10px;
}

.card p{
  color:#555;
}

</style>