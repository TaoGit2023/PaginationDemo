import './App.css';
import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';
import PagesNumber from './components/PagesNumber/PagesNumber';
import { useEffect, useState } from 'react';

function App() {
     const [posts, setPosts] = useState([]);
     const [currentPage,setCurrentPage] = useState(1);
    
     useEffect(() => {
       const fetchData = async () => {
         try {
           const url = "http://jsonplaceholder.typicode.com/posts";
           const posts = await fetch(url);
           const postsJson = await posts.json();
           console.log(postsJson);
           setPosts(postsJson);
         } catch (error) {}
       };
       fetchData();
     }, []);
        const handlePageClick = (number) => {
          console.log(number);
          setCurrentPage(number);
        };
      const numberOfPostsPerPage = 10;
     const numberOfPages = Math.ceil(posts.length/numberOfPostsPerPage);
     const lastPostIndex = numberOfPostsPerPage*currentPage;
     console.log(lastPostIndex)
     const startPostIndex = lastPostIndex-numberOfPostsPerPage;
     console.log(startPostIndex);
     const currentPagePosts = posts.slice(startPostIndex,lastPostIndex);
  
  return (
    <div className="App">
      <Header className="Header" />
      <PostList posts={currentPagePosts} />
      <PagesNumber numberPages={numberOfPages} pageNumberClicked={handlePageClick}/>
    </div>
  );
}

export default App;
