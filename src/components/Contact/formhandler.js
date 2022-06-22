import './index.scss';
import React from 'react';

/*In React, mutable state is typically kept in the state property of components, and only updated with setState().
*/


class NameForm extends React.Component{
    //
    constructor (props){
        //call constructor of its parent class, uh makes it available across the component if u do like this.props
        super(props);
        this.state = { //!!!! states => variables in a sense, that have info/data by themselves, not like actual "states" if that makes sense
            name: '',
            email: '',
            message: '',};

        //bind is to pass data as an argument to a class based comp
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }


    handleChangeName(event){
        //setState: setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering.
        this.setState({name: event.target.value});

    }

    handleChangeEmail(event){
        //setState: setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering.
        this.setState({email: event.target.value});

    }

    handleChangeMessage(event){
        //setState: setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering.
        this.setState({message: event.target.value});

    }

    handleSubmit(event){
        //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
        alert('Thanks! ' + this.state.name + ' I will try my best to get back to you as soon as possible :) ');
        event.preventDefault();
    }

    //onChange, onClick, onXXXX basically on that isntance happening => something else will happen 
    render(){
        return (
            <div className = "form-overall">

            <div className= "form-specs">
            <form onSubmit={this.handleSubmit}>
                <label>
                 Name:
                <input type = "text" name = {this.state.name} onChange = {this.handleChangeName}/>
                </label>
                <input type = "submit" name = "Submit"/>
                </form>
            </div>

            <div className ="form-specs-email">
                <label>
                 E-mail:
                <input type = "text" email= {this.state.email} onChange = {this.handleChangeEmail}/>
                </label>
            </div>

            <div className ="form-specs-message">
                <label>
                 Message:
                <input type = "text" message = {this.state.message} onChange = {this.handleChangeMessage}/>
                </label>
            </div>
            
           </div>       

        );
    }


}

export default NameForm;