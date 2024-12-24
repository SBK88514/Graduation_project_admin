import React from "react";
import IssueForm from "../pages/forms/IssueForm";

function IssueModal() {
  return (
    <dialog id="issue_modal" className="modal">
      <div className="modal-box w-[60%] h-[80%] max-w-none max-h-none p-0">
        {/* Exit Btn */}
        <div>
          <button
            onClick={() => document.getElementById("issue_modal").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </div>

        <IssueForm/>
      </div>
    </dialog>
  );
}

export default IssueModal;
