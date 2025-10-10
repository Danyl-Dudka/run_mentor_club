import { Button } from 'antd'
import './mainPageBody.css'
import ScrollToAbout from '../../NavigationFunctions/ScrollToAbout'

export default function MainPageBody() {
  return (
    <div>
      <div className='main_title'>
        <span className='main_title_span'>RUN</span>
        <span className='main_title_span'>MENTOR</span>
        <span className='main_title_span'>CLUB</span>
      </div>
      <div className='lower_part_body'>
        <p className='body_description'>
          Every runner needs a guide.
          <br />
          Unlock your potential with expert mentorship
          and a powerful running community
        </p>
        <Button className='get_started_button' onClick={ScrollToAbout}>GET STARTED</Button>
      </div>
    </div>
  )
}
