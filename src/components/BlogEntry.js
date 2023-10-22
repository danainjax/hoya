import '../App.css';
import Next from './Next';
import ReactHtmlParser from 'react-html-parser';

const BlogEntry = (props) => {
  const { title, image, blogText, blogVideo, nextBlogEntry } = props;

  const htmlString = blogVideo;

  const parsedVideo = ReactHtmlParser(htmlString);

  return (
    <div>
      <div className='App'>
        <h1 className='App-title'>Hoya</h1>
      </div>
      <div className='App-header'>
        <h4>{title}</h4>
        <img
          className='App-image'
          onClick={nextBlogEntry}
          src={image}
          alt={`Hoya ${title}`}
        />
        <div className='App-blog-content'>
          <p>{blogText}</p>
          {parsedVideo ? parsedVideo : null}
        </div>
        <Next nextBlogEntry={nextBlogEntry} />
      </div>
    </div>
  );
};

export default BlogEntry;
