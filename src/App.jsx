import "./App.css";
import contactsData from './contacts.json'
import { useState } from "react";
//const first5cContacts =[[contactsData[0], contactsData[1]], contactsData[2], contactsData[3], contactsData[4]]
const selectedElements = [contactsData[0], contactsData[1], contactsData[2], contactsData[3], contactsData[4]];
function App() {
  const [contacts, setContacts] = useState(selectedElements);
  const addRandomContact = () => {
    const contactsCopy = [...contacts]
    const i = Math.floor(Math.random() * contactsData.length)
    if (!contactsCopy.includes(contactsData[i])) { contactsCopy.push(contactsData[i]) }
    setContacts(contactsCopy)
  }

  const SortByName = () => {
    const contactsCop2 = [...contacts]
    contactsCop2.sort((a, b) => a.name.localeCompare(b.name))
    setContacts(contactsCop2)
  }

  const SortbyPopularity = () => {
    const contactsCopy1 = [...contacts]
    contactsCopy1.sort((a, b) => b.popularity - a.popularity)
    setContacts(contactsCopy1)
  }

  const deleteContacrt = (contactId) => {
    const filterdContacts= contacts.filter
    ((eachContact)=>{
      return eachContact.id!==contactId
    })
    setContacts(filterdContacts)
  }


  //const hasOscars = (oscars)=>{
  //if (wonOscar) {
  //return "🏆"
  //}
  //}
  //const hasEmmy = (Emmy)=>{
  //if (wonEmmy) {
  //return "🌟"
  //}
  //}
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>
        Add random contact</button>
      <button onClick={SortbyPopularity}>
        Sort by popularity</button>
      <button onClick={SortByName}>
        Sort by name</button>
      <table>
        <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Popularity</td>
          <td>Won an Oscar</td>
          <td>Won an Emmy</td>
          <td>Actions</td>
        </tr>
        {contacts.map((eachContact) => {
          return (<tr key={eachContact.id}>
            <td className="contact"  >
              <img className="profile-pic" src={eachContact.pictureUrl} />
            </td>
            <td className="contact">
              {eachContact.name}
            </td>
            <td className="contact">
              {eachContact.popularity}
            </td>
            <td className="contact">
              {eachContact.wonOscar && "🏆"}
            </td>
            <td className="contact">
              {eachContact.wonEmmy && "🌟"}
            </td>
            <td>
            <button onClick={()=>deleteContacrt(eachContact.id)} >
            Delete</button>
            </td>
          </tr>)
        })}
      </table>
    </div>
  );
}

export default App;
