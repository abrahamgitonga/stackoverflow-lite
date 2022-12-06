import React from 'react';
import styled from 'styled-components'
import QuestionRow from './QuestionRow';
import {Link} from 'react-router-dom'
import MainHeader from '../header/MainHeader';
import ButtonLink from '../ask/AskButton';




const HeaderRow = styled.div`
    display:grid;
    grid-template-columns: 1fr min-content;
    padding: 30px 20px;

`;


function QuestionsPage() {
  return (
    <>
        <main>
            <HeaderRow>

                <MainHeader style={{margin:0}}>Top Rated Questions</MainHeader>
                <ButtonLink to={'/ask'} >Ask&nbsp;Question</ButtonLink>
            </HeaderRow>
            <QuestionRow/>
            <QuestionRow/>
            <QuestionRow/>
            <QuestionRow/>
            <QuestionRow/>
            <QuestionRow/>
            <QuestionRow/>
            <QuestionRow/>
            <QuestionRow/>
            <QuestionRow/>

    
        </main>
        
    
    </>

    
  )
}

export default QuestionsPage