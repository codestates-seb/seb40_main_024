import styled from 'styled-components';

const Image = styled.div`
  box-sizing: border-box;
  height: 300px;
  width: 300px;
  position: absolute;
  top: 18%;
  left: 23%;
  /* transform: translate(-50%,-50%) */
  padding: 130px;
  border: solid 1px black;
  border-radius: 100%;
`;

const Profile = () => {
  return <Image />;
};

export default Profile;
