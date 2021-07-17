import { useState } from "react";
const Login = () => {
  const [logdata, setLogdata] = useState({ email: "", pass: "" });
  const [login,setLogin]=useState(false)

  const handleChange = (evt) => {
    let name = evt.target.name;
    let value = evt.target.value;
    setLogdata({ ...logdata, [name]: value });
    console.log(logdata);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = { email:logdata.email,password:logdata.pass };

    fetch("http://campshala.nativedevelopers.in/api/auth/login", {
     
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if(data.status===0){
          alert('Please Enter Valid Password')
        }
        else{
          setLogin(true)
          if(login===true){
            alert('login successfully')
          }
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="bg-info">
      <form onSubmit={handleSubmit} className="p-3">
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          value={logdata.email}
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
          value={logdata.pass}
          className="form-control"
          required
          onChange={(evt) => {
            handleChange(evt);
          }}
        />
        <input type="submit" className='btn btn-success my-1' value="login" />
      </form>
    </div>
  );
};
export default Login;
