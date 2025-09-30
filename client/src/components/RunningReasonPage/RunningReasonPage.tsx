import './runningReasonPage.css'
export default function RunningReasonPage() {
    return (
        <div className="running_reason_wrapper">
            <div className='first_block_reasons'>
                <div className='first_block_cards'>
                    <div className='yellow_card_reason'>
                        FOR YOURSELF
                    </div>
                    <div className='yellow_card_reason'>
                        FOR BALANCE
                    </div>
                </div>
                <span className='black_text_reason where'>
                    WHERE
                </span>
                <div className='yellow_card_reason freedom'>
                    FOR FREEDOM
                </div>
            </div>
            <div className='second_block_reasons'>
                <div className='yellow_card_reason'>
                    FOR COMMUNITY
                </div>
                <span className='black_text_reason are'>
                    ARE
                </span>
                <div className='yellow_card_reason mind'>
                    TO CLEAR YOUR MIND
                </div>
            </div>
            <div className='third_block_reasons'>
                <span className='black_text_reason you'>
                    YOU
                </span>
            </div>
            <div className='fourth_block_reasons'>
                <span className='black_text_reason running'>
                    RUNNING?
                </span>
            </div>
        </div>
    )
}
