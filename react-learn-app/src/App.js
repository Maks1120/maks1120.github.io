import React, { useEffect, useMemo, useRef, useState } from 'react';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import axios from "axios";
import PostServise from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import { getPageArray, getPagesCount } from './utils/pajes';


function App(){ 

  const [posts, setPosts] = useState([]) 
  const [filter, setFilter] = useState( {sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  
  let pagesArray = getPageArray(totalPages);

  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
    const response = await PostServise.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useEffect( () => {
    fetchPosts();
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const changePage = () => {
    setPage(page);
  }

  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POSTS</button>
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Create user
      </MyButton>
      <MyModal visibile={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError && <h1>Error!!! ${postError}</h1>}
      {isPostsLoading 
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchPosts} title="List posts for JavaScript"/>
      }
      <div className='page__wrapper'> 
        {pagesArray.map(p => 
          <span
            onClick={() => changePage(p)} 
            key={p} 
            className={page === p ? 'page page__current' : 'page'}
          >
            {p}
          </span>
        )}
      </div> 
    
    </div>
  );
}

export default App;
