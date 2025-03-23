import { Header, Profile, ProfileImage, ProfileInfo } from '../styles/StyledComponents';

export const HeaderComponent = () => {
  return (
    <Header>
      <Profile>
        <ProfileImage src="src/assets/profile.jpg" alt="Profile" />
        <ProfileInfo>
          <h1>Martin Jeanne</h1>
          <p>Mon portfolio</p>
        </ProfileInfo>
      </Profile>
    </Header>
  );
}; 