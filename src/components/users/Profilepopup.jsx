import React from "react";

export default function Profilepopup({ show,close }) {
  return (
    <>
      {show ? (
        <div className="modalContainer" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="modal_header-title"> Modal Title </h2>
              
            </header>
            <main className="modal_content">This is Modal Content</main>
            <footer className="modal_footer">
              <button className="modal-close" onClick={() => close()}>Cancel</button>

              <button className="submit">Submit</button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
}
