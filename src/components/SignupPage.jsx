import React, {Component} from 'react'
import MainHeader from '../components/header/MainHeader'
import styled from 'styled-components'
import InputArea from './Input'
import PostButton from './PostButton'
import axios from 'axios'



const Container = styled.div`

  padding: 30px 20px; 

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