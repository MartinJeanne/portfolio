import styled from '@emotion/styled';
import pp from '@assets/pp.png';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ProfileImage = styled.img`
  width: 130px;
  height: 130px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  object-position: 50% 30%;
`;

export const ProfileInfo = styled.div`
  h1 {
    margin: 0;
    font-size: 2.5em;
  }
  p {
    margin: 5px 0;
    color: #666;
    font-size: 1.5em;
  }
`;

export const HeaderComponent = () => {
  return (
    <Header>
      <Profile>
        <ProfileImage src={pp} alt="Profile picture" />
        <ProfileInfo>
          <h1>Martin Jeanne</h1>
          <p>Portfolio</p>
        </ProfileInfo>
      </Profile>
    </Header>
  );
}; 