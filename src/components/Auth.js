import React from "react";
import Form from "./Form";
import styled from 'styled-components'

const Inner = styled.div`
  background: white;
  border-radius: 5px;
  padding: 30px 15px;
  width: 350px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Auth = props => {
  return(
    <Wrapper>
      <Inner>
        <Form history={props.history}/>
      </Inner>
    </Wrapper>
  );
}

export default Auth