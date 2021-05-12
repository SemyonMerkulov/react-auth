const PostItem = props => {
  return(
    <div>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
}

export default PostItem