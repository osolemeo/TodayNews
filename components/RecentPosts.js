import styled from 'styled-components';

const RecentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const RecentCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 30%;
  margin: 10px 0;
`;

const RecentPosts = ({ posts }) => {
  return (
    <RecentContainer>
      {posts.map((post) => (
        <RecentCard key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </RecentCard>
      ))}
    </RecentContainer>
  );
};

export default RecentPosts;
