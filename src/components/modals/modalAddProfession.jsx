import React from "react";
import AddProfessionForm from "../pages/forms/AddProfessionForm";

function modalAddProfession() {
  return (
    <dialog id="profession_modal" className="modal">
      <div className="modal-box p-0">
        {/* Exit Btn */}
        <div>
          <button
            onClick={() => document.getElementById("profession_modal").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </div>

        <AddProfessionForm />
      </div>
    </dialog>
  );
}

export default modalAddProfession;
