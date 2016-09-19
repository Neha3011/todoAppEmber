import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addTodo(text) {
      this.get('todos').pushObject({id: Date.now(), text: text});
    },
    deleteTodo(todo){
      this.get('todos').removeObject(todo);
    }
  }
});
