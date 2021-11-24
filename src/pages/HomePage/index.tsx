import React, { useEffect, useState } from 'react';

import PostCard from '../../components/PostCard';
import { fetchPosts } from '../../apis/posts';

const HomePage = () => {
  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    const response = await fetchPosts();
    setPosts(response);
    setLoading(false);
  };

  const renderItems = () => {
    return posts.map((item: any) => {
      return <PostCard id={item.id} title={item.title} body={item.body} />;
    });
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="d-flex justify-content-center ">
      <div className="col-8">
        {loading ? <p>Loading</p> : posts && renderItems()}
      </div>
    </div>
  );
};

export default HomePage;
