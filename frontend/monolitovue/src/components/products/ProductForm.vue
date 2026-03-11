<template>
  <form class="product-form" @submit.prevent="onSubmit">
    <div>
      <label for="nombre">Nombre</label>
      <input id="nombre" v-model="local.nombre" required />
    </div>
    <div>
      <label for="precio">Precio</label>
      <input id="precio" type="number" step="0.01" v-model.number="local.precio" required />
    </div>
    <div>
      <label for="stock">Stock</label>
      <input id="stock" type="number" v-model.number="local.stock" />
    </div>
    <div>
      <label for="descripcion">Descripción</label>
      <textarea id="descripcion" v-model="local.descripcion"></textarea>
    </div>
    <div>
      <label for="marca">Marca</label>
      <input id="marca" v-model="local.marca" />
    </div>
    <div>
      <label for="talla">Talla</label>
      <input id="talla" v-model="local.talla" />
    </div>
    <div>
      <label for="color">Color</label>
      <input id="color" v-model="local.color" />
    </div>
    <div>
      <label for="imagen_url">Imagen URL</label>
      <input id="imagen_url" v-model="local.imagen_url" />
    </div>
    <div>
      <button type="submit">{{ isEdit ? 'Actualizar' : 'Crear' }}</button>
      <button type="button" v-if="isEdit" @click="$emit('cancel')">Cancelar</button>
    </div>
  </form>
</template>

<script>
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
      local: { ...this.product }
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
        this.local = { ...newVal };
      },
      deep: true
    }
  },
  methods: {
    onSubmit() {
      this.$emit("save", { ...this.local });
    }
  }
};
</script>

<style scoped>
.product-form {
  max-width: 400px;
  margin-bottom: 1rem;
}
.product-form div {
  margin-bottom: 0.5rem;
}
.product-form label {
  display: block;
  font-weight: bold;
}
.product-form input,
.product-form textarea {
  width: 100%;
  padding: 0.25rem;
  box-sizing: border-box;
}
</style>