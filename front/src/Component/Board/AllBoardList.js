import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

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
  margin-bottom: 25px;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
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
  width: auto;
  margin-left: 10px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 3px solid #8ec3b0;
  /* border: 1px solid #ff8000; */
`;

const IdEtcBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 8px;
  /* border: 1px solid #ff8000; */
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
  font-size: 10px;
  height: 30px;
  align-items: center;
  line-height: normal;
  color: #444;
  font-size: 17px;
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

function AllBoardList({ id, title, body, createdAt, like, tag }) {
  const navigate = useNavigate();
  const data = moment(createdAt);
  const momentdata = data.format('YYYY-MM-DD hh:mm:ss');
  return (
    <>
      <ListBox onClick={() => navigate(`/boardcontentpage/${id}`)}>
        <ImageBox>
          <Image>IMG</Image>
        </ImageBox>
        <Container>
          <IdEtContainer>
            <IdEtcBox>
              <Tag>{tag}</Tag>
              <Id>{title}</Id>
            </IdEtcBox>
            <IdEtcBox>
              <Date>{momentdata}</Date>
              <LikeBox>
                ❤<Likenum>{like}</Likenum>
              </LikeBox>
            </IdEtcBox>
          </IdEtContainer>
          <TextEtcContainer>
            <Text>{body}</Text>
          </TextEtcContainer>
        </Container>
      </ListBox>
    </>
  );
}

export default AllBoardList;
