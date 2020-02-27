import React from 'react';
import  {connect} from 'react-redux'

import { Col, Form,
  FormGroup, Label, Input,
  Button, FormText, FormFeedback,
} from 'reactstrap';

import {startSetUser} from '../actions/user'

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      'email': '',
      'password': '',
      validate: {
        emailState: '',
      },
    }
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
      if (emailRex.test(e.target.value)) {
        validate.emailState = 'has-success'
      } else {
        validate.emailState = 'has-danger'
      }
      this.setState({ validate })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e)=> {
    e.preventDefault();
   
    const loginData = {
        email: this.state.email,
        password: this.state.password
    }
    this.props.dispatch(startSetUser(loginData,this.props))
  }

  render() {
    const { email, password } = this.state;
    return (
        <>
        <h5 style={{textAlign:'center'}}>Login Here</h5>
        <Form className="form" onSubmit={ this.handleSubmit }>
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="someemail@email.com"
                value={ email }
                valid={ this.state.validate.emailState === 'has-success' }
                invalid={ this.state.validate.emailState === 'has-danger' }
                onChange={ (e) => {
                            this.validateEmail(e)
                            this.handleChange(e)
                          } }
              />
              <FormFeedback valid>
               Valid email! Good One!
              </FormFeedback>
              <FormFeedback>
                Uh oh! Looks like you have entered invalid email. Please input a correct email.
              </FormFeedback>
              <FormText>Your username is your email.</FormText>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                value={ password }
                onChange={ (e) => this.handleChange(e) }
            />
            </FormGroup>
          </Col>
          <Button>Login</Button>
      </Form>
      </>
    )
  }
}

export default connect()(LoginPage)
