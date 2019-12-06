import React from 'react';

import './contact-us.styles.scss';

class ContactPage extends React.Component {
    constructor() {
        super();

        this.state = {
           name: '',
           email: '',
           message: ''
        }
    }

    handleSubmit = event => {
       event.preventDefault();

       this.setState({ name:'', email: '', message: '' })
    }

    render() {
      return(
        <div className = 'contact-us' > 
          <h1> Contact us </h1>
           <h3> send us your complaint and feel free to ask any doubts  </h3>

           
           <div className = 'form' >

           <form onSubmit = {this.handleSubmit} >

           <label>Name</label>
           <input className = 'input-field'
           name='name' 
           type = 'text' 
           value = {this.state.name}
           required
           />
           
           <label>Email</label>
           <input className = 'input-field'
           name='email' 
           type = 'email' 
           value = {this.state.email}
           required
           />
           
           <label>Message</label>
           <input className = 'input-field1'
           name='message' 
           type = 'text' 
           
           value = {this.state.message}
           required
           />
           <input className = 'button' type = 'submit' value = 'Submit Form' /> 

           </form>

           </div>
           

            
        </div>
      );
    }
}

export default ContactPage;