<template>
  <div>
    <input
      type="checkbox"
      :checked="checked"
      @change="$emit('change',$event.target.checked)"
    >
  </div>
</template>
<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  }

}
</script>

