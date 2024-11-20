import styled from 'styled-components';

const FeaturedContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const PostCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 300px;
  overflow: hidden;
  position: relative;
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PostInfo = styled.div`
  padding: 15px;
`;

const FeaturedPosts = ({ posts }) => {
  return (
    <FeaturedContainer>
      {posts.map((post) => (
        <PostCard key={post.id}>
          <PostImage src={post.image} alt={post.title} />
          <PostInfo>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </PostInfo>
        </PostCard>
      ))}
    </FeaturedContainer>
  );
};

export default FeaturedPosts;
