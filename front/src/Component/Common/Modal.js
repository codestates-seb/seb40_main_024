import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { title, setTitleName } from '../../Redux/titleSlice';
// import { useState,t, useContext } from 'react';
const Div = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99999;
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
              <button className="close" onClick={close}>
                &times;
              </button>
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
      close();
      // window.location.reload();
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

export const AssetTextEditModal1 = (props) => {
  const { open, close, header, api } = props;

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
              <button className="edit" onClick={api}>
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
export const AssetTextEditModal2 = (props) => {
  const { open, close, header, api } = props;

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
              <button className="edit" onClick={api}>
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
export const AssetTextEditModal3 = (props) => {
  const { open, close, header, api } = props;

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
              <button className="edit" onClick={api}>
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
export const AssetTextEditModal4 = (props) => {
  const { open, close, header, api, PathTextHandler4 } = props;
  const miniHandler = () => {
    api();

    setTimeout(() => PathTextHandler4(), 500);
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
              <button className="edit" onClick={miniHandler}>
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
export const AssetTextEditModal5 = (props) => {
  const { open, close, header, api, PathTextHandler5 } = props;
  const miniHandler = () => {
    api(), PathTextHandler5();
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
              <button className="edit" onClick={miniHandler}>
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
export const AssetTextEditModal6 = (props) => {
  const { open, close, header, api, PathTextHandler6 } = props;

  // eslint-disable-next-line no-unused-vars

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
              <button className="edit" onClick={(() => api, PathTextHandler6)}>
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
export const AssetDeleteEditModal1 = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api1, api2, AssetTypeNonMyungching } = props;

  // eslint-disable-next-line no-unused-vars

  const checkHandler = () => {
    api1();
    close;
    setTimeout(() => {
      // window.location.reload();
    }, 80);
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
              <button className="close" onClick={checkHandler}>
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
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api1, api2, AssetTypeNonMyungching } = props;
  // eslint-disable-next-line no-unused-vars

  const checkHandler = () => {
    api1();
    close;
    setTimeout(() => {
      // window.location.reload();
    }, 80);
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
              <button className="close" onClick={checkHandler}>
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
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api1, api2, AssetTypeNonMyungching } = props;
  // eslint-disable-next-line no-unused-vars

  const checkHandler = () => {
    api1();
    close;
    setTimeout(() => {
      // window.location.reload();
    }, 80);
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
              <button className="close" onClick={checkHandler}>
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
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api1, api2, AssetTypeNonMyungching } = props;
  // eslint-disable-next-line no-unused-vars

  const checkHandler = () => {
    api1();
    close;
    setTimeout(() => {
      // window.location.reload();
    }, 80);
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
              <button className="close" onClick={checkHandler}>
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
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api1, api2, AssetTypeNonMyungching } = props;
  // eslint-disable-next-line no-unused-vars

  const checkHandler = () => {
    api1();
    close;
    setTimeout(() => {
      // window.location.reload();
    }, 80);
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
              <button className="close" onClick={checkHandler}>
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

// open={DelModalopen6}
// close={closeModal}
// header="자산 종류 수정 알림"
// api1={deletAssetApi6}
// api2={deletLastAssetApi1}
// AssetTypelength={AssetType.length}
export const AssetDeleteEditModal6 = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api1, api2, AssetTypeNonMyungching } = props;
  // eslint-disable-next-line no-unused-vars

  // console.log(api1, api2, AssetTypeNonMungching);
  const checkHandler = () => {
    api1();
    close;
    setTimeout(() => {
      // window.location.reload();
    }, 80);
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
              <button className="delete" onClick={checkHandler}>
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
export const GoalModifyModal = (props) => {
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

export const SavingModal = (props) => {
  const { open, close, header } = props;

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
                onClick={close}
                style={{ marginLeft: '20px' }}
              >
                저장
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
// export const AssetTextEditModal = (props) => {
//   const { open, close, header, api } = props;
//   // eslint-disable-next-line no-unused-vars
//   const [check, setCheck] = useState(false);

//   const checkHandler = () => {
//     setCheck(true);
//     setTimeout(() => {
//       setCheck(false);
//       window.location.reload();
//     }, 5);
//   };
//   return (
//     <Div>
//       <div className={open ? 'openModal modal' : 'modal'}>
//         {open ? (
//           <section>
//             <header>
//               {header}
//               <button className="close" onClick={close}>
//                 &times;
//               </button>
//             </header>
//             <main>{props.children}</main>
//             <footer>
//               <button
//                 className="edit"
//                 onClick={(() => close, checkHandler, api)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="close"
//                 onClick={close}
//                 style={{ marginLeft: '20px' }}
//               >
//                 close
//               </button>
//             </footer>
//           </section>
//         ) : null}
//       </div>
//     </Div>
//   );
// };
