import './ContactCard.css'

export default function ContactCard({name, mobile, email}) {

    return (
        <div className='contact-card'>
            <p className='contact-name m-5'>👤 {name}</p>
            <p className='contact-mobile m-5'>📞 {mobile}</p>
            <p className='contact-email m-5'>✉️ {email}</p>
        </div>
    )
}