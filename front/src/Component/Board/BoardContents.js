import styled from 'styled-components';
import { ModifyContentBtn, DeleteContentBtn } from '../Common/Button';
import ProfileIcon from '../Member/ProfileIcon';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

const TotalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 850px;
  min-height: 800px;
  margin-top: 100px;
  border: 3px solid #9ed5c5;
  border-radius: 10px;
`;
const BtnContain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 600px;
  width: auto;
  margin-bottom: 10px;
`;
const ContentContain = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 100%;
  padding: 5px;
  margin-top: 20px;
  border-top: 3px solid #def5e5;
  border-bottom: 3px solid #def5e5;
  line-height: normal;
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 20px;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 100%;
  margin: 10px;
  margin-left: 20px;
  margin-right: 20px;
  border-bottom: 2px solid #8ec3b0;
  /* border: 1px solid black; */
`;
const IdEtcBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  padding-bottom: 5px;
  border-bottom: 2px solid #8ec3b0;
`;
const Id = styled.div`
  display: flex;
  width: auto;
  height: 30px;
  margin-left: 5px;
  line-height: normal;
  align-content: center;
  justify-content: center;
`;
const EtcBox = styled.div`
  display: flex;
  width: auto;
  height: 30px;
`;
const Date = styled.div`
  display: flex;
  width: auto;
  height: 30px;
  margin-right: 20px;
  line-height: normal;
  align-content: center;
  justify-content: center;
`;
// eslint-disable-next-line no-unused-vars
const At = styled.div`
  display: flex;
  width: auto;
  height: 30px;
  margin-right: 10px;
  line-height: normal;
  align-content: center;
  justify-content: center;
`;
const LikeBox = styled.div`
  display: flex;
  width: auto;
  height: 30px;
  margin-right: 10px;
  line-height: normal;
  align-content: center;
  justify-content: center;
  color: red;
  -webkit-text-stroke: 1.5px black;
  cursor: pointer;
`;
const UnLikeBox = styled.div`
  display: flex;
  width: auto;
  height: 30px;
  margin-right: 10px;
  line-height: normal;
  align-content: center;
  justify-content: center;
  color: white;
  -webkit-text-stroke: 1.5px black;

  cursor: pointer;
`;
const TitleBox = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  max-height: 200px;
  margin-left: 5px;
  padding-top: 5px;
  border-bottom: 2px solid #8ec3b0;
  overflow: auto;
  font-size: 20px;
`;
const TextBox = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  margin-left: 5px;
  padding-top: 5px;
  overflow: auto;
`;

const Contents = ({ title, body, createdAt }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = moment(createdAt);
  const momentdata = data.format('YYYY-MM-DD hh:mm:ss');
  const URL =
    'http://ec2-43-201-26-98.ap-northeast-2.compute.amazonaws.com:8080';
  const Delete = async () => {
    try {
      const res = await axios.delete(`${URL}/board/${id}`);
      console.log(res);
      navigate('/freeboard');
    } catch (e) {
      console.log(e);
    }
  };
  // const Patch = async () => {
  //   try {
  //     const res = await axios.patch(`${URL}/board${id}`);
  //     console.log(res);
  //     navigate('/freeboard');
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <>
      <TotalContent>
        <BtnContain>
          <ModifyContentBtn />
          <DeleteContentBtn Delete={Delete} />
        </BtnContain>
        <ContentContain>
          <ImageBox>
            <ProfileIcon />
          </ImageBox>
          <ContentBox>
            <IdEtcBox>
              <Id>유저아이디가 들어가야하오...</Id>
              <EtcBox>
                <Date>{momentdata}</Date>
                <LikeBox>❤</LikeBox>
                <UnLikeBox>❤</UnLikeBox>
              </EtcBox>
            </IdEtcBox>
            <TitleBox>{title}</TitleBox>
            <TextBox>{body}</TextBox>
          </ContentBox>
        </ContentContain>
      </TotalContent>
    </>
  );
};

export default Contents;
