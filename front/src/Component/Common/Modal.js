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
// export const ErrAssetTextEditModal = (props) => {
//   const { open, close, header } = props;
//   console.log('erropen', open);
//   // eslint-disable-next-line no-unused-vars
//   return (
//     <Div>
//       <div className={open ? 'openModal modal' : 'modal'}>
//         {open ? (
//           <section>
//             <header>
//               {header}
//               <button className="close">&times;</button>
//             </header>
//             <main>{props.children}</main>
//             <footer>
//               <button className="close" onClick={() => close}>
//                 close
//               </button>
//             </footer>
//           </section>
//         ) : null}
//       </div>
//     </Div>
//   );
// };
// export const ErrAssetTextEditModal = (props) => {
//   const { open, close, header } = props;
//   console.log('erropen', open);
//   // eslint-disable-next-line no-unused-vars

//   return (
//     <Div>
//       <div className={open === undefined ? 'openModal modal' : 'modal'}>
//         {open === undefined ? (
//           <section>
//             <header>
//               {header}
//               <button className="close">&times;</button>
//             </header>
//             <main>{props.children}</main>
//             <footer>
//               <button className="close" onClick={() => close}>
//                 close
//               </button>
//             </footer>
//           </section>
//         ) : null}
//       </div>
//     </Div>
//   );
// };

export const AssetTextEditModal1 = (props) => {
  const {
    open,
    close,
    header,
    // eslint-disable-next-line no-unused-vars
    api,
    assetData1,
    assetDatas,
    // eslint-disable-next-line no-unused-vars
    setTest1,
    // eslint-disable-next-line no-unused-vars
    EditText,
    // eslint-disable-next-line no-unused-vars
    assetIds1,
    // eslint-disable-next-line no-unused-vars
    AssetType,
  } = props;
  // eslint-disable-next-line no-unused-vars
  const [Check, setCheck] = useState(false);
  // eslint-disable-next-line no-unused-vars
  console.log('open', open);
  // eslint-disable-next-line no-unused-vars
  let data1 = '';
  assetDatas.forEach((el) => {
    el.assetId !== undefined &&
    assetData1.length > 0 &&
    el.assetId === assetData1[assetData1.length - 1].assetId
      ? (data1 = el)
      : null;
  });

  // eslint-disable-next-line no-unused-vars

  const checkHandler = () => {
    if (assetIds1.length > 0) {
      api();
    }
    if (assetIds1.length === 0) {
      setTimeout(() => {
        close();
      }, 80);
      setTest1(EditText);
    }
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
              <button className="edit" onClick={checkHandler}>
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
  // eslint-disable-next-line no-unused-vars
  const {
    open,
    close,
    header,
    api,
    assetData2,
    assetDatas,
    setTest2,
    EditText,
    assetIds2,
  } = props;

  // eslint-disable-next-line no-unused-vars
  let data2 = '';
  assetDatas.forEach((el) => {
    el.assetId !== undefined &&
    assetData2.length > 0 &&
    el.assetId === assetData2[assetData2.length - 1].assetId
      ? (data2 = el)
      : null;
  });

  const checkHandler = () => {
    if (assetIds2.length > 0) {
      api();
    }
    if (assetIds2.length === 0) {
      setTimeout(() => {
        close();
      }, 80);
      setTest2(EditText);
    }
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
              <button className="edit" onClick={checkHandler}>
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
  const {
    open,
    close,
    header,
    api,
    assetData3,
    assetDatas,
    setTest3,
    EditText,
    assetIds3,
  } = props;

  // eslint-disable-next-line no-unused-vars
  let data3 = '';
  assetDatas.forEach((el) => {
    el.assetId !== undefined ||
    assetData3.length > 0 ||
    el.assetId === assetData3[assetData3.length - 1].assetId
      ? (data3 = el)
      : null;
  });

  const checkHandler = () => {
    if (assetIds3.length > 0) {
      api();
    }
    if (assetIds3.length === 0) {
      setTimeout(() => {
        close();
      }, 80);
      setTest3(EditText);
    }
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
              <button className="edit" onClick={checkHandler}>
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
  const {
    open,
    close,
    header,
    api,
    assetData4,
    assetDatas,
    setTest4,
    EditText,
    assetIds4,
  } = props;

  // eslint-disable-next-line no-unused-vars
  let data4 = '';
  assetDatas.forEach((el) => {
    el.assetId !== undefined ||
    assetData4.length > 0 ||
    el.assetId === assetData4[assetData4.length - 1].assetId
      ? (data4 = el)
      : null;
  });

  const checkHandler = () => {
    if (assetIds4.length > 0) {
      api();
    }
    if (assetIds4.length === 0) {
      setTimeout(() => {
        close();
      }, 80);
      setTest4(EditText);
    }
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
              <button className="edit" onClick={checkHandler}>
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
  const {
    open,
    close,
    header,
    api,
    assetData5,
    assetDatas,
    setTest5,
    EditText,
    assetIds5,
  } = props;

  // eslint-disable-next-line no-unused-vars
  let data5 = '';
  assetDatas.forEach((el) => {
    el.assetId !== undefined ||
    assetData5.length > 0 ||
    el.assetId === assetData5[assetData5.length - 1].assetId
      ? (data5 = el)
      : null;
  });

  const checkHandler = () => {
    if (assetIds5.length > 0) {
      api();
    }
    if (assetIds5.length === 0) {
      setTimeout(() => {
        close();
      }, 80);
      setTest5(EditText);
    }
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
              <button className="edit" onClick={checkHandler}>
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
  const {
    open,
    close,
    header,
    api,
    assetData6,
    assetDatas,
    setTest6,
    EditText,
    assetIds6,
  } = props;

  // eslint-disable-next-line no-unused-vars
  let data5 = '';
  assetDatas.forEach((el) => {
    el.assetId !== undefined ||
    assetData6.length > 0 ||
    el.assetId === assetData6[assetData6.length - 1].assetId
      ? (data5 = el)
      : null;
  });

  const checkHandler = () => {
    if (assetIds6.length > 0) {
      api();
    }
    if (assetIds6.length === 0) {
      setTimeout(() => {
        close();
      }, 80);
      setTest6(EditText);
    }
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
              <button className="edit" onClick={checkHandler}>
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
    setTimeout(() => {
      api1();
      if (AssetTypeNonMyungching <= 6) {
        api2();
      }
    }, 1);
    setTimeout(() => {
      window.location.reload();
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
    setTimeout(() => {
      api1();
      if (AssetTypeNonMyungching <= 6) {
        api2();
      }
    }, 1);
    setTimeout(() => {
      window.location.reload();
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
    setTimeout(() => {
      api1();
      if (AssetTypeNonMyungching <= 6) {
        api2();
      }
    }, 1);
    setTimeout(() => {
      window.location.reload();
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
    setTimeout(() => {
      api1();
      if (AssetTypeNonMyungching <= 6) {
        api2();
      }
    }, 1);
    setTimeout(() => {
      window.location.reload();
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
    setTimeout(() => {
      api1();
      if (AssetTypeNonMyungching <= 6) {
        api2();
      }
    }, 1);
    setTimeout(() => {
      window.location.reload();
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
    setTimeout(() => {
      api1();
      if (AssetTypeNonMyungching <= 6) {
        api2();
      }
    }, 1);
    setTimeout(() => {
      window.location.reload();
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
  const { open, close, header, goalUpPatch, goalDownPatch } = props;
  // eslint-disable-next-line no-unused-vars
  const [check, setCheck] = useState(false);

  const checkHandler = () => {
    setCheck(true);
    setTimeout(() => {
      setCheck(false);
      goalUpPatch();
      goalDownPatch();
    }, 0);
    setTimeout(() => {
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
                onClick={(() => close, checkHandler)}
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
