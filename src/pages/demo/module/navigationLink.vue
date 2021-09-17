<template>
  <a
    :href="url"
    class="nav-link"
  >
    <slot />
  </a>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

