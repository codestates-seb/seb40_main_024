import styled from 'styled-components';

const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 590px;
  height: auto;
  padding: 20px;
  border-radius: 10px;
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
  /* border: 1px solid #ff8000; */
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  padding: 5px;
  font-size: 15px;
  /* font-weight: bold; */
  color: #444;
  /* border: 1px solid #ff8000; */
`;
const LikeBox = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  line-height: normal;
  height: 30px;
  margin-right: 10px;
  /* border: 1px solid #ff8000; */
`;

export const FreeBoardList = () => {
  return (
    <>
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
              <LikeBox>♡</LikeBox>
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
              <LikeBox>♡</LikeBox>
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