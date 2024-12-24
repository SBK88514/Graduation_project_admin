// import React, { useState } from "react";
// import axios from "axios";
// import { useMutation, useQuery } from "@tanstack/react-query"; // Add useQuery
// import { X } from "lucide-react";
// import { data } from "react-router-dom";
// import SelectBox from "./SelectBox";
// import { Link, useNavigate } from "react-router-dom";


// const initialFormValues = {
//   issue_building: "",
//   issue_floor: "",
//   issue_apartment: "",
//   issue_profession: "", // Add this
//   issue_description: "",
// };

// function AddIssueForm() {
//   const [formValues, setFormValues] = useState(initialFormValues);
//   const [uploadedFiles, setUploadedFiles] = useState([]); // Add this
//   const navigate = useNavigate();
 

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   }

//   // Add these new functions
//   const handleFileUpload = (e) => {
//     const newFiles = Array.from(e.target.files);
//     setUploadedFiles((prev) => [
//       ...prev,
//       ...newFiles.map((file) => ({
//         id: Math.random().toString(36).substr(2, 9),
//         file,
//       })),
//     ]);
//     e.target.value = "";
//   };

//   const removeFile = (fileId) => {
//     setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId));
//   };

//   console.log(formValues);

//   const mutation = useMutation({
//     mutationFn: async (formData) => {
//       const { data } = await axios.post("/issues/addIssues", formData);

//       console.log(11);
//       console.log(data);
//       console.log(22);
//       return data;
//     },
    
//     onSuccess: (data) => {
//       console.log("Issue added successfully:", data);
//       setFormValues(initialFormValues);
//       navigate("/allissues");
//     },
//     onError: (error) => {
//       console.error(
//         "Error adding issue:",
//         error.response?.data || error.message
//       );
//     },
//   });

//   function handleSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);

//     // Add each file to formData
//     uploadedFiles.forEach(({ file }) => {
//       formData.append("issue_images", file);
//     });

//     mutation.mutate(formData);

//   }

//   return (
//     <div className=" w-full p-4 flex items-center justify-center ">
//       <div className="bg-orange-50 p-4 md:p-6 rounded-2xl shadow-lg w-full max-w-4xl h-[85vh] flex flex-col">
//         {/* כותרת */}
//         <h2 className="text-xl md:text-2xl font-bold text-amber-900 mb-2 md:mb-2 text-center">
//           Report New Issue
//         </h2>

//         <form onSubmit={handleSubmit} className="flex-1 overflow-y-aut">
//           <div className="space-y-4 bg-white p-4 md:p-6 rounded-xl shadow-sm">
//             {/* Location and Basic Details Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
//               <div>
//                 <label
//                   className="block text-sm font-medium text-amber-700 mb-1"
//                   htmlFor="building"
//                 >
//                   Building
//                 </label>
//                 <select
//                   className="w-full rounded-lg border-2 border-amber-200 bg-amber-50 py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
//                   id="building"
//                   name="issue_building"
//                   value={formValues.issue_building}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Building</option>
//                   <option value="A">Building A</option>
//                   <option value="B">Building B</option>
//                   <option value="C">Building C</option>
//                 </select>
//               </div>

//               <div>
//                 <label
//                   className="block text-sm font-medium text-amber-700 mb-1"
//                   htmlFor="floor"
//                 >
//                   Floor
//                 </label>
//                 <select
//                   className="w-full rounded-lg border-2 border-amber-200 bg-amber-50 py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
//                   id="floor"
//                   name="issue_floor"
//                   value={formValues.issue_floor}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Floor</option>
//                   <option value="1">1st Floor</option>
//                   <option value="2">2nd Floor</option>
//                   <option value="3">3rd Floor</option>
//                   <option value="4">4th Floor</option>
//                   <option value="5">5th Floor</option>
//                 </select>
//               </div>

//               <div>
//                 <label
//                   className="block text-sm font-medium text-amber-700 mb-1"
//                   htmlFor="apartment"
//                 >
//                   Apartment
//                 </label>
//                 <input
//                   type="text"
//                   id="apartment"
//                   name="issue_apartment"
//                   value={formValues.issue_apartment}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter apartment number"
//                   className="w-full rounded-lg border-2 border-amber-200 bg-amber-50 py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
//                 />
//               </div>

