<template>
  <div class="container">
    <form class="card" @submit.prevent="onSubmit">
      <h2>{{ isEdit ? "Editar Producto" : "Crear Producto" }}</h2>

      <div class="grid">
        <div class="input-group">
          <label>Nombre</label>
          <input v-model="local.nombre" required />
        </div>

        <div class="input-group">
          <label>Precio</label>
          <input type="number" step="0.01" v-model.number="local.precio" required />
        </div>
      </div>

      <div class="grid">
        <div class="input-group">
          <label>Stock</label>
          <input type="number" v-model.number="local.stock" />
        </div>

        <div class="input-group">
          <label>Marca</label>
          <input v-model="local.marca" />
        </div>
      </div>

      <div class="input-group">
        <label>Descripción</label>
        <textarea v-model="local.descripcion"></textarea>
      </div>

      <div class="grid">
        <div class="input-group">
          <label>Talla</label>
          <input v-model="local.talla" />
        </div>

        <div class="input-group">
          <label>Color</label>
          <input v-model="local.color" />
        </div>
      </div>

      <div class="input-group">
        <label>Imagen URL</label>
        <input v-model="local.imagen_url" />
      </div>

      <!-- ✅ ESTADO CORREGIDO -->
      <div class="grid">
        <div class="input-group">
          <label>Estado</label>
          <select v-model="local.estado">
            <option value="Disponible">Disponible</option>
            <option value="Agotado">Agotado</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>

        <!-- ✅ BOOLEANO CORRECTO -->
        <div class="input-group">
          <label>Visible</label>
          <select v-model="local.visible">
            <option :value="true">Sí</option>
            <option :value="false">No</option>
          </select>
        </div>
      </div>

      <!-- ✅ CATEGORÍAS -->
      <div class="input-group">
        <label>Categoría</label>
        <select v-model="local.id_categoria" required>
          <option disabled value="">Seleccione una categoría</option>
          <option v-for="cat in categorias" :key="cat.id_categoria" :value="cat.id_categoria">
            {{ cat.nombre_categoria }}
          </option>
        </select>
      </div>

      <div class="buttons">
        <button type="submit">
          {{ isEdit ? "Actualizar" : "Crear" }}
        </button>
        <button type="button" v-if="isEdit" @click="$emit('cancel')" class="cancel">
          Cancelar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { getCategorias } from "../../api/productService";

export default {
  name: "ProductForm",
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      local: {
        nombre: "",
        descripcion: "",
        marca: "",
        precio: 0,
        talla: "",
        color: "",
        imagen_url: "",
        stock: 0,
        estado: "Disponible", // ✅ IMPORTANTE
        visible: true,        // ✅ IMPORTANTE
        id_categoria: ""
      },
      categorias: []
    };
  },
  computed: {
    isEdit() {
      return !!this.product.id_producto;
    }
  },
  watch: {
    product: {
      handler(newVal) {
        this.local = {
          ...this.local, // mantiene defaults
          ...newVal
        };
      },
      immediate: true,
      deep: true
    }
  },
  async mounted() {
    try {
      const res = await getCategorias();
      this.categorias = res.data;
    } catch (error) {
      console.error("Error cargando categorías", error);
    }
  },
  methods: {
    onSubmit() {
      console.log("ENVIANDO:", this.local); // 🔥 para debug
      this.$emit("save", { ...this.local });
    }
  }
};
</script>

<style scoped>
.container {
  width: min(100%, 700px);
  margin: 0 auto;
  padding: 1.25rem;
}

.card {
  padding: 1.5rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
}

h2 {
  margin: 0 0 1.25rem;
  font-size: 1.5rem;
  text-align: center;
}

.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-bottom: 1rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

label {
  font-weight: 600;
  font-size: 0.95rem;
  color: #2c3e50;
}

input,
textarea,
select {
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 0.5rem;
  padding: 0.65rem 0.8rem;
  font-size: 0.95rem;
  background: #fff;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.18);
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 1.25rem;
}

button {
  padding: 0.75rem 1.2rem;
  border: none;
  border-radius: 0.65rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

button:active {
  transform: translateY(0);
}

button[type="submit"] {
  background: #1d4ed8;
  color: #fff;
}

button.cancel {
  background: rgba(156, 163, 175, 0.18);
  color: #1f2937;
}

@media (max-width: 520px) {
  .container {
    padding: 1rem;
  }

  .card {
    padding: 1.2rem;
  }

  h2 {
    font-size: 1.25rem;
  }
}
</style>
