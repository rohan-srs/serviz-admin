import React from "react";

//export default function Profilepopup({ show, close, CallValll }) {
export default function Profilepopup(props) {
  const CallValll = props.CallValll;
  const show = props.show;
  const close = props.close;
  return (
    <>
      {show ? (
        <div className="modalContainer" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2>PopUp</h2>
            </header>
            <main className="modal_content">
              <div>
                Name : {CallValll.row.name}
                <br />
                Reg No : {CallValll.row.reg_no}
                <br />
                Class : {CallValll.row.classname}
                <br />
                Group ID : {CallValll.row.grp_id}
                <br />
              </div>
            </main>
            <footer className="modal_footer">
              <button className="modal-close" onClick={() => close()}>
                Cancel
              </button>

              <button className="submit">Submit</button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
}
