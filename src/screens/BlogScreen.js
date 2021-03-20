import React, {useEffect} from 'react';
import Header from "../components/Header";
import CardJouet from "../components/CardJouet";
import * as blogAction from "../store/actions/blog";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './BlogScreen.css';
import {Card, Row, Col} from "react-bootstrap";
import Footer from "../components/Footer";


const BlogScreen = props => {

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

  const blogArray = blogs.blogs.slice(1)
  console.log(blogs)
  console.log(blogArray)

  if (blogArray.length===0) {
    return <h2>Pas de blogs dispo</h2>
  }

  if (blogArray.length !== 0) {
    return (
      <div>
        <Header />
        <div className="blogs-container">
          <div className="principal-blog-container">
            <div className="math-description">
              <h2 className="titre-math">{blogs.blogs[0].title}</h2>
              <p className="paragraph-math">Mathématiques et jeune enfant L’enfant se familiarise avec les mathématiques dès le plus jeune âge. Bien avant son entrée à l’école, il assimile des notions …</p>
              <Link className="read-more-button" to="/blog-math">Lire plus</Link>
            </div>
            <div className="math-image-container">
              <img src={blogs.blogs[0].featuredImage.node.sourceUrl} alt="" className="math-image"/>
            </div>
          </div>

          <div className="card-blog-container">
            <Row className="row-card">
              {blogArray.map(item => {
                return (
                  <Col sm={4} md={4} lg={4} xl={4} className="col-card">
                  <Card className="card-list-container">
                    <Card.Img variant="top" src={item.featuredImage.node.sourceUrl} className="math-image" />
                    <Card.Body className="card-body">
                      <Card.Title className="card-title">{item.title}</Card.Title>
                      <Card.Text className="card-text">
                        {item.excerpt}
                      </Card.Text>
                      <Link className="read-more-button" to="/blog-math">Lire plus</Link>
                    </Card.Body>
                  </Card>
                  </Col>

                  )
              })}
            </Row>
            </div>
        </div>
      <Footer/>
      </div>
    )
  }



};

export default BlogScreen;
