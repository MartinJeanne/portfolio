import { Header, Profile, ProfileImage, ProfileInfo } from '../styles/StyledComponents';

export const HeaderComponent = () => {
  return (
    <Header>
      <Profile>
        <ProfileImage src="profile.jpg" alt="Profile" />
        <ProfileInfo>
          <h1>Martin Jeanne</h1>
          <p>Portfolio</p>
        </ProfileInfo>
      </Profile>
    </Header>
  );
}; 