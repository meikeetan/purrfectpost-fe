function PostBlueprint(props) {
    const { cat} = props;
  
    return (
      <div>
          <img src={cat.images[0]} alt={cat.name} />
        <h3>{cat.name}</h3>
        <p>${cat.caption}</p>
       
      </div>
    );
  }
  
  export default PostBlueprint;