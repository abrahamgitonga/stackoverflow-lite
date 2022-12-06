import React, {Component} from 'react'
import MainHeader from '../components/header/MainHeader'
import styled from 'styled-components'
import InputArea from './Input'
import PostButton from './PostButton'
import axios from 'axios'



const Container = styled.div`

  padding: 25px; 
  //border: 1px solid red;
  max-width: 400px;
  min-height: 400px;
  box-sizing: border-box;
  box-shadow: 4px 2px 16px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin:  20px auto 0 auto;
  
  
`;

class SignupPage extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }
  signup(){
    axios.post('http://localhost:8080/signup',{
      email: this.state.email,
      password: this.state.password
    })
  }
  render(){
    return (
      <>
        <Container>
          <MainHeader style={{marginBottom:'20px'}}>Sign Up</MainHeader>
          <InputArea placeholder='email' type={'email'} value={this.state.email} 
                     onChange={e => this.setState({email:e.target.value})} />

          <InputArea placeholder='password' type={'password'} value={this.state.password} 
                     onChange={e => this.setState({password:e.target.value})} />   
          <PostButton onClick={() =>this.signup()} >SignUp</PostButton>                 
        </Container>    
      </>   
  
    )

  }
  
}

export default SignupPage;