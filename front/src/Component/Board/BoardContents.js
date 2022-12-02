import styled from 'styled-components';
import { ModifyContentBtn, DeleteContentBtn } from '../Common/Button';
import ProfileIcon from '../Member/ProfileIcon';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import { Modal } from '../Common/Modal';

const TotalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 850px;
  min-height: 400px;
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
  padding: 20px;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-height: 400px;
  width: 100%;
  margin: 10px;
  padding: 10px;
  /* border: 1px solid black; */
`;
const IdEtcBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  div {
    padding-bottom: 5px;
  }
`;
const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  min-width: 40px;
  margin-right: 10px;
  font-size: 12px;
  border: 3px solid #bcead5;
  border-radius: 10px;
  background-color: #def5e5;
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
  margin-left: auto;
`;
const Date = styled.div`
  display: flex;
  width: auto;
  height: 30px;
  line-height: normal;
  align-content: center;
  justify-content: center;
`;
const View = styled.div`
  display: flex;
  width: auto;
  height: 30px;
  line-height: normal;
  align-content: center;
  justify-content: center;
  margin: 0 10px 0 10px;
`;
const LikeBox = styled.div`
  display: flex;
  width: auto;
  height: 30px;
  margin-right: 3px;
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
  margin-left: 3px;
  line-height: normal;
  align-content: center;
  justify-content: center;
  color: white;
  -webkit-text-stroke: 1.5px black;
  cursor: pointer;
`;
const TitleBox = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  max-height: 200px;
  margin-left: 5px;
  margin-top: 20px;
  overflow: auto;
  font-size: 23px;
  font-weight: 600;
`;
const TextBox = styled.div`
  display: flex;
  height: auto;
  max-height: 630px;
  max-width: 600px;
  margin-left: 5px;
  padding-top: 5px;
  overflow: auto;
  margin-top: 15px;
`;

const Contents = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLoggedIn;

  const [Modalopen, setModalopen] = useState(false);

  const { id } = useParams();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [createdAt, setcreatedAt] = useState();
  const [name, setName] = useState();
  const [boardId, setBoardId] = useState();
  const [like, setLike] = useState();
  const [view, setView] = useState();
  const [category, setCategory] = useState();
  const date = moment(createdAt);
  const momentdata = date.format('YYYY-MM-DD hh:mm:ss');

  const URL = process.env.REACT_APP_API_URL;

  const openModal = () => {
    setModalopen(true);
  };

  const closeModal = () => {
    setModalopen(false);
    navigate('/login');
  };

  const Delete = async () => {
    try {
      await axios.delete(`${URL}/board/${id}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      navigate('/board');
    } catch (e) {
      console.log(e);
    }
  };

  const Patchlike = async () => {
    try {
      const res = await axios.patch(`${URL}/board/${id}/like`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      setLike(res.data.like);
    } catch (e) {
      console.log(e);
    }
  };

  const Patchdislike = async () => {
    try {
      const res = await axios.patch(`${URL}/board/${id}/dislike`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      setLike(res.data.like);
    } catch (e) {
      console.log(e);
    }
  };

  const ModifyButton = () => {
    if (isLogin) {
      navigate(`/modifyboard/${boardId}`);
    } else {
      openModal();
    }
  };

  const DeleteButton = () => {
    if (isLogin) {
      Delete();
    } else {
      openModal();
    }
  };

  useEffect(() => {
    const Get = async () => {
      try {
        const res = await axios.get(`${URL}/board/${id}`);
        setBoardId(res.data.boardId);
        setTitle(res.data.title);
        setBody(res.data.body);
        setcreatedAt(res.data.createdAt);
        setCategory(res.data.category);
        setLike(res.data.like);
        setName(res.data.memberPosted.name);
        setView(res.data.view);
      } catch (e) {
        console.log(e);
      }
    };
    Get();
  }, []);

  return (
    <>
      <TotalContent>
        <BtnContain>
          <ModifyContentBtn ModifyButton={ModifyButton} />
          <DeleteContentBtn DeleteButton={DeleteButton} />
        </BtnContain>
        <ContentContain>
          <ImageBox>
            <ProfileIcon />
          </ImageBox>
          <ContentBox>
            <IdEtcBox>
              <div>
                <Tag>{category}</Tag>
              </div>
              <Id>{name}</Id>
              <EtcBox>
                <Date>{momentdata}</Date>
                <View>View : {view}</View>
                <LikeBox onClick={Patchlike}>❤</LikeBox>
                {like}
                <UnLikeBox onClick={Patchdislike}>❤</UnLikeBox>
              </EtcBox>
            </IdEtcBox>
            <TitleBox>{title}</TitleBox>
            <TextBox>{body}</TextBox>
          </ContentBox>
        </ContentContain>
        <Modal open={Modalopen} close={closeModal} header="오류 알림">
          로그인이 필요한 항목입니다.
        </Modal>
      </TotalContent>
    </>
  );
};

export default Contents;
