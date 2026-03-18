<template>
  <div class="table-container">
    <table class="product-table">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Marca</th>
          <th>Talla</th>
          <th>Color</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Estado</th>
          <th>Visible</th>
          <th>Categoría</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="prod in products" :key="prod.id_producto">

          <!-- 🖼 Imagen -->
          <td>
            <img 
              :src="prod.imagen_url || 'https://picsum.photos/50'" 
              class="img"
            />
          </td>

          <td>{{ prod.nombre }}</td>
          <td>{{ prod.descripcion }}</td>
          <td>{{ prod.marca }}</td>
          <td>{{ prod.talla }}</td>
          <td>{{ prod.color }}</td>
          <td>${{ prod.precio }}</td>
          <td>{{ prod.stock }}</td>

          <!-- 🟢 Estado -->
          <td>
            <span 
              class="badge"
              :class="{
                active: prod.estado === 'Disponible',
                inactive: prod.estado === 'Inactivo',
                warning: prod.estado === 'Agotado'
              }"
            >
              {{ prod.estado }}
            </span>
          </td>

          <!-- 👁 Visible -->
          <td>
            <span :class="prod.visible ? 'badge yes' : 'badge no'">
              {{ prod.visible ? "Sí" : "No" }}
            </span>
          </td>

          <!-- 🏷 Categoría -->
          <td>
            {{ prod.categoria_nombre || prod.id_categoria || 'Sin categoría' }}
          </td>

          <!-- ⚙️ Acciones -->
          <td class="actions">
            <button class="edit" @click="$emit('edit', prod)">Editar</button>
            <button class="delete" @click="$emit('delete', prod.id_producto)">Eliminar</button>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
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
.table-container {
  overflow-x: auto;
  margin-top: 20px;
}

/* Tabla */
.product-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
}

/* Header */
.product-table thead {
  background: #4facfe;
  color: white;
}

.product-table th,
.product-table td {
  padding: 10px;
  text-align: center;
}

/* Filas */
.product-table tbody tr:nth-child(even) {
  background: #f9f9f9;
}

.product-table tbody tr:hover {
  background: #eef6ff;
}

/* Imagen */
.img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
}

/* Badges */
.badge {
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  color: white;
}

.active {
  background: #28a745;
}

.inactive {
  background: #dc3545;
}

.warning {
  background: #fd7e14;
}

.yes {
  background: #007bff;
}

.no {
  background: #6c757d;
}

/* Botones */
.actions {
  display: flex;
  gap: 5px;
  justify-content: center;
}

button {
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  color: white;
}

.edit {
  background: #ffc107;
}

.edit:hover {
  background: #e0a800;
}

.delete {
  background: #dc3545;
}

.delete:hover {
  background: #c82333;
}
</style>