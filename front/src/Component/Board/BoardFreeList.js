import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';

const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 590px;
  height: 156px;
  padding: 20px;
  border-top: 3px solid #def5e5;
  border-bottom: 3px solid #def5e5;
  margin-top: 20px;
  margin-bottom: -17px;
  cursor: pointer;
`;

const ImageBox = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-content: center;
  line-height: normal;
`;

const Image = styled.svg`
  display: flex;
  background-image: url(https://source.unsplash.com/category/nature/1600x900);
  background-position: top center;
  background-size: cover;
  width: auto;
  height: auto;
  border-radius: 50%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 110px;
  margin-left: 10px;
  /* border: 1px solid #0000ff; */
`;

const IdEtContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 35px;
  width: auto;
  margin-left: 10px;
  margin-bottom: 8px;
  padding-bottom: 10px;
  border-bottom: 3px solid #8ec3b0;
  /* border: 1px solid #ff8000; */
`;

const IdEtcBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  margin-left: 8px;
  /* border: 1px solid #ff8000; */
`;

const Id = styled.div`
  display: flex;
  font-size: 10px;
  height: 30px;
  align-items: center;
  line-height: normal;
  color: #444;
  font-size: 17px;
`;

const At = styled.div`
  display: flex;
  font-size: 10px;
  height: 30px;
  align-items: center;
  line-height: normal;
  margin-left: 10px;
  margin-right: 10px;
  color: #444;
  font-size: 13px;
  /* border: 1px solid #ff8000; */
`;

const Date = styled.div`
  display: flex;
  font-size: 10px;
  height: 30px;
  align-items: center;
  line-height: normal;
  margin-left: 10px;
  margin-right: 10px;
  color: #444;
  font-size: 13px;
  /* border: 1px solid #ff8000; */
`;

const TextEtcContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  height: 100%;
  margin-left: 10px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  padding: 5px;
  font-size: 15px;
  color: #444;
`;
const LikeBox = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  line-height: normal;
  color: red;
  height: 30px;
  margin-right: 10px;
`;

const Likenum = styled.div`
  display: flex;
  font-size: 10px;
  height: 30px;
  align-items: center;
  line-height: normal;
  margin-left: 2px;
  margin-right: 10px;
  color: #444;
  font-size: 13px;
  /* border: 1px solid #ff8000; */
`;

export const FreeBoardList = () => {
  const navigate = useNavigate();
  //? POST
  // const data1 = {
  //   // eslint-disable-next-line prettier/prettier
  //   title: "dsf2222",
  //   // eslint-disable-next-line prettier/prettier
  //   body: "asdfasdfasf222dfd222",
  // };
  // // eslint-disable-next-line no-unused-vars
  // async function postApi() {
  //   await axios
  //     .post('/board', data1)
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }
  //?

  //? PATCH
  // eslint-disable-next-line no-unused-vars
  // const data2 = {
  //   // eslint-disable-next-line prettier/prettier
  //   title: "dsf222233",
  //   // eslint-disable-next-line prettier/prettier
  //   body: "asdfasdfasf222dfd222544",
  // };
  // // eslint-disable-next-line no-unused-vars
  // async function patchApi() {
  //   await axios
  //     .patch('board/2', data2)
  //     .then((res) => console.log('res', res))
  //     .catch((err) => console.log(err));
  // }
  //?

  //? GET
  // eslint-disable-next-line no-unused-vars
  async function getApi() {
    await axios
      .get('board/1')
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  //?

  //? DELET
  // eslint-disable-next-line no-unused-vars
  // async function deletApi() {
  //   await axios
  //     .delete('board/37')
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }
  //?

  return (
    <>
      {/* {postApi()} */}
      {/* {patchApi()} */}
      {/* {getApi()} */}
      {/* {deletApi()} */}
      <ListBox onClick={() => navigate('/boardcontentpage')}>
        <ImageBox>
          <Image>IMG</Image>
        </ImageBox>
        <Container>
          <IdEtContainer>
            <IdEtcBox>
              <Id>여기에는 ID입력</Id>
            </IdEtcBox>
            <IdEtcBox>
              <Date>2022-11-01</Date>
              <At>22:12:12</At>
              <LikeBox>
                ❤<Likenum>267</Likenum>
              </LikeBox>
            </IdEtcBox>
          </IdEtContainer>
          <TextEtcContainer>
            <Text>인생떡밥이야기</Text>
          </TextEtcContainer>
        </Container>
      </ListBox>
      <ListBox>
        <ImageBox>
          <Image>IMG</Image>
        </ImageBox>
        <Container>
          <IdEtContainer>
            <IdEtcBox>
              <Id>여기에는 ID입력</Id>
            </IdEtcBox>
            <IdEtcBox>
              <Date>2022-11-01</Date>
              <At>22:12:12</At>
              <LikeBox>
                ❤<Likenum>267</Likenum>
              </LikeBox>
            </IdEtcBox>
          </IdEtContainer>
          <TextEtcContainer>
            <Text>인생떡밥이야기</Text>
          </TextEtcContainer>
        </Container>
      </ListBox>
    </>
  );
};
