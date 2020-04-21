import React from "react";
import PropTypes from "prop-types";
import BlogPostTemplate from "../../templates/blog-post";

const BlogPostPreview = props => {
  const { entry, widgetFor } = props;
  console.log(props);

  const tags = entry.getIn(["data", "tags"]);

  const post = {
    frontmatter: {
      title: entry.getIn(["data", "title"]),
      description: entry.getIn(["data", "description"]),
      date: entry.getIn(["data", "date"]),
      tags: tags && tags.toJS(),
      thumbnail: entry.getIn(["data", "featuredimage"]),
      html: widgetFor("body")
    }
  };

  return <BlogPostTemplate post={post} />;
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
