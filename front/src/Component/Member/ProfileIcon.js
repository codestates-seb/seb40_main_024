import styled from 'styled-components';

const Icon = styled.div`
  box-sizing: border-box;
  height: 70px;
  width: 70px;
  /* position: absolute;
  top: 7%;
  left: 30%; */
  /* transform: translate(-50%,-50%) */
  /* padding: 130px; */
  border: solid 1px black;
  border-radius: 100%;
`;

const ProfileIcon = () => {
  return <Icon />;
};

export default ProfileIcon;
