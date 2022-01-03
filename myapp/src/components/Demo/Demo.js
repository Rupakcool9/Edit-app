import React, { useState } from 'react'
import './Demo.css'
import { nanoid } from "nanoid";
import Demoedit from './Demoedit';


function Demo() {
  const [Input, setInput] = useState({
    fullName: "", address: "", phoneNumber: "", email: "",
  });
  const [contact, setcontact] = useState([]);
  const [contactid, setcontactid] = useState(null);
  const [editcontact, seteditcontact] = useState({ fullName: "", address: "", phoneNumber: "", email: "", })


  const handlechange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInput({ ...Input, [name]: value });
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      fullName: Input.fullName,
      address: Input.address,
      phoneNumber: Input.phoneNumber,
      email: Input.email,
    };
    const newContacts = [...contact, newContact];
    setcontact(newContacts);
  };
  const handleDeleteClick = (index) => {
    //  console.log('delete')
    setcontact(contact.filter((ele, id) => {
      return id !== index;
    }))
  };

  const handleEditClick = (index) => {
    setcontactid(index)
  }

  // console.log("indexjjjj",index)
  //  console.log('index',contactid,index)

  const handlechangeedit = (event) => {
    console.log('type')
    event.preventDefault();
    const { name, value } = event.target;
    seteditcontact({ ...editcontact, [name]: value });
  };

  const save = () => {
    console.log('save')
    const neweditContact = {
      id: contactid,
      fullName: editcontact.fullName,
      address: editcontact.address,
      phoneNumber: editcontact.phoneNumber,
      email: editcontact.email,
    };
    const newedit = [...contact];
    const index = contact.findIndex((contacts) => contacts.id === contactid);
    newedit[index] = neweditContact;
    setcontact(newedit);
    setcontactid(null)
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((val, index) => (
            <div>
              {contactid === val.id ?
                (
                  <Demoedit
                    editcontact={editcontact}
                    handlechangeedit={handlechangeedit}
                    save={save}


                  />) : (
                  <tr key={index}>
                    <td>{val.fullName}</td>
                    <td>{val.address}</td>
                    <td>{val.phoneNumber}</td>
                    <td>{val.email}</td>

                    <td> <button type="button" onClick={() => handleEditClick(val.id)}> Edit </button>
                      <button type="button" onClick={() => handleDeleteClick(index)}> Delete </button>
                    </td>
                  </tr>
                )}


            </div>

          ))}

        </tbody>
      </table>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit} >
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          value={Input.fullName}
          onChange={handlechange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          value={Input.address}
          onChange={handlechange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          value={Input.phoneNumber}
          onChange={handlechange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          value={Input.email}
          onChange={handlechange}
        />
        <button type="submit" >Add</button>
      </form>
    </div>

  )
}

export default Demo
