import styled from 'styled-components';

const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  margin-left: 20px;
  border: 1px solid #00ff00;
`;

const ImageBox = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-content: center;
  /* border: 1px solid #ff8000; */
`;

const Image = styled.svg`
  display: flex;
  width: auto;
  height: auto;
  border-radius: 50%;
  border: 1px solid #ff8000;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 100%;
  /* border: 1px solid #0000ff; */
`;

const IdEtContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
  width: auto;
  margin-left: 10px;
  /* border: 1px solid #ff8000; */
`;

const IdEtcBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  margin-left: 10px;
  /* border: 1px solid #ff8000; */
`;

const Id = styled.div`
  display: flex;
  font-size: 15px;
  height: 30px;
  align-items: center;
  line-height: normal;
  /* border: 1px solid #ff8000; */
`;

const At = styled.div`
  display: flex;
  font-size: 15px;
  height: 30px;
  align-items: center;
  line-height: normal;
  margin-left: 10px;
  margin-right: 10px;
  /* border: 1px solid #ff8000; */
`;

const Date = styled.div`
  display: flex;
  font-size: 15px;
  height: 30px;
  align-items: center;
  line-height: normal;
  margin-left: 10px;
  margin-right: 10px;
  /* border: 1px solid #ff8000; */
`;

const TextEtcContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  height: 100%;
  margin-left: 10px;
  border: 1px solid #ff8000;
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  padding: 5px;
  /* border: 1px solid #ff8000; */
`;
const LikeBox = styled.div`
  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  line-height: normal;
  height: 30px;
  margin-right: 10px;
  /* border: 1px solid #ff8000; */
`;
export const BoardList = () => {
  return (
    <>
      <ListBox>
        <ImageBox>
          <Image>IMG</Image>
        </ImageBox>
        <Container>
          <IdEtContainer>
            <IdEtcBox>
              <Id>idididididid</Id>
            </IdEtcBox>
            <IdEtcBox>
              <Date>2022-11-01</Date>
              <At>22:12:12</At>
              <LikeBox>♡</LikeBox>
            </IdEtcBox>
          </IdEtContainer>
          <TextEtcContainer>
            <Text>Text</Text>
          </TextEtcContainer>
        </Container>
      </ListBox>
    </>
  );
};
