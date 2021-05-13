import React, {useState} from "react";
import {useAppActions} from '../hooks';
import {useSelector} from "react-redux"
import styled from 'styled-components'

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const FormControl = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:focus {
    border-color: #bcefee;
    outline: 0;
  }
`;

const ErrorText = styled.label`
  color: red;
  display: inline-block;
  font-size: .9rem;
  margin-top: 10px;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: .5rem;
`;

const SubmitButton = styled.button`
  background: #8be0de;
  border: none;
  border-radius: .25rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 10px;
  margin-top: 0.5rem;
  width: 100%;
  &:hover {
    background: #74b3b1;
  }
`;

const Form = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {loginUser} = useAppActions();

  const {error} = useSelector(state => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      name: username, 
      password: password
    }, props.history);
  }


  return(
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="username">Name:</Label>
        <FormControl 
          type="text" 
          className="form-control" 
          id="username"
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password:</Label>
        <FormControl
          type="password" 
          className="form-control" 
          id="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </FormGroup>
      <SubmitButton type="submit">Submit</SubmitButton>
      <ErrorText>{error}</ErrorText>
    </form>
  );
}


export default Form