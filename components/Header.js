import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-image: url('https://cdn.pixabay.com/photo/2023/08/22/11/58/mountain-valley-8206244_640.jpg'); /* 배경 이미지 URL */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 400px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3em;
`;

const Subtitle = styled.p`
  font-size: 1.5em;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>카드라 뉴스</Title>
      <Subtitle>카드뉴스를 통해 최신 뉴스를 확인하세요.</Subtitle>
    </HeaderContainer>
  );
};

export default Header;
