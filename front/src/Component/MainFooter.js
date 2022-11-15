import styled from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 홈페이지 이름
const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  .github {
    display: flex;
    margin: 0 auto;
    font-size: 50px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function Footer() {
  return (
    <FooterMain>
      <div>
        <FontAwesomeIcon icon={faGithub} className="github" />
        <a href="https://github.com/junny1995">
          <span>
            Frontend
            <br />
            황인준
          </span>
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon={faGithub} className="github" />
        <a href="https://github.com/dlagnsk2">
          <span>
            Frontend
            <br />
            임후나
          </span>
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon={faGithub} className="github" />
        <a href="https://github.com/jioneee">
          <span>
            Frontend
            <br />
            이지원
          </span>
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon={faGithub} className="github" />
        <span>
          <a href="https://github.com/HongSungHak">
            Backend
            <br />
            홍성학
          </a>
        </span>
      </div>
      <div>
        <FontAwesomeIcon icon={faGithub} className="github" />
        <a href="https://github.com/codinginfant">
          <span>
            Backend
            <br />
            주윤정
          </span>
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon={faGithub} className="github" />
        <a href="https://github.com/JadeMK">
          <span>
            Backend
            <br />
            김민주
          </span>
        </a>
      </div>
    </FooterMain>
  );
}

export default Footer;
