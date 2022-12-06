import React, { useContext } from 'react'
import styled from 'styled-components'
import UserContext from '../context/UserContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStackOverflow} from '@fortawesome/fontawesome-free-brands'

import {Link} from 'react-router-dom'

const StyledHeader = styled.header`
    //background-color: #393939;
    background-color: #967E76;
    box-shadow: 0 3px 3px rgba(0,0,0,.2);
    display:grid;
    grid-template-columns:220px 1fr 200px;
    grid-column-gap:20px;

`;

const LogoLink = styled(Link)`
    color:#fff;
    text-decoration: none;
    display: inline-block;
    height: 50px;

    line-height: 30px;
    padding: 0 15px;

    b{
        font-weight: bold;
        display:inline-block;
        margin:2px;
    }

    svg{
        margin-top:7px;
        display: inline-block;
        float:left;



    }
    span{
        display: inline-block;
        padding-left: 5px;
        padding-top:10px;
        font-size:1.2rem
        font-weight:300

    }

`;

const SearchInput = styled.input`
    display:inline-block;
    box-sizing:border-box;
    width:50%;
    border-radius: 3px;
    border:1px solid #777;
    background: rgba(255,255,255,.5);
    padding:8px 10px;
    margin-top: 9px;
    color: #000;
    // box-shadow: 0 1px 1px 1px #378ad3;
`;

const ProfileLink = styled(Link)`
    color:#fff;
    padding: 0 20px;
    text-decoration:none;
    line-height:50px;
    text-align: right;

`;

function Header() {

    const {user} = useContext(UserContext);
  return (
    <>
        <StyledHeader>
            <LogoLink to={'/'}  className="logo">
            <FontAwesomeIcon icon={faStackOverflow} size='2x' />
            <span> Stack<b>QA-Lite</b></span>
            
            </LogoLink>
            <form action="" className="search">
                <SearchInput type="text" value="" placeholder='search..' />
            </form>
            {user && (
                <ProfileLink to={'/profile'} className="profile">John doe</ProfileLink>

            )}
            {!user && ( 
                <div>
                    <ProfileLink to={'/login'} className="profile">Log in</ProfileLink>
                    <ProfileLink to={'/signup'} className="profile">Sign up</ProfileLink>
                </div>
                

            )}
            

        </StyledHeader>

    </>

    
  )
}

export default Header