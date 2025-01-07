<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      message: 'Laadin...',
    }
  },
  mounted() {
    axios
      .get('http://localhost:5000/api/test')
      .then((response) => {
        this.message = response.data.message
      })
      .catch(() => {
        this.message = 'Päring ebaõnnestus!'
      })
  },
}
</script>
