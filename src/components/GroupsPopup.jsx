import React from "react";

  export default function GroupsPopup(props) {
    const CallValll=props.CallValll;
    const show=props.show;
    const close=props.close;
    //const stringifyArr=props.CallValll.row.members.join(', ');
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
                {console.log(CallValll.row.members)}
                Class    : {CallValll.row.classname}
                <br/>
                Faculty  : {CallValll.row.faculty_name}
                <br/>
                Group ID : {CallValll.row.grp_id}
                <br/>
                Members  : {
                (CallValll.row.members!=null||CallValll.row.members!=undefined)?CallValll.row.members.join(', '):<></>
                }
                <br/>
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