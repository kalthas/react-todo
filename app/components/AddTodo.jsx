var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    if (todoText.length) {
      this.props.onAddTodo(todoText);
      this.refs.todoText.value = '';
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"></input>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
