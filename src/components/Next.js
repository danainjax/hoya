const Next = (props) => {
  const { nextBlogEntry } = props;
  return (
    <i
      onClick={() => {
        console.log('click');
        nextBlogEntry();
      }}
      className='fa-solid fa-chevron-right'
    ></i>
  );
};

export default Next;
