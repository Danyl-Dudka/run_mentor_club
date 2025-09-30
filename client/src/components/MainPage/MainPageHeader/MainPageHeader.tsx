import { Button } from 'antd'
import './mainPageHeader.css'

export default function MainPageHeader() {
  return (
    <div className='header_elements'>
      <div className='navigation_block'>
      <ul className='nav_links'>
        <li>About</li>
        <li>Pricing</li>
        <li>FAQ</li>
        <li>Contact</li>
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
