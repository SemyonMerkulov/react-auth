import React, {useEffect} from "react";
import {useSelector} from "react-redux"
import {useAppActions} from '../hooks';
import PostItem from "./PostItem";

const Home = (props) => {
  const {posts} = useSelector(state => state.post);
  const {fetchPosts} = useAppActions();


  useEffect(() => {
    if (!localStorage.getItem("user")) {
      props.history.push('/auth');
    }
    fetchPosts();
  }, []);

  return(
    <div>
       {posts.map((item, index) => {
        return(
          <PostItem
            key={index}
            title={item.title}
            body={item.body}
          />  
        );
      })}
    </div>
  );
}

export default Home