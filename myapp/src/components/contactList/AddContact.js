import React, { useState } from "react";

const AddContact= (props)=> {
  const [Input,setInput]= useState({name:"",email:""});

  const InputEvent=(e)=>{
    const {name,value}= e.target;
    setInput((preVal)=>{
      return{
        ...preVal,[name]:value
      }
    })}
    
  


   const add = (e) => {
    e.preventDefault();
    if (Input.name === "" || Input.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    props.addContactHandler(Input);
    setInput({ name: "", email: "" });
  };
  
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={Input.name}
              // onChange={(e) => setInput({ name: e.target.value })}
              onChange={InputEvent}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={Input.email}
              // onclickchange={(e) => setInput({ email: e.target.value })}
              onChange={InputEvent}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }


export default AddContact;
