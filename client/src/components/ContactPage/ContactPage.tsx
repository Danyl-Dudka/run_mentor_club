import { Button, Input } from 'antd';
import './contactPage.css';
import ScrollToAbout from '../NavigationFunctions/ScrollToAbout';
import ScrollToPrice from '../NavigationFunctions/ScrollToPrice';
import ScrollToFaq from '../NavigationFunctions/ScrollToFaq';
import ScrollToContact from '../NavigationFunctions/ScrollToContact';
export default function ContactPage() {

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
                    <div className='form_inputs'>
                        <Input className='contact_input' variant='borderless' placeholder='Name' />
                        <Input className='contact_input' variant='borderless' placeholder='Email' />
                        <Input className='contact_input' variant='borderless' placeholder='Phone number' />
                    </div>
                    <Button className='contact_submit_button'>SUBMIT</Button>
                    <div className='navigation_contacts_block'>
                        <ul className='nav_links_contacts'>
                            <li onClick={ScrollToAbout} className='li_link_contacts'>About</li>
                            <li onClick={ScrollToPrice} className='li_link_contacts'>Pricing</li>
                            <li onClick={ScrollToFaq} className='li_link_contacts'>FAQ</li>
                            <li onClick={ScrollToContact} className='li_link_contacts'>Contact</li>
                        </ul>
                        <ul className='social_media_links_contacts'>
                            <li className='li_link_contacts'>Instagram</li>
                            <li className='li_link_contacts'>Telegram</li>
                            <li className='li_link_contacts'>LinkedIn</li>
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
