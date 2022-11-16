import styled from 'styled-components';

const Image = styled.input`
  box-sizing: border-box;
  height: 300px;
  width: 300px;
  /* position: relative; */
  /* top: 18%;
  left: 23%; */
  /* transform: translate(-50%,-50%) */

  border: solid 1px black;
  border-radius: 100%;
`;

const Profile = () => {
  return <Image type="file" />;
};

export default Profile;
