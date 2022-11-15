import React, { useEffect, useState } from "react";

const Form = () => {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("registrd");
  }, [flag]);
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("pleae enter th dagta");
    } else {
      setFlag(true);
    }
  }
  return (
    <>
      <pre>
        {flag ? (
          <h2 className="ui-define">
            hello{inputData.name},you have registration succsessfully
          </h2>
        ) : (
          ""
        )}
      </pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Registration form</h1>
        </div>
        <div>
          <input
            type="text"
            value={inputData.name}
            onChange={handleData}
            placeholder="enter your name"
            name="name"
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={inputData.email}
            onChange={handleData}
            placeholder="enter your email"
            name="email"
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={inputData.pass}
            onChange={handleData}
            placeholder="enter your password"
            name="password"
          ></input>
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
