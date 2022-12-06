import React from 'react'
import styled from 'styled-components'
import MainHeader from '../header/MainHeader'
import PostButton from '../PostButton'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useState } from 'react'
import InputArea from '../Input'



const Container = styled.div`
  padding: 30px 20px;


`

const QuestionTextArea = styled.textarea`
  background: none;
  border: 1px solid #777;
  border-radius: 4px;
  display:block;
  width:50%;
  box-sizing: border-box;
  padding:10px;
  min-height: 200px;
  margin-bottom: 20px;
  color: #000;
  font-family: inherit;


`
const PreviewArea = styled.div`
  padding: 10px 5px;
  background-color: #EAE3D2;
  margin-bottom: 20px;
  border-radius: 5px;  
  width: 50%;


`




export default function AskPage() {

  const[questionInput, setQuestionInput] = useState('');
  const[questionText, setQuestionText] = useState('');


  return (
    <>
      
        <Container>
          <MainHeader style={{marginBottom:'20px'}}>Ask a public question</MainHeader>
          <InputArea value={questionInput} 
                             onChange={e=> setQuestionInput(e.target.value)} type="text" placeholder='type your question..' />
          <QuestionTextArea onChange={e=> setQuestionText(e.target.value)} name="" id="" cols="30" rows="10" 
                            placeholder='type more info on your asked question...'>{questionText}</QuestionTextArea>
          <PreviewArea>
          <ReactMarkdown rehypePlugins={[rehypeRaw]} children={questionText} />
          </PreviewArea>
          <PostButton>Post Question</PostButton>
          
        </Container>
    
    
    
    </>
  )
}
