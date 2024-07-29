// waimport axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App2.css";

function Add() {
  const [inputData, setInputData] = useState({
    customerName: "",
    customerGender: "",
    customerService: "",
    appointmentTime: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post("http://localhost:1112/Customer",  {
    //     customerName: inputData.customerName,
    //     customerGender: inputData.customerGender,
    //     customerService: inputData.customerService,
    //     appointmentTime: new Date(inputData.appointmentTime).toISOString(),
    //   });
    //   console.log(response.data);
    //   alert("Data added Successfully");
    //   navigate("/");
    //   resetForm();
    // } catch (error) {
    //   console.error('Error saving customer:', error);
    //   alert("Error adding data. Please try again.");
    // }
  };

  const resetForm = () => {
    setInputData({
      customerName: "",
      customerGender: "",
      customerService: "",
      appointmentTime: "",
    });
  };

  const validateValues = () => {
    if (inputData.customerName.trim() === "") {
      alert("Please enter Customer Name!!!");
      return false;
    }
    if (inputData.customerGender.trim() === "") {
      alert("Please enter Gender!!!");
      return false;
    }
    if (inputData.customerService.trim() === "") {
      alert("Please select a Service!!!");
      return false;
    }
    if (inputData.appointmentTime === "") {
      alert("Please select Appointment Date!!!");
      return false;
    }
    return true;
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleFormSubmit}>
          <h1 role="head">Add Customer Data</h1>
          <div>
            <label htmlFor="customerName" role="namel">Name:</label>
            <input
            role="namef"
              type="text"
              id="customerName"
              name="customerName"
              className="form-control"
              value={inputData.customerName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="customerGender">Gender:</label>
            <input
              type="text"
              id="customerGender"
              name="customerGender"
              className="form-control"
              value={inputData.customerGender}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="customerService">Service:</label>
            <select
              id="customerService"
              name="customerService"
              className="form-control"
              value={inputData.customerService}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a Service</option>
              <option value="Haircut and Styling Services">Haircut and Styling Services</option>
              <option value="Hair Coloring Services">Hair Coloring Services</option>
              <option value="Facial and Skincare Services">Facial and Skincare Services</option>
              <option value="Manicure and Pedicure Services">Manicure and Pedicure Services</option>
              <option value="Makeup Services">Makeup Services</option>
              <option value="Waxing and Hair Removal Services">Waxing and Hair Removal Services</option>
              <option value="Massage and Relaxation Services">Massage and Relaxation Services</option>
            </select>
          </div>

          <div>
            <label htmlFor="appointmentTime">Appointment Date:</label>
            <input
              type="date"
              id="appointmentTime"
              name="appointmentTime"
              className="form-control"
              value={inputData.appointmentTime}
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Add;








// import axios from "axios";
// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./App2.css";

// function Add() {
//   const [inputData, setInputData] = useState({
//     customerName: "",
//     customerGender: "",
//     customerService: "",
//     appointmentTime: "",
//   });

//   const naviget = useNavigate();

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     let result = validateValues(inputData);
//     // setSubmitting(true);

//     if (result === true) {
//       axios
//         .post("http://localhost:1112/Customer", inputData)
//         .then((res) => {
//           alert("Data added Successfully");
//           naviget("/");
//           console.log(res.data);
//         })
//         .catch((err) => console.log(err));
//     } else {
//       alert("Please Enter the Valid Inputs!!!");
//     }
//   };

//   // validation Part for add user for Customer management system
//   // const [errors, setErrors] = useState({});
//   // const [submitting, setSubmitting] = useState(false);

//   const validateValues = (inputData) => {
//     if (inputData.customerName.length === 0) {
//       alert("Please enter Customer Name !!! ");
//       return false;
//     } else if (inputData. customerGender.length===0) {
//       alert("please enter valid Gender !!!");
//       return false;
//     } else if (inputData.customerService.length === 0) {
//       alert("Please enter Service Name !!!");
//       return false;
//     } else if (inputData.appointmentTime.length === 0) {
//       alert("Please Enter the Valid appointmentTime!!!");
//       return false;
//     } else {
//       return true;
//     }
//   };

//   return (
//     <div
//       id="add2"
//       className="d-flex w-100 vh-100 justify-content-center align-items-center "
//     >
//       <div className="w-50 border bg-light p-5">
//         <form onSubmit={handleSubmit}>
//           <h1> Add Customer Data</h1>
//           <div>
//             <lable htmlFor="name">Name</lable>
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               onChange={(e) =>
//                 setInputData({ ...inputData,customerName: e.target.value })
//               }
//             />
//           </div>
//           <div>
//             <lable htmlFor=" customerGender"> Gender :</lable>
//             <input
//               type="text"
//               name=" customerGender"
//               className="form-control"
//               onChange={(e) =>
//                 setInputData({ ...inputData,  customerGender: e.target.value })
//               }
//             />
//           </div>

//           {/* <div>
//             <lable htmlFor="customerService">Service :</lable>
//             <input
//               type="text"
//               name="customerService"
//               className="form-control"
//               onChange={(e) =>
//                 setInputData({ ...inputData, customerService: e.target.value })
//               }
//             />
//           </div> */}

// <div>
//   <label htmlFor="customerService">Service :</label>
//   <select
//   type ="text"
//     name="customerService"
//     className="form-control"
//     onChange={(e) =>
//       setInputData({ ...inputData, customerService: e.target.value })
//     }
//   >
//     <option value="">Select a Service</option>
//     <option value="Haircut and Styling Services">Haircut and Styling Services</option>
//     <option value="Hair Coloring Services">Hair Coloring Services</option>
//     <option value="Facial and Skincare Services">Facial and Skincare Services</option>
//     <option value="Manicure and Pedicure Services">Manicure and Pedicure Services</option>
//     <option value="Makeup Services">Makeup Services</option>
//     <option value="Waxing and Hair Removal Services">Waxing and Hair Removal Services</option>
//     <option value="Massage and Relaxation Services">Massage and Relaxation Services</option>
//   </select>
// </div>

// {/* <br></br>
// <div>
//             <lable htmlFor="appointmentTime">appointmentTime :</lable>
//             <input type="time"
//               name="appointmentTime"
//               className="form-control"
//               onChange={(e) =>
//                 setInputData({ ...inputData, appointmentTime: e.target.value })
//               }
//             />
//           </div> */}

//           <div>
//             <lable htmlFor="appointmentTime">appointment Date :</lable>
//             <input type="date"
//               name="appointmentTime"
//               className="form-control"
//               onChange={(e) =>
//                 setInputData({ ...inputData, appointmentTime: e.target.value })
//               }
//             />
//           </div>
//           <br />

//           <button className="btn btn-info">Submit</button>
//         </form>

        
//       </div>
//     </div>
//   );
// }

// export default Add;
