<template>
  <div class="form">
    <div class="form__title">
      Добавление пользователя
    </div>
    <div @click="$emit('close')" class="form__close">
      <span></span><span></span>
    </div>
    <app-input
      v-for="(item, index) in inputs"
      :key="index"
      v-model="item.value"
      :label="item.label"
      :placeholder="item.placeholder"
      :mask="item.mask"
      class="form__row"
    ></app-input>
    <app-select 
      :model="usersList" 
      @change="parentId = $event"
      class="form__row"
    ></app-select>
    <div @click="saveData()" class="form__btn">Сохранить</div>
  </div>
</template>
<script>
import AppInput from '@/components/AppInput';
import AppSelect from '@/components/AppSelect';
export default {
  name: "AppForm",
  data() {
    return {
      inputs: {
        name: {
          value: '',
          label: 'Имя',
          placeholder: 'Введите имя'
        },
        tel: {
          value: '+',
          label: 'Телефон',
          placeholder: 'Введите телефон',
          mask: '+7 ### ### ## ##'
        }
      },
      parentId: ''
    }
  },
  computed: {
    usersList() {
      return this.$store.getters.users
    }
  },
  methods: {
    saveData() {
      let payload = {
        name: this.inputs.name.value,
        tel: this.inputs.tel.value,
        parent: this.parentId,
        id: this.usersList.length + 1
      }
      this.$store.commit('saveData', payload)
    }
  },
  components: {
    AppInput,
    AppSelect
  }
}
</script>
<style lang="scss" scoped>
.form {
  position: relative;
  padding: 32px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 6px 12px 16px rgba(0, 0, 0, .1);
  &__title {
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 22px;
  }
  &__row {
    margin-bottom: 16px;
  }
  &__btn {
    width: max-content;
    padding: 16px 24px;
    background-color: rgb(36, 130, 153);
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  &__close {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 16px;
    right: 24px;
    span {
      display: block;
      width: 100%;
      height: 2px;
      border-radius: 1px;
      background-color: #333;
      position: absolute;
      top: 50%;
      left: 50%;
      &:first-child {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:last-child {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
}
</style>