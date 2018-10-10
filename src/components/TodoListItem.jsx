import React, { Component } from 'react';

 /// SFC input

 const InputField = (props) => {
     return ( <input 
        className={props.cssEditInput}
        type="text" 
        value={props.value} 
        onChange={props.onChange}
        />  );
 }

class TodoListItem extends Component {
    state = { 
        inputVal: this.props.value,
        cssEditInput: 'form-control displayNone',
        cssEditHiddenOptions: 'col-xs-12 list-item-options displayNone'
     }

     handleChange = (e) => {
        this.setState({inputVal: e.target.value})
    }

     handleItemEdit = (e) => {
        this.setState({cssEditInput: 'form-control displayBlock', cssEditHiddenOptions: 'col-xs-12 list-item-options displayBlock'})
      }

    render() { 
        return ( 
            <div className="list-item col-xs-12">

                <div className="list-item-title row">
                    <div className="col-xs-12 col-lg-10">
                        <h4 className="title">{this.props.value}</h4>
                    </div>
                    <div className="col-xs-12 col-lg-2">
                        <button className="btn btn-info float-right" onClick={this.handleItemEdit}>Edit</button>
                    </div>
                </div>

                <div className={this.state.cssEditHiddenOptions}>
                    <div className="col-xs-12">
                        <InputField value={this.state.inputVal} cssEditInput={this.state.cssEditInput} onChange={this.handleChange} />
                    </div>
                    <div className="col-xs-12 edit-options-buttons">
                        <button className="btn btn-info" onClick={ () => {this.props.onClickSave(this.state.inputVal)}}>Save</button>
                        <button className="btn btn-danger m-2" onClick={this.props.onItemDeleteClick}>Delete</button>
                    </div>
                </div>
        </div>
         );
    }
}
 
export default TodoListItem;