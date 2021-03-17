import React, {useEffect} from 'react';
import * as blogAction from "../store/actions/blog";
import {useDispatch, useSelector} from "react-redux";
import renderHTML from 'react-render-html';
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogMathScreen = () => {

  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blog);
  const blogMath = useSelector(state => state.blogMath);
  console.log(blogMath)

  useEffect(() => {
    dispatch(blogAction.getBlogs())
  }, [dispatch])

  useEffect(() => {
    dispatch(blogAction.getBlogMath())
  }, [dispatch])

  const blogArray = blogs.blogs
  console.log(blogs.blogMath)

  return (
    <div className="container-math">
      <Header />
      {renderHTML(blogs.blogMath)}
    <Footer/>
    </div>
  );
};

export default BlogMathScreen;
