import React ,{ useState } from 'react'
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

const addContact = () => {
    const obj = {
        name : name,
        mobile : mobile,
        email : email
    }

    setContacts([...contacts, obj]);

    showToast('Contact added Successfully...', 'success', 3000);

    setName('')
    setMobile('')
    setEmail('')

};
    
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
                                email={contact.email}/>
                            )
                        })
                    }
                </div>
                <div className='add-contacts-container'>
                    <h2 className='app-subheading'>Add Contacts</h2>
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
                            onClick={addContact}>Add Contact</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}