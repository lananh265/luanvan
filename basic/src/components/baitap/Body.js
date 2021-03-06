

import s from './header.module.css';
import styled, { createGlobalStyle, css } from 'styled-components';
import React, { useState } from 'react';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(to bottom, #1f4037, #99f2c8);
  height: 100%;
  margin: 0;
  color: #555;
}
`;
export const sharedStyles = css`
background-color: #eee;
height: 40px;
border-radius: 5px;
border: 1px solid #ddd;
margin: 10px 0 20px 0;
padding: 20px;
box-sizing: border-box;
`;

export const StyledFormWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: auto;
padding: 0 20px;
`;

//form
export const StyledForm = styled.form`
width: 100%;
max-width: 700px;
padding: 40px;
background-color: #fff;
border-radius: 10px;
box-sizing: border-box;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
display: block;
width: 100%;
${sharedStyles}
`;

export const StyledTextArea = styled.textarea`
background-color: #eee;
width: 100%;
min-height: 100px;
resize: none;
${sharedStyles}
`;
export const StyledButton = styled.button`
display: block;
background-color: #1D976C;
color: #fff;
font-size: 0.9rem;
border: 0;
border-radius: 5px;
height: 40px;

padding: 0 20px;
cursor: pointer;
box-sizing: border-box;
`;

export const StyledFieldset = styled.fieldset`
border: 1px solid #ddd;
border-radius: 5px;
padding: 10px;
margin: 20px 0;

legend {
  padding: 0 10px;
}

label {
  padding-right: 20px;
}

input {
  margin-right: 10px;
}
`;

export const StyledError = styled.div`
color: red;
font-weight: 800;
margin: 0 0 40px 0;
`;

const initalState = {
    username: '',
    password: ''
  };
export default function Body(){
    const [state, setState] = useState(initalState);
    const [error, setError] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      console.log('submitted!');
      console.log(state);
  
      for (let key in state) {
        if (state[key] === '') {
          setError(`You must provide the ${key}`)
          return
        }
      }
      setError('');
      console.log("Succeeded!!!")
  };
  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  };
    return(
        <div>
        
        <div className={s.body}>
           
        <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Nh???p Th??ng Tin</h2>
          <label htmlFor="username">Username</label>
          <StyledInput
            type="text"
            name="username"
            value={state.username}
            onChange={handleInput}
          />
          <label htmlFor="password">Password</label>
          <StyledInput
            type="password"
            name="password"
            value={state.password}
            onChange={handleInput}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type="submit">Send </StyledButton>
        </StyledForm>
      </StyledFormWrapper>
      </div>
        </div>
    )
}