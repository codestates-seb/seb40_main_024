import styled from 'styled-components';

const Icon = styled.svg`
  box-sizing: border-box;
  height: 70px;
  width: 70px;
  background-image: url(https://source.unsplash.com/category/nature/1600x900);
  background-position: top center;
  background-size: cover;
  /* position: absolute;
  top: 7%;
  left: 30%; */
  /* transform: translate(-50%,-50%) */
  /* padding: 130px; */
  /* border: solid 3px #9ed5c5; */
  border-radius: 100%;
`;

const ProfileIcon = () => {
  return <Icon />;
};

export default ProfileIcon;
