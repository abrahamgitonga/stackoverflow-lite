import React ,{Component} from 'react'
import MainHeader from '../components/header/MainHeader'

import styled from 'styled-components'
import InputArea from './Input'
import PostButton from './PostButton'
import axios from 'axios'



const Container = styled.div`
  padding: 30px 20px;


`;

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state ={
      email:'',
      password:'',
    }
  }
  login(){
    axios.post('http://localhost:8080/login',{
      email: this.state.email,
      password: this.state.password
       
    });
  }
  render(){
    return(
    <>
      <Container>
        <MainHeader style={{marginBottom:'20px'}}>Login</MainHeader>
        <InputArea placeholder='email' type='email' value={this.state.email}
                   onChange={e =>this.setState({email:e.target.value})} />
        <InputArea placeholder='password' type='password' value={this.state.password} 
                   onChange={e =>this.setState({password:e.target.value})} />
        <PostButton onClick={() =>this.login()} >Login</PostButton>
         <a href="/signup" style={{padding: '10px'}}>Dont have an account?</a> 
      </Container>
    </>
  );
  }
};


export default LoginPage;