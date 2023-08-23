import React from 'react';
import blockchain1 from '../assets/blockchain1.jpg';
import blockchain2 from '../assets/blockchain2.jpg';
import blockchain3 from '../assets/blockchain3.jpg';
import BlogCard from './BlogCard';

const BlogSection = () => {
  const blogs = [
    {
      title: 'How to Buy ThorChain',
      description:
        'Lorem Ipsum dolor ipsum sit amet, consectutor adipiscing elit, sed du kjasjcj ascasca asxaccsacc asjsjsjsj jajlcac',
      imgUrl: blockchain1,
    },
    {
      title: 'How to Buy ThorChain',
      description:
        'Lorem Ipsum dolor ipsum sit amet, consectutor adipiscing elit, sed du kjasjcj ascasca asxaccsacc asjsjsjsj jajlcac',
      imgUrl: blockchain2,
    },
    {
      title: 'How to Buy ThorChain',
      description:
        'Lorem Ipsum dolor ipsum sit amet, consectutor adipiscing elit, sed du kjasjcj ascasca asxaccsacc asjsjsjsj jajlcac',
      imgUrl: blockchain3,
    },
  ];
  return (
    <div className="blog-section-container">
      <div className="blog-section-header">
        <h1>
          Learn More about <span className="highlighted">Us</span>
        </h1>
        <button className="secondary">View More</button>
      </div>
      <div className="blogs-container">
        {blogs.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              imgUrl={blog.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogSection;
