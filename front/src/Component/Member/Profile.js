import styled from 'styled-components';

const Image = styled.svg`
  box-sizing: border-box;
  height: 300px;
  width: 300px;
  background-image: url(https://source.unsplash.com/category/nature/1600x900);
  background-position: top center;
  background-size: cover;
  /* position: relative; */
  /* top: 18%;
  left: 23%; */
  /* transform: translate(-50%,-50%) */

  border: solid 3px #9ed5c5;
  border-radius: 100%;
`;

const Profile = () => {
  return <Image type="file" />;
};

export default Profile;
