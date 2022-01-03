import React from "react"
import './Demo.css'
function Demoedit({ editcontact, handlechangeedit, save }) {

  return (
    <div>
      <tr>
        <td>
          <input
            type="text"
            name="fullName"
            required="required"
            placeholder="Enter a name..."
            value={editcontact.fullName}
            onChange={handlechangeedit}
          />
        </td>
        <td>
          <input
            type="text"
            name="address"
            required="required"
            placeholder="Enter an addres..."
            value={editcontact.address}
            onChange={handlechangeedit}
          />
        </td>
        <td>
          <input
            type="text"
            name="phoneNumber"
            required="required"
            placeholder="Enter a phone number..."
            value={editcontact.phoneNumber}
            onChange={handlechangeedit}
          />
        </td>
        <td>
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Enter an email..."
            value={editcontact.email}
            onChange={handlechangeedit}
          />
        </td>
        <td> <button type="submit" onClick={save}>Save</button></td>
      </tr>
    </div>
  );


}

export default Demoedit
