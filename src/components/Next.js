const Next = (props) => {
  const { nextBlogEntry } = props;
  return (
    <i
      onClick={() => {
        nextBlogEntry();
      }}
      className='fa-solid fa-chevron-right'
    ></i>
  );
};

export default Next;
