import axios from "axios";
import { createContext,  useState } from "react";
import {showErrorToast,showSuccessToast} from "../../lib/Toast"

export const ActionContext = createContext();


function ActionProvider({ children }) {
    const [toggleRequest, setToggleRequest] = useState(false);
    const[emp, setEmp] = useState(null)

    async function deleteEmployee(id) {
        try {
            const { data } = await axios.delete(`/users/employee/delete/${id}`);
            console.log(data)
            if (data.success) {
                setToggleRequest(!toggleRequest)
                showSuccessToast(data.message)
            }
        } catch (error) {
            console.log(error);
            const err = error.response.data.error;
            showErrorToast(err)
        }
    }
    function handleEdit(employee){
      document.getElementById("employee_modal").showModal();
      setEmp(employee)
      console.log(emp)
    }
 

  const value = {
    toggleRequest,
    setToggleRequest,
    deleteEmployee, 
    emp,
    handleEdit
  };

  return (
  <ActionContext.Provider value={value}>
    {children}
    </ActionContext.Provider>
  ) 
}

export default ActionProvider;
