import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addTodo(text) {
      this.get('todos').pushObject({ text: text, id: Date.now()});
    },
    deleteTodo(todo){
      this.get('todos').removeObject({id: todo.id});
      console.log(this.get('todos'));
    }
  }
});
