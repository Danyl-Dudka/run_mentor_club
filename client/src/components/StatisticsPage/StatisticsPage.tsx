import './statisticsPage.css'
export default function StatisticsPage() {
    return (
        <div className='statistics_page_wrapper'>
            <div className='stat_title'>
                <span className='stat_title_first_part'>YOUR <span className='yellow_word'>RUNNING</span></span>
                <span className='stat_title_second_part'>JOURNEY <span className='yellow_word'>STARTS</span> HERE</span>
            </div>
            <div className='stats_wrapper'>
                <div className='stats_amount'>
                    <ul className='stats_block_ul'>
                        <li className='stats_li_element'>
                            <span className='stats_amount_element'>24/7</span>
                            <p className='stats_description_element'>Community support and guidance</p>
                        </li>
                        <li className='stats_li_element'>
                            <span className='stats_amount_element'>98%</span>
                            <p className='stats_description_element'>Report improved endurance and motivation <br />Feeling stronger and more confident</p>
                        </li>
                        <li className='stats_li_element'>
                            <span className='stats_amount_element'>1500+ km</span>
                            <p className='stats_description_element'>Logged together in the past year</p>
                        </li>
                        <li className='stats_li_element'>
                            <span className='stats_amount_element'>30+</span>
                            <p className='stats_description_element'>Personalazied mentorship plans created <br />I’m ready to support your journey</p>
                        </li>
                    </ul>
                </div>
                <div className='img_block_stats'>
                    <img className="img_stats" src="/run_mentor_club/images/stats_img.jpg" alt="running_girl" />
                </div>
            </div>
        </div>
    )
}
