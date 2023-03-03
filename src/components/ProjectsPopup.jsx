import React from "react";

export default function ProjectsPopup(props) {
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
                Project Name : {CallValll.row.project_title}
                <br />
                Year : {CallValll.row.year}
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