import React, {useEffect} from "react";

const Home = (props) => {
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      props.history.push('/auth');
    }
  }, []);

  return(
    <div>
      home
    </div>
  );
}

export default Home