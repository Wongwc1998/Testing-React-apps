import { useState, useRef } from 'react'
import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
  const blogFormRef = useRef()
  const [visible, setVisible] = useState(false)
  const blogStyleVisible = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
    display: visible ? '' : 'none'
  }
  const blogStyleInvisible = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
    display: visible ? 'none' : ''
  }
  const toggleVisibility = () => {
    setVisible(!visible)
  }
  return (
    <div className="blog-container">
      <div style={blogStyleInvisible}>
          {blog.title} by {blog.author}  {''}
        <button onClick={toggleVisibility}>view</button>
      </div>
      <div style={blogStyleVisible}>
          {blog.title} by {blog.author}  {''}
        <button onClick={toggleVisibility}>Hide</button>
        <div className="blog-details">

        <p className="blog-url">
          Blog url: <a href='{blog.url}'>{blog.url}</a>
        </p>
        <p className="blog-likes">
          Likes: {blog.likes}
        </p>
        <p>
          User: {blog.id}
        </p>
        </div>
      </div>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    url: PropTypes.string.isRequired,
    likes: PropTypes.number,
    id: PropTypes.string, // The Mongoose model transforms _id to a string id
  }).isRequired,
}

export default Blog