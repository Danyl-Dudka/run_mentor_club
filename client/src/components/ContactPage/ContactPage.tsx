import { Button, Input } from 'antd';
import './contactPage.css';
import ScrollToAbout from '../NavigationFunctions/ScrollToAbout';
import ScrollToPrice from '../NavigationFunctions/ScrollToPrice';
import ScrollToFaq from '../NavigationFunctions/ScrollToFaq';
import ScrollToContact from '../NavigationFunctions/ScrollToContact';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { toast } from 'react-toastify';
import NavigateToInstagram from '../NavigationFunctions/NavigateToInstagram';
import NavigateToTelegram from '../NavigationFunctions/NavigateToTelegram';
import NavigateToLinkedin from '../NavigationFunctions/NavigateToLinkedin';
export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target as HTMLFormElement,
            import.meta.env.VITE_PUBLIC_KEY
        )
            .then(() => {
                toast.success('Success! Your contact request has been submitted.')
                setTimeout(() => {
                    setName('');
                    setEmail('');
                    setPhoneNumber('');
                    window.scrollTo({ top: 0, behavior: 'smooth' });;
                }, 1500)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
        <div className="contact_page_wrapper" id='contact_page'>
            <div className='upper_part_contact_page'>
                <div className='img_block_contact'>
                    <img src="/images/contact_page_img.jpg" alt="contacts_page_image" className='img_contact' />
                </div>
                <div className='form_contact'>
                    <div className='contact_titles'>
                        <span className='first_title_contact'>ARE YOU READY TO RUN WITH ME?</span>
                        <span className='second_title_contact'>YOUR GOAL IS MY FOCUS</span>
                    </div>
                    <form className='form_inputs' onSubmit={handleSubmit}>
                        <div className='form_inputs'>
                            <Input name='name' value={name} className='contact_input' variant='borderless' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                            <Input name='email' value={email} className='contact_input' variant='borderless' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            <Input name='phoneNumber' value={phoneNumber} className='contact_input' variant='borderless' placeholder='Phone number' onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                        <Button className='contact_submit_button' htmlType='submit'>SUBMIT</Button>
                    </form>

                    <div className='navigation_contacts_block'>
                        <ul className='nav_links_contacts'>
                            <li onClick={ScrollToAbout} className='li_link_contacts'>About</li>
                            <li onClick={ScrollToPrice} className='li_link_contacts'>Pricing</li>
                            <li onClick={ScrollToFaq} className='li_link_contacts'>FAQ</li>
                            <li onClick={ScrollToContact} className='li_link_contacts'>Contact</li>
                        </ul>
                        <ul className='social_media_links_contacts'>
                            <li onClick={NavigateToInstagram} className='li_link_contacts'>Instagram</li>
                            <li onClick={NavigateToTelegram} className='li_link_contacts'>Telegram</li>
                            <li onClick={NavigateToLinkedin} className='li_link_contacts'>LinkedIn</li>
                        </ul>
                        <ul className='author_info_contacts'>
                            <li className='li_info_contacts'>danyad.stokes@gmail.com</li>
                            <li className='li_info_contacts'>(437)-660-71-53</li>
                            <li className='li_info_contacts'>62B Centre st. Elmira</li>
                            <li className='li_info_contacts'>ON, Canada</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='lower_part_contact_page'>
                <span className='title_contacts_page'>RUN MENTOR CLUB</span>
            </div>
        </div>
    )
}
