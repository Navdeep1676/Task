import { useState } from "react";
import axios from "axios";
const Register=()=>{
    const [regdata, setRegdata] = useState({
        first_name: "",
        last_name: "",
        email: "",
        pass: "",
        term: "",
      });
      const handleChange = (evt) => {
        const name = evt.target.name;
        let value = "";
        if (
          evt.target.type === "text" ||
          evt.target.type === "password" ||
          evt.target.type === "email"
        ) {
          value = evt.target.value;
        }
        if (evt.target.type === "checkbox") {
          value = evt.target.checked;
        }
    
        setRegdata({ ...regdata, [name]: value });
      };
      const handleSubmit = (evt) => {
        evt.preventDefault();
    
        
        axios
          .post("http://campshala.nativedevelopers.in/api/auth/register", {
            first_Name: regdata.first_name,
            last_Name: regdata.last_name,
            email: regdata.email,
            password: regdata.pass,
            term: regdata.term,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
    
      return (
       
              <div className="bg-info">
                <form onSubmit={handleSubmit} className="p-3">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="first_name"
                    value={regdata.first_name}
                    onChange={(evt) => {
                      handleChange(evt);
                    }}
                  />
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    className="form-control"
                    required
                    value={regdata.last_name}
                    onChange={(evt) => {
                      handleChange(evt);
                    }}
                  />
                  <label htmlFor="">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={regdata.email}
                    className="form-control"
                    required
                    onChange={(evt) => {
                      handleChange(evt);
                    }}
                  />
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name="pass"
                    value={regdata.pass}
                    className="form-control"
                    required
                    onChange={(evt) => {
                      handleChange(evt);
                    }}
                  />
                  <label htmlFor="">Aceept Term and Conditions</label>
                  <input
                    type="checkbox"
                    name="term"
                    value={regdata.term}
                    required
                    onChange={(evt) => {
                      handleChange(evt);
                    }}
                  />
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-success my-1 d-block"
                  />
                </form>
              </div>
          
      );
}
export default Register