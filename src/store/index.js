import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [{
      id: "1",
      name: "Ivan",
      tel: "+7 999 999 99 99",
      parent: "2"
    }, {
      id: "2",
      name: "Kirill",
      tel: "+7 999 999 99 95",
      parent: ""
    }, {
      id: "3",
      name: "Alexey",
      tel: "+7 999 999 99 96",
      parent: "5"
    }, {
      id: "4",
      name: "Sasha",
      tel: "+7 999 999 99 95",
      parent: "2"
    }, {
      id: "5",
      name: "Masha",
      tel: "+7 999 999 99 99",
      parent: ""
    }, {
      id: "6",
      name: "Dasha",
      tel: "+7 999 999 99 94",
      parent: "2"
    }, {
      id: "7",
      name: "Anastasiya",
      tel: "+7 999 999 99 99",
      parent: "6"
    }, {
      id: "8",
      name: "Evangelion",
      tel: "+7 999 999 99 98",
      parent: "6"
    }],
    sorted: ''
  },
  getters: {
    users(state) {
      return state.users
    },
    usersHierarchy(state) {
      let roots = [],
          children = {};
      for (let i = 0, len = state.users.length; i < len; ++i) {
        let item = state.users[i],
          p = item.parent,
          target = !p ? roots : (children[p] || (children[p] = []));
        target.push({
          value: item
        });
      }
      let findChildren = parent => {
        if (children[parent.value.id]) {
          parent.children = children[parent.value.id];
          for (var i = 0, len = parent.children.length; i < len; ++i) {
            findChildren(parent.children[i]);
          }
        }
      };
      for (let i = 0, len = roots.length; i < len; ++i) {
        findChildren(roots[i]);
      }
      return roots;
    }
  },
  mutations: {
    saveData(state, payload) {
      state.users.push(payload);
      localStorage.setItem('data', JSON.stringify(state.users));
    },
    init(state) {
      let dataFromLS = localStorage.getItem('data');
      if (!dataFromLS) {
        localStorage.setItem('data', JSON.stringify(state.users));
      } else {
        state.users = JSON.parse(dataFromLS);
      }
    },
    sortUsers(state, payload) {
      if (payload === 'name') {
        let tmp;
        if (state.sorted === 'name') {
          tmp = [-1, 1]
          state.sorted = '-name';
        } else {
          tmp = [1, -1]
          state.sorted = 'name';
        }
        state.users.sort((a, b) => {
          if (a.name > b.name) {
            return tmp[0];
          }
          if (a.name < b.name) {
            return tmp[1];
          }
          return 0;
        })
      }
      if (payload === 'tel') {
        if (state.sorted === 'tel') {
          state.users.sort((a, b) => {
            return Number(b.tel.replace(/[^0-9]+/g, "")) - Number(a.tel.replace(/[^0-9]+/g, ""))
          })
          state.sorted = '-tel';
        } else {
          state.users.sort((a, b) => {
            return Number(a.tel.replace(/[^0-9]+/g, "")) - Number(b.tel.replace(/[^0-9]+/g, ""))
          })
          state.sorted = 'tel';
        }
      }
    }
  }
})
