<template>
  <div class="select">
    <div class="select__label">Начальник</div>
    <div class="select__inner">
      <div @click="open = !open" :class="open ? 'open' : ''" class="select__head">{{ head.name }}</div>
      <transition name="fade">
        <div v-if="open" class="select__content">
          <div
            v-for="item in modelWithHead"
            :key="item.id"
            @click="changeItem(item)"
            class="select__option"
          >
            {{ item.name }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppSelect",
  props: {
    model: {
      data: Array,
      default: []
    }
  },
  data() {
    return {
      open: false,
      head: {
        name: "Без начальника", 
        id: ""
      },
    }
  },
  computed: {
    modelWithHead() {
      return [{
        name: "Без начальника", 
        id: ""
      }, ...this.model]
    }
  },
  methods: {
    changeItem(item) {
      this.open = false;
      this.head = item;
      this.$emit('change', item.id);
    }
  },
}
</script>
<style lang="scss" scoped>
.select {
  width: 100%;
  &__label {
    font-size: 14px;
    margin-bottom: 8px;
  }
  &__inner {
    position: relative;
  }
  &__head {
    position: relative;
    padding: 16px 42px 16px 24px;
    border: 1px solid #eee;
    border-radius: 5px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      display: block;
      width: 9px;
      height: 2px;
      border-radius: 1px;
      background-color: #333;
      position: absolute;
      top: 50%;
      transition: transform 175ms ease-in-out;
    }
    &::before {
      right: 11px;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      right: 16px;
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &.open {
      &::before {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
  &__content {
    max-height: 150px;
    overflow-y: auto;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 5px);
    width: 100%;
    padding: 16px 24px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 5px;
    box-shadow: 6px 12px 16px rgba(0, 0, 0, .1);
  }
  &__option {
    padding: 8px 0;
    cursor: pointer;
    border-bottom: 1px solid #eee;
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>