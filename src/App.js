import './App.css';
import Next from './Next';

function App() {
  const nextBlogEntry = () => {
    console.log('NEXT');
  };

  return (
    <>
      <div className='App'>
        <h1 className='App-title'>Hoya</h1>
      </div>
      <div className='App-header'>
        <h4> Day 1</h4>
        <img className='App-image' src='hoya_1.jpeg' alt='Hoya Day 1' />
        <div className='App-blog-content'>
          <p>
            Today, 10/18/2023 I received my Hoya plant. I am told it takes 1-2
            years to flower, and can be tricky to coax into blooming. I look
            forward to seeing and smelling the blossoms, in time. The plan is to
            upload a photo per day to track the growth of this plant.{' '}
          </p>
        </div>

        <Next nextBlogEntry={nextBlogEntry} />
      </div>
    </>
  );
}

export default App;
