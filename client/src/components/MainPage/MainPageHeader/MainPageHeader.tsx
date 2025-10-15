import { Button } from 'antd'
import './mainPageHeader.css'
import ScrollToAbout from '../../NavigationFunctions/ScrollToAbout';
import ScrollToPrice from '../../NavigationFunctions/ScrollToPrice';
import ScrollToFaq from '../../NavigationFunctions/ScrollToFaq';
import ScrollToContact from '../../NavigationFunctions/ScrollToContact';
import NavigateToInstagram from '../../NavigationFunctions/NavigateToInstagram';
import NavigateToTelegram from '../../NavigationFunctions/NavigateToTelegram';
import NavigateToLinkedin from '../../NavigationFunctions/NavigateToLinkedin';

export default function MainPageHeader() {
  return (
    <div className='header_elements'>
      <div className='navigation_block'>
        <ul className='nav_links'>
          <li onClick={ScrollToAbout}>About</li>
          <li onClick={ScrollToPrice}>Pricing</li>
          <li onClick={ScrollToFaq}>FAQ</li>
          <li onClick={ScrollToContact}>Contact</li>
        </ul>
        <ul className='nav_links'>
          <li onClick={NavigateToInstagram}>Instagram</li>
          <li onClick={NavigateToTelegram}>Telegram</li>
          <li onClick={NavigateToLinkedin}>Linkedin</li>
        </ul>
      </div>
      <Button
        variant='outlined'
        className='contact_button_header'
        onClick={ScrollToContact}
      >CONTACT</Button>
    </div>
  )
}
