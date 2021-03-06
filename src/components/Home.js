import React, {useEffect} from "react";
import {useSelector} from "react-redux"
import {useAppActions} from '../hooks';
import Header from "./Header";
import PostItem from "./PostItem";
import styled from 'styled-components';
import history from '../history';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

const Home = () => {
  const {posts} = useSelector(state => state.post);
  const {fetchPosts} = useAppActions();


  useEffect(() => {
    if (!localStorage.getItem("user")) {
      history.push('/auth');
    }
    fetchPosts();
  }, []);

  return(
    <div>
      <Header/>
      <Container>
       {posts.map((item, index) => {
        return(
          <PostItem
            key={index}
            title={item.title}
            body={item.body}
          />  
        );
      })}
      </Container>
    </div>
  );
}

export default Home