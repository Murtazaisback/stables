import React from "react";
import { demoimg1 } from "../../Assets";
import { FaArrowRight } from "react-icons/fa6";

const Blog = ({ title = "", img_blog = "" }) => {
  return (
    <>
    <a href="">
    <div className="Blog">
      <div className="_blog_img_warp">
        <img src={img_blog} alt="" className="blog_img" />
        <div className="hover_blog_img"></div>
      </div>
      <div className="blog_contnet">
        <div className="blog_date">August 30, 2023</div> <span>.</span>
        <div className="blog_comment"> Comment (0)</div>
      </div>
      <p className="blog_heading">{title}</p>
      <p className="read_more">
        Read More
        <FaArrowRight size={13} />
      </p>
    </div>
    </a>
    </>
  );
};

export default Blog;
