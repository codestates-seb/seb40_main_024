import styled from 'styled-components';
import { useState } from 'react';

const Div = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: '999999';
  }
  .modal button {
    outline: none;
    cursor: pointer;
    border: 0;
  }
  .modal > section {
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.6s;
    overflow: hidden;
  }
  .modal > section > header {
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #9ed5cd;
    font-weight: 700;
  }
  .modal > section > header button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
  }
  .modal > section > main {
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
  }
  .modal > section > footer {
    padding: 12px 16px;
    text-align: right;
  }
  .modal > section > footer button {
    padding: 6px 12px;
    color: #fff;
    background-color: #9ed5cd;
    border-radius: 5px;
    font-size: 13px;
  }
  .modal.openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.3s;
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Modal = (props) => {
  const { open, close, header } = props;

  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close">&times;</button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className="close" onClick={close}>
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};

export const AutoModal = (props) => {
  const { open, close, header } = props;
  // eslint-disable-next-line no-unused-vars
  const [check, setCheck] = useState(false);

  const checkHandler = () => {
    setCheck(true);
    setTimeout(() => {
      setCheck(false);
      window.location.reload();
    }, 5);
  };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close">&times;</button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className="close" onClick={(() => close, checkHandler)}>
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
export const AssetTextEditModal = (props) => {
  const { open, close, header, api } = props;
  // eslint-disable-next-line no-unused-vars
  const [check, setCheck] = useState(false);

  const checkHandler = () => {
    setCheck(true);
    setTimeout(() => {
      setCheck(false);
      window.location.reload();
    }, 5);
  };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button
                className="edit"
                onClick={(() => close, checkHandler, api)}
              >
                Edit
              </button>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};

export const AssetDeleteEditModal = (props) => {
  const { open, close, header, api } = props;
  // eslint-disable-next-line no-unused-vars
  const [check, setCheck] = useState(false);

  const checkHandler = () => {
    setCheck(true);
    setTimeout(() => {
      setCheck(false);
      window.location.reload();
    }, 5);
  };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button
                className="close"
                onClick={(() => close, checkHandler, api)}
              >
                Delete
              </button>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
export const AssetDeleteEditModal1 = (props) => {
  // eslint-disable-next-line no-unused-vars

  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api, AssetIds1 } = props;
  // eslint-disable-next-line no-unused-vars
  const [check, setCheck] = useState(false);
  // console.log(api);
  // console.log(AssetIds1.length);

  const checkHandler = () => {
    setCheck(true);
    setTimeout(() => {
      if (check === false) {
        for (let i = 0; i < AssetIds1.length; i++) {
          api();
        }
      }
    }, 5);
  };

  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button
                className="close"
                onClick={(() => close, checkHandler, api)}
              >
                Delete
              </button>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
export const AssetDeleteEditModal2 = (props) => {
  const { open, close, header, api } = props;
  // eslint-disable-next-line no-unused-vars
  const [check, setCheck] = useState(false);

  const checkHandler = () => {
    setCheck(true);
    setTimeout(() => {
      setCheck(false);
      window.location.reload();
    }, 5);
  };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button
                className="close"
                onClick={(() => close, checkHandler, api)}
              >
                Delete
              </button>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
export const AssetDeleteEditModal3 = (props) => {
  const { open, close, header, api } = props;
  // eslint-disable-next-line no-unused-vars
  const [check, setCheck] = useState(false);

  const checkHandler = () => {
    setCheck(true);
    setTimeout(() => {
      setCheck(false);
      window.location.reload();
    }, 5);
  };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button
                className="close"
                onClick={(() => close, checkHandler, api)}
              >
                Delete
              </button>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
export const AssetDeleteEditModal4 = (props) => {
  const { open, close, header, api } = props;
  // eslint-disable-next-line no-unused-vars
  const [check, setCheck] = useState(false);

  const checkHandler = () => {
    setCheck(true);
    setTimeout(() => {
      setCheck(false);
      window.location.reload();
    }, 5);
  };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button
                className="close"
                onClick={(() => close, checkHandler, api)}
              >
                Delete
              </button>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
export const AssetDeleteEditModal5 = (props) => {
  const { open, close, header, api } = props;
  // eslint-disable-next-line no-unused-vars
  const [check, setCheck] = useState(false);

  const checkHandler = () => {
    setCheck(true);
    setTimeout(() => {
      setCheck(false);
      window.location.reload();
    }, 5);
  };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button
                className="close"
                onClick={(() => close, checkHandler, api)}
              >
                Delete
              </button>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
export const AssetDeleteEditModal6 = (props) => {
  const { open, close, header, api } = props;
  // eslint-disable-next-line no-unused-vars
  const [check, setCheck] = useState(false);

  const checkHandler = () => {
    setCheck(true);
    setTimeout(() => {
      setCheck(false);
      window.location.reload();
    }, 5);
  };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button
                className="close"
                onClick={(() => close, checkHandler, api)}
              >
                Delete
              </button>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
export const GoalModifygModal = (props) => {
  const { open, close, header, goalPatch, id } = props;

  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className="close" onClick={goalPatch} data-id={id}>
                Edit
              </button>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
