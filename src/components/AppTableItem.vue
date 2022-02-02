<template>
  <div class="table__row">
    <div class="table__row-inner">
      <div class="table__item">
        {{model.value.name}}
      </div>
      <div class="table__item">
        {{ model.value.tel }}
      </div>
    </div>
    <template v-if="isFolder">
      <app-table-item class="item" v-for="model in model.children" :key="model.id" :model="model">
      </app-table-item>
    </template>
  </div>
</template>
<script>
export default {
  name: "AppTableItem",
  props: {
    model: Object
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
}
</script>
<style lang="scss" scoped>
.table {
  &__row {
    &-inner {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid #eee;
    }
    > .table__row {
      padding-left: 20px;
    }
  }
  &__item {
    &:last-child {
      width: max-content;
      min-width: 135px;
    }
  }
}
</style>