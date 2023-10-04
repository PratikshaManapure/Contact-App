import './ContactCard.css'

export default function ContactCard({name, mobile, email, deleteContact, enableEditMode, index}) {

    return (
        <div className='contact-card'>
            <p className='contact-name m-5'>👤 {name}</p>
            <p className='contact-mobile m-5'>📞 {mobile}</p>
            <p className='contact-email m-5'>✉️ {email}</p>
            <span className='icon-delete-contact' 
            onClick={() => {
                deleteContact(mobile)
            }}>🗑️</span>
            <span className='icon-edit-contact' 
            onClick={() => {
                enableEditMode(index)
            }}>🖋️</span>
        </div>
    )
}