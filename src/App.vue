<template>
  <div id="app">
    <section class="home" id="home">
      <div class="container">
        <div class="home__flex">
          <div class="home__result">
            <div class="home__btn-wrapper">
              <div @click="open = true" class="home__btn">Добавить</div>
            </div>
            <app-table></app-table>
          </div>
          <transition name="fade">
            <div v-show="open" class="home__form">
              <app-form @close="open = false"></app-form>
            </div>
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppTable from '@/components/AppTable'
import AppForm from '@/components/AppForm'
export default {
  name: "App",
  data() {
    return {
      open: false
    }
  },
  components: {
    AppTable,
    AppForm
  },
  beforeCreate() {
    this.$store.commit('init')
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding: 50px 0;
  &__flex {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  &__btn {
    display: block;
    width: auto;
    padding: 16px 24px;
    background-color: rgb(36, 130, 153);
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    &-wrapper {
      margin-bottom: 16px;
      display: flex;
      justify-content: flex-end;
    }
  }
  &__result,
  &__form {
    width: 400px;
    margin: 0 24px;
  }
  &__result {
    margin-bottom: 24px;
  }
}
</style>
<style lang="scss">
@import "./assets/fonts/Rubik/stylesheet.css";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Rubik", sans-serif;
  color: #333;
  background-color: #f7f7f7;
  min-height: 100vh;
  overflow: hidden;
}

input, button, textarea {
  outline: none;
}

img {
  user-select: none;
  pointer-events: none;
}

.container {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity .5s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
