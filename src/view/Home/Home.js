import React ,{ useEffect, useState } from 'react'
import './Home.css'
import ContactCard from '../../components/ContactCard/ContactCard'
import showToast from 'crunchy-toast';

//#ff6699-medium
//#ffe6ee-low
//#ff3377-high

export default function Home(){
    const [contacts ,setContacts] = useState([
        {
            name : "Pratiksha",
            mobile : "9503300570",
            email : "pratiksha@gmail.com"
        }
    ])

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [editIndex, setEditIndex] = useState('-1');
    const [isEditMode, setIsEditMode] = useState(false);

const addContact = () => {

    if(!name){
        showToast('Name is required...', 'alert', 3000);
        return;
    }
    if(!mobile){
        showToast('Mobile is required...', 'alert', 3000);
        return;
    }
    if(!email){
        showToast('Email is required...', 'alert', 3000);
        return;
    }

    const obj = {
        name : name,
        mobile : mobile,
        email : email
    }

    const newContacts = [...contacts,obj]
    setContacts(newContacts);
    saveToLocalStorage(newContacts);

    showToast('Contact added Successfully...', 'success', 3000);

    setName('')
    setMobile('')
    setEmail('')


};

const deleteContact = (mobileNumber) => {
    let indexToBeDeleted = -1;
    contacts.forEach((contactDetail, index) => {
        if(contactDetail.mobile == mobileNumber){
            indexToBeDeleted = index;
        }
    })

    contacts.splice(indexToBeDeleted, 1);

    saveToLocalStorage(contacts);

    setContacts([...contacts])

    showToast("Contact deleted Successfully..",'success','3000')
};

const saveToLocalStorage = (contactsData)=> {
    localStorage.setItem('contacts', JSON.stringify(contactsData));
}
   
const loadFromLocalStorage = () => {
    const contactsData = JSON.parse(localStorage.getItem('contacts'));
    if(contactsData){
        setContacts(contactsData);
    }
}

const enableEditMode = (index) => {
    const contactsData = contacts[index];
    setName(contactsData.name);
    setMobile(contactsData.mobile);
    setEmail(contactsData.email);
    setEditIndex(index);
    setIsEditMode(true);
}

const editContact = () =>{
    const obj = {
        name :name,
        mobile : mobile,
        email : email
    }

    contacts[editIndex] = obj;
    setContacts([...contacts]);
    saveToLocalStorage(contacts);

    showToast('Contact Edited Successfully','success',3000);

    setName('');
    setEmail('');
    setMobile('');

    setIsEditMode(false);
}

useEffect(() => {
    loadFromLocalStorage();
},[])

    return(
        <div>
            <h1 className='app-heading'>📞 Contact App</h1>
            <div className='app-body'>
                <div className='contacts-container'>
                    <h2 className='app-subheading'>Contact List</h2>
                    {
                        contacts.map((contact, index) => {
                            return(
                                <ContactCard key={index}
                                name={contact.name}
                                mobile={contact.mobile}
                                email={contact.email}
                                deleteContact={deleteContact}
                                enableEditMode={enableEditMode}
                                index={index}/>
                            )
                        })
                    }
                </div>
                <div className='add-contacts-container'>
                    <h2 className='app-subheading'>
                        {isEditMode ? 'Edit Contact' : 'Add Contact'}
                    </h2>
                    <div>
                        <form>
                            <input
                            className='input-field' 
                            type='email' 
                            placeholder='Name'  
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            />

                            <input 
                            className='input-field' 
                            type='text' 
                            placeholder='Mobile' 
                            value={mobile}
                            onChange={(e) => {
                                setMobile(e.target.value)
                            }}
                            />

                            <input 
                            className='input-field' 
                            type='email' 
                            placeholder='Email' 
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            />

                            <button 
                            className='add-btn' 
                            type='button' 
                            onClick={() => {
                                isEditMode ? editContact() : addContact();
                            }}>
                                {isEditMode ? 'Edit Contact' : 'Add Contact'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}