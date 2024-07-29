import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App2.css";

function Edit() {
  const { id } = useParams();
  const [data, setData] = useState({}); // Define data state variable
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:1112/Customer/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:1112/Customer", data).then((res) => {
      alert("User Updated Successfully");
      navigate("/");
    });
  };


  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <h1>Update Customer Data</h1>
          <div>
            <label htmlFor="id">Customer ID:</label>
            <input
              type="text"
              id="id"
              name="customerId"
              className="form-control"
              value={data.customerId}
              disabled
            />
          </div>
          <div>
            <label htmlFor="customerName">Name:</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              className="form-control"
              value={data.customerName}
              // onChange={handleInputChange}
              onChange={(e) => setData({ ...data, customerName: e.target.value })}
             
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
              value={data.customerGender}
              // onChange={handleInputChange}
              onChange={(e) => setData({ ...data, customerGender: e.target.value })}
             
              required
            />
          </div>
          {/* <div>
            <label htmlFor="customerService">Service:</label>
            <input
              type="text"
              id="customerService"
              name="customerService"
              className="form-control"
              value={data.customerService}
              onChange={handleInputChange}
              required
            />
          </div> */}

<div>
            <label htmlFor="customerService">Service:</label>
            <select
              id="customerService"
              name="customerService"
              className="form-control"
              value={data.customerService}
              // onChange={handleInputChange}
              onChange={(e) => setData({ ...data, customerService: e.target.value })}
             
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
              value={data.appointmentTime}
              // onChange={handleInputChange}
              onChange={(e) => setData({ ...data, appointmentTime: e.target.value })}
              required
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
