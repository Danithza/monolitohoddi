<template>
  <table class="product-table">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>descripcion</th>
        <th>Precio</th>
        <th>Stock</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="prod in products" :key="prod.id_producto">
        <td>{{ prod.nombre }}</td>
         <td>{{ prod.descripcion }}</td>
        <td>{{ prod.precio }}</td>
        <td>{{ prod.stock }}</td>
        <td>
          <button @click="$emit('edit', prod)">Editar</button>
          <button @click="$emit('delete', prod.id_producto)">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ProductTable",
  props: {
    products: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.product-table {
  width: 100%;
  border-collapse: collapse;
}
.product-table th,
.product-table td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}
</style>