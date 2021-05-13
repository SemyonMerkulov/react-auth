import styled from 'styled-components'

const Block = styled.div`
  background: white;
  border-radius: 5px;
  margin: 15px 0;
  padding: 20px 10px;
`;

const Title = styled.h3`
  text-transform: capitalize;
  margin: 0 0 1em;
`;

const Text = styled.p`
  margin: 0 0 1em;
`;

const PostItem = props => {
  return(
    <Block>
      <Title>{props.title}</Title>
      <Text>{props.body}</Text>
    </Block>
  );
}

export default PostItem