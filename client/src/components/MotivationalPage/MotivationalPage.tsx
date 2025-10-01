import { Button } from 'antd'
import './motivationalPage.css'
export default function MotivationalPage() {
    return (
        <div className="motivational_page_wrapper">
            <div className='motivational_title'>
                <span className='first_part_motivational_title'>I’M NOT A PROFESSIONAL ATHLETE</span>
                <span className='second_part_motivational_title'>I’M <span className='yellow_word'>JUST</span> LIKE YOU.</span>
            </div>
            <div className='motivational_first_description'>
                <p className='descr_about'>
                    You don’t need to be fast.
                    <br />
                    You don’t need to be perfect.
                    <br />
                    You just need to start.
                    <br />
                    And I’ll be here to guide you, push you and remind you of your strength every step of the way.
                    <br />
                    Running will become a part of you something real, something powerful.
                </p>
            </div>
            <div className='motivational_second_description'>
                <p>Together we’re building a safe and supportive space where everyone can grow at their own pace.
                    Running it’s a lifestyle.</p>
            </div>
            <div className='contact_me_button_mp'>
                <Button className='contact_me_btn'>CONTACT ME</Button>
            </div>
        </div>
    )
}
