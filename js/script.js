const app = new Vue({

  el: '#app',

  data: {
    
    strTodo: '',
    logoBool:"img/logo.png",
    alertActive: false,
    todos: [

      {
        todo: 'Imparare Vue',
        alertActivities: false,
        checked: false
      },
      {
        todo: 'Ripassare Vue',
        alertActivities: false,
        checked: false
      },
      {
        todo: 'Ripassare html e css',
        alertActivities: false,
        checked: false
      },
      {
        todo: 'Ripassare ancora Vue',
        alertActivities: false,
        checked: false
      },
      {
        todo: 'Provare ad utilizzare Vue',
        alertActivities: false,
        checked: false
      },

    ],

  },

  methods: {

    addTodo() {
      if (this.strTodo.length > 2) {
        this.todos.push(
          {
            todo: this.strTodo, 
            alertActivities: false, 
            checked: false
          });
      } else {
        this.alertActive = true;
        setTimeout(() => {
          this.alertActive = false;
        }, 2000);
      }
      this.strTodo = '';
    },
    
    removeTodo(index) {
      this.todos.splice(index, 1);
  },

    notCheckedAlert(index) {
      this.todos[index].alertActivities = true;
      setTimeout(() => {
        this.todos[index].alertActivities = false;
      }, 2500);

    }

  }

});