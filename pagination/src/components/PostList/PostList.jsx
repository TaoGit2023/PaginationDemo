const PostList = ({posts}) => {
  console.log(posts)
  return (
    <div>
      <ul>
        {posts.map((post)=>{
            return(
                <li key={post.id}>{post.title}</li>
            )
        })}
      </ul>
    </div>
  );
};
export default PostList;
