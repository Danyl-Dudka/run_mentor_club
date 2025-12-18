import { Button, Input, Spin } from 'antd';
import './contactPage.css';
import ScrollToAbout from '../NavigationFunctions/ScrollToAbout';
import ScrollToPrice from '../NavigationFunctions/ScrollToPrice';
import ScrollToFaq from '../NavigationFunctions/ScrollToFaq';
import ScrollToContact from '../NavigationFunctions/ScrollToContact';
import emailjs from 'emailjs-com';
import { contactSchema } from '../validationSchemas/contactSchema';
import * as Yup from 'yup';
import { useState } from 'react';
import NavigateToInstagram from '../NavigationFunctions/NavigateToInstagram';
import NavigateToTelegram from '../NavigationFunctions/NavigateToTelegram';
import NavigateToLinkedin from '../NavigationFunctions/NavigateToLinkedin';
export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});
        try {
            await contactSchema.validate({ name, email, phoneNumber }, { abortEarly: false });

            await emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target as HTMLFormElement,
                import.meta.env.VITE_PUBLIC_KEY
            );
            setName('');
            setEmail('');
            setPhoneNumber('');
            setIsSubmitted(true);
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const newErrors: Record<string, string> = {};
                error.inner.forEach((error) => {
                    if (error.path) newErrors[error.path] = error.message;
                })
                setErrors(newErrors)
            } else {
                console.log(error)
            }
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div className="contact_page_wrapper" id='contact_page'>
            {isLoading && (
                <div className='loading_overlay'>
                    <Spin size="large" tip="Sending..." />
                </div>
            )}
            <div className='upper_part_contact_page'>
                <div className='img_block_contact'>
                    <img src="/images/contact_page_img.jpg" alt="contacts_page_image" className='img_contact' />
                </div>
                <div className='form_contact'>
                    <div className='contact_titles'>
                        <span className='first_title_contact'>ARE YOU READY TO RUN WITH ME?</span>
                        <span className='second_title_contact'>YOUR GOAL IS MY FOCUS</span>
                    </div>
                    {isSubmitted ? (
                        <div className='submitted_results fade_in'>
                            <h2 className='submitted_title'>Thank you!</h2>
                            <p className='submitted_text'>Your message has been sent successfully.<br />
                                I’ll get back to you as soon as possible!
                            </p>
                        </div>
                    ) : (
                        <form className='form_inputs' onSubmit={handleSubmit}>
                            <div className='form_inputs'>
                                <div className='form_input_wrapper'>
                                    <Input name='name' value={name} className='contact_input' variant='borderless' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                                    {errors.name && <div className='error_text'>{errors.name}</div>}
                                </div>
                                <div className='form_input_wrapper'>
                                    <Input name='email' value={email} className='contact_input' variant='borderless' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                                    {errors.email && <div className='error_text'>{errors.email}</div>}
                                </div>
                                <div className='form_input_wrapper'>
                                    <Input name='phoneNumber' value={phoneNumber} className='contact_input' variant='borderless' placeholder='Phone number' onChange={(e) => setPhoneNumber(e.target.value)} />
                                    {errors.phoneNumber && <div className='error_text'>{errors.phoneNumber}</div>}
                                </div>
                            </div>
                            <Button className='contact_submit_button' htmlType='submit' loading={isLoading}>{isLoading ? 'Sending...' : 'SUBMIT'}</Button>
                        </form>
                    )}
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
