<template>
  <div class="input-wrapper">
    <label class="label">{{ label }}</label>
    <input 
      :value="value" 
      @input="$emit('input', $event.target.value)" 
      :placeholder="placeholder"
      v-mask="mask"
      type="text"
      class="input"  
    >
  </div>
</template>
<script>
export default {
  name: "AppInput",
  props: {
    label: {
      type: String,
      default: 'Данные'
    },
    placeholder: {
      type: String,
      default: 'Данные'
    },
    value: {
      type: String,
      default: ''
    },
    mask: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.label {
  display: block;
  width: max-content;
  margin-bottom: 8px;
  font-size: 14px;
}
.input {
  font-family: "Rubik";
  font-size: 16px;
  width: 100%;
  padding: 16px 24px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
}
</style>