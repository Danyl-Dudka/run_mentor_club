import { Button } from 'antd'
import './mainPageHeader.css'

export default function MainPageHeader() {
  const scrollToAbout = () => {
    const aboutPage = document.getElementById('about_page');
    aboutPage?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPrice = () => {
    const pricePage = document.getElementById('pricing_page');
    pricePage?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToFaq = () => {
    const faqPage = document.getElementById('faq_page');
    faqPage?.scrollIntoView({ behavior: 'smooth' })
  };

  const scrollToContact = () => {
    const contactPage = document.getElementById('contact_page');
    contactPage?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className='header_elements'>
      <div className='navigation_block'>
        <ul className='nav_links'>
          <li onClick={scrollToAbout}>About</li>
          <li onClick={scrollToPrice}>Pricing</li>
          <li onClick={scrollToFaq}>FAQ</li>
          <li onClick={scrollToContact}>Contact</li>
        </ul>
        <ul className='nav_links'>
          <li>Instagram</li>
          <li>Telegram</li>
          <li>Linkedin</li>
        </ul>
      </div>
      <Button
        variant='outlined'
        className='contact_button_header'
      >CONTACT</Button>
    </div>
  )
}
