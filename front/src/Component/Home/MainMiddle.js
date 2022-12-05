import 'animate.css';
import styled from 'styled-components';
import { MainA, MainB, MainC, MainD } from './MainImgData';
import { Fade, JackInTheBox } from 'react-awesome-reveal';
import {
  ButtonLogin,
  ButtonSignup,
  ButtonCommunity,
  ButtonGoal,
  ButtonAsset,
} from '../../Component/Common/Button';
import { useContext } from 'react';
import AuthContext from '../../store/AuthContext';

const MiddleDiv = styled.div`
  margin: 0 auto;
  div {
    height: auto;
  }
  .div1 {
    text-align: center;
    height: 1300px;
  }
  .Main1 {
    padding-top: 100px;
    margin-top: 80px;
  }
  .div2 {
    text-align: center;
    height: 1200px;
    img {
      width: auto;
      height: auto;
    }
  }
  .div3 {
    display: flex;
    justify-content: center;
    height: 1000px;
    .span {
      margin-top: 150px;
      span {
        font-size: 20px;
      }
    }
    img {
      width: 640px;
      height: 453px;
    }
  }
  .div4 {
    display: flex;
    justify-content: center;
    text-align: end;
    height: 1000px;
    .span {
      margin-top: 200px;
      span {
        font-size: 20px;
      }
    }
    img {
      width: 600px;
      height: 600px;
    }
  }
  .div5 {
    text-align: center;
    height: 400px;
    span {
      font-size: 20px;
    }
  }
  button {
    margin: 10px;
  }
  .MainAImg {
    display: flex;
    flex-wrap: wrap;
  }
  .MainAImgs {
    width: 100%;
    height: 700px;
    margin-top: 10px;
    border-radius: 30px;
  }
  .MainBImgs {
    width: 300px;
    height: 300px;
    margin: 10px;
    border-radius: 20px;
  }
`;

const Middle = () => {
  const authCtx = useContext(AuthContext);
  const islogin = authCtx.isLoggedIn;

  return (
    <MiddleDiv>
      <div id="1" className="Main1 div1">
        <Fade cascade duration="1300">
          <span
            style={{
              color: '#8ec3b0',
              fontSize: '35px',
              fontWeight: 'bold',
            }}
          >
            호주머니
          </span>
          <h2 style={{ marginTop: '40px' }}>
            누구나 꿈꾸는 자산전문가
            <br />
            이곳에서 저희와 함께 이루어 보세요
          </h2>
          {MainA.map((el, idx) => {
            return (
              <div key={idx} className="MainAImg">
                {el.map((ele, idx) => {
                  return (
                    <img
                      key={idx}
                      src={ele.image}
                      alt="money"
                      className="MainAImgs"
                    />
                  );
                })}
              </div>
            );
          })}
        </Fade>
      </div>
      <div id="2" className="div2">
        <Fade direction="up" duration="1300">
          {MainB.map((el, idx) => {
            return (
              <div key={idx}>
                {el.map((ele, idx) => {
                  return (
                    <img
                      key={idx}
                      src={ele.image}
                      alt="money"
                      className="MainBImgs"
                    />
                  );
                })}
              </div>
            );
          })}
          <h2>
            자산 관리의 모든것,
            <br />그 이상을 만들어내는 호주머니
            <br />
            대한민국 어디서나
            <br />
            함께 관리하고 즐기는
            <br />
            간편한 시스템
          </h2>
        </Fade>
      </div>
      <div id="3" className="div3">
        <Fade direction="right" duration="1300">
          <div className="span">
            <span>자산관리채널</span>
            <h2>
              누구나 무료로 자산을 입력해
              <br />
              이용할수 있는 플랫폼
              <br />내 자산을 한눈에 확인하고
              <br />
              환율계산까지
            </h2>
          </div>
          {MainC.map((el, idx) => {
            return (
              <div key={idx}>
                {el.map((ele, idx) => {
                  return (
                    <img
                      key={idx}
                      src={ele.image}
                      alt="money"
                      className="MainBImgs"
                    />
                  );
                })}
              </div>
            );
          })}
        </Fade>
      </div>
      <div id="4" className="div4">
        <Fade direction="left" duration="1300">
          {MainD.map((el, idx) => {
            return (
              <div key={idx}>
                {el.map((ele, idx) => {
                  return (
                    <img
                      key={idx}
                      src={ele.image}
                      alt="money"
                      className="MainBImgs"
                    />
                  );
                })}
              </div>
            );
          })}
          <div className="span">
            <span>커뮤니티</span>
            <h2>
              다양한 사람들과
              <br />
              자산을 공유하며
              <br />
              편리한 소통할 수 있는
              <br />
              안전한 플랫폼
            </h2>
          </div>
        </Fade>
      </div>
      <div id="5" className="div5">
        <JackInTheBox duration="1300">
          <span>출발하기</span>
          <h2>
            지금바로 저희와 함께
            <br />
            부자가 되기위한
            <br />
            길을 떠나볼까요?
          </h2>
          <div>
            {islogin ? (
              <>
                <ButtonAsset />
                <ButtonGoal />
                <ButtonCommunity />
              </>
            ) : (
              <>
                <ButtonLogin />
                <ButtonSignup />
              </>
            )}
          </div>
        </JackInTheBox>
      </div>
    </MiddleDiv>
  );
};

export default Middle;
