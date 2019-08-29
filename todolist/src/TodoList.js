import React, { Component, Fragment } from 'react';
import './App.css';
import TodoItem from './TodoItem'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemClick(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  handleDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
        return (
          <TodoItem 
            handleDelete={this.handleDelete} 
            key={index} 
            content={item} 
            index={index}
          />
        )
      })
    )
  }

  // 父组件通过属性的形式向子组件传递参数
  // 子组件通过props接受父组件传递过来的参数
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button className='red-btn' style={{color: 'red'}} onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          {this.getTodoItems()}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;
