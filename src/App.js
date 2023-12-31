import './App.css';
import { useState } from 'react';
import { days } from './days';
import BlogEntry from './components/BlogEntry';

//TODO- check build;
function App() {
  const [index, setIndex] = useState(days?.length - 1);
  const [slide, setNextSlide] = useState(days[index]);
  const nextBlogEntry = () => {
    if (index + 1 < days?.length) {
      setIndex(index + 1);
      setNextSlide(days[index + 1]);
    } else {
      setIndex(0);
      setNextSlide(days[0]);
    }
  };

  return (
    <>
      <BlogEntry
        title={slide?.title}
        image={slide?.image}
        blogText={slide?.blogText}
        blogVideo={slide?.blogVideo}
        nextBlogEntry={nextBlogEntry}
      />
    </>
  );
}

export default App;