//               <div>
//                 <label
//                   className="block text-sm font-medium text-amber-700 mb-1"
//                   htmlFor="profession"
//                 >
//                   Profession
//                 </label>
//                 <SelectBox handleChange={handleChange} id={"issue_profession"} />
//               </div>
//               {/* Urgency Selection */}
//               <div>
//                 <label
//                   className="block text-sm font-medium text-amber-700 mb-1"
//                   htmlFor="urgency"
//                 >
//                   Urgency Level
//                 </label>
//                 <select
//                   className="w-full rounded-lg border-2 border-amber-200 bg-amber-50 py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
//                   id="urgency"
//                   name="issue_urgency"
//                   value={formValues.issue_urgency}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Urgency</option>
//                   <option value="low">Low</option>
//                   <option value="medium">Medium</option>
//                   <option value="high">High</option>
//                 </select>
//               </div>
//             </div>

//             {/* Description */}
//             <div>
//               <label
//                 className="block text-sm font-medium text-amber-700 mb-1"
//                 htmlFor="description"
//               >
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="issue_description"
//                 value={formValues.issue_description}
//                 onChange={handleChange}
//                 required
//                 className="w-full rounded-lg border-2 border-amber-200 bg-amber-50 py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
//                 placeholder="Please describe the issue in detail..."
//                 rows="3"
//               ></textarea>
//             </div>

//             {/* Image Upload with Fixed Height */}
//             <div>
//               <label className=" block text-sm font-medium text-amber-700 mb-1">
//                 Add Images
//               </label>
//               <div className="mt-1  h-32 border-2 border-amber-200 border-dashed rounded-lg bg-amber-50">
//                 <div className="px-4 py-4">
//                   <div className="text-center">
//                     <div className=" flex text-sm text-amber-600 justify-center">
//                       <label
//                         htmlFor="issue_images"
//                         className="  relative cursor-pointer rounded-md font-medium text-amber-600 hover:text-amber-800"
//                       >
//                         <span>Upload a file</span>
//                         <input
//                           id="issue_images"
//                           name="issue_images"
//                           type="file"
//                           className="sr-only"
//                           accept="image/*"
//                           multiple
//                           onChange={handleFileUpload}
//                         />
//                       </label>
//                       <p className="pl-1">or drag and drop</p>
//                     </div>
//                     <p className="text-xs text-amber-500 mt-1">
//                       PNG, JPG, GIF up to 10MB
//                     </p>
//                   </div>

//                   {/* Scrollable uploaded files container */}
//                   {uploadedFiles.length > 0 && (
//                     <div className=" overflow-auto h-10 mt-1 max-h-32 overflow-y-auto">
//                       <div className="space-y-2">
//                         {uploadedFiles.map(({ id, file }) => (
//                           <div
//                             key={id}
//                             className="flex items-center justify-between bg-white p-1 rounded-sm"
//                           >
//                             <span className="text-sm text-amber-700 truncate max-w-[80%]">
//                               {file.name}
//                             </span>
//                             <button
//                               type="button"
//                               onClick={() => removeFile(id)}
//                               className="text-amber-500 hover:text-amber-700"
//                             >
//                               <X size={16} />
//                             </button>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Submit Buttons */}
//             <div className="flex justify-end space-x-4 pt-4">
//               <Link
//                 to="/welcomepage"
//                 className="px-6 py-2 border-2 border-amber-600 text-amber-600 rounded-xl hover:bg-amber-50 focus:outline-none focus:ring-2
//                  focus:ring-amber-500 focus:ring-offset-2 transition-colors
//                   duration-200"
//               >
//                 Cancel
//               </Link>
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-amber-600 text-white 
//                 rounded-xl hover:bg-amber-700 focus:outline-none
//                  focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
//                   transition-colors duration-200"
//                 disabled={mutation.isLoading}
//               >
//                 {mutation.isLoading ? "Submitting..." : "Submit Issue"}
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddIssueForm;
