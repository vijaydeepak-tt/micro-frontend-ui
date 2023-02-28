import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { arrBlogs } from '../Constants';

function BlogDetail(props) {
  const [blogDetail, setBlogDetail] = useState({});
  const { blogid } = useParams();

  useEffect(() => {
    const index = arrBlogs.findIndex(
      (blog) => blog.blogID === parseInt(blogid, 10)
    );
    if (index !== -1) {
      setBlogDetail(arrBlogs[index]);
    }
  }, [blogid]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card">
          {Object.keys(blogDetail).length > 0 && (
            <>
              <p>{`#${blogDetail.blogID}`}</p>
              <p>{blogDetail.blogName}</p>
              <p>{blogDetail.blogDetail}</p>
              <p>{blogDetail.blogURL}</p>
            </>
          )}
          {Object.keys(blogDetail).length === 0 && (
            <p>We're sorry, Cound't find Blog</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
