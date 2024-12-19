import axios from "axios";
import { createContext, useState } from "react";

export const ActionContext = createContext();

function ActionProvider({ children }) {
  const [emp, setEmp] = useState(null);
  const [man, setMan] = useState(null);

  function handleEdit(employee) {
    document.getElementById("employee_modal").showModal();
    setEmp(employee);
    console.log(emp);
  }
  function handleEditManager(manager) {
    document.getElementById("manager_modal").showModal();
    setMan(manager);
  }

  function handleAddManager() {
    document.getElementById("manager_modal").showModal();
    setMan(null);
  }

  async function getAllDetails(url) {
    try {
      const { data } = (await axios.get(url)).data;

      return data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  function handleAddProfession() {
    document.getElementById("profession_modal").showModal();
    setMan(null);
  }

  const value = {
    emp,
    handleEdit,
    handleEditManager,
    man,
    handleAddManager,
    getAllDetails,
    handleAddProfession,
  };

  return (
    <ActionContext.Provider value={value}>{children}</ActionContext.Provider>
  );
}

export default ActionProvider;
