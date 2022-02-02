<template>
  <div class="table">
    <div class="table__head">
      <div @click="sortUsers('name')" class="table__head-item">Имя</div>
      <div @click="sortUsers('tel')" class="table__head-item">Телефон</div>
    </div>

    <app-table-item
      v-for="item in usersHierarchy"
      :key="item.id"
      :model="item">
    </app-table-item>
  </div>
</template>
<script>
import AppTableItem from '@/components/AppTableItem.vue'
export default ({
  name: "AppTable",
  components: {
    AppTableItem
  },
  computed: {
    usersHierarchy() {
      return this.$store.getters.usersHierarchy
    }
  },
  methods: {
    sortUsers(modifier) {
      this.$store.commit('sortUsers', modifier)
    }
  }
})
</script>
<style lang="scss" scoped>
.table {
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 6px 12px 16px rgba(0, 0, 0, .1);
  &__head {
    display: flex;
    margin-bottom: 8px;
    padding-bottom: 8px;
    + .table__row {
      border-top: 1px solid #eee;
    }
    &-item {
      width: 50%;
      padding: 0 15px;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
