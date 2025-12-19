import './biographyPage.css'
export default function BiographyPage() {
    return (
        <div className="biography_page_wrapper" id='about_page'>
            <div className="first_block_biography">
                <div className='images_block_bio'>
                    <img src="/images/biography_page_img_1.jpg" alt="image_one" className="image_bio" />
                    <img src="/images/biography_page_img_2.jpg" alt="image_two" className="image_bio" />
                    <p className='images_description'>Run Mentor Club is more than just running. </p>
                </div>
                <div className='running_description'>
                    <p className='paragraph_description'>This running community was born from a deep love for the run and a strong belief that it can change lives.</p>
                    <p className='paragraph_description last_section'>Running changed everything for me.
                        It clears my head, resets my focus and fills me with energy to chase what matters. It taught me discipline, resilience and how to keep going no matter what.</p>
                </div>
                <div className='right_block'>
                    <img src="/images/biography_page_img_3.jpg" alt="image_three" className="image_bio" />
                </div>
            </div>
            <div className="owner_biography">
                <p className='biography_white_description'>MY NAME IS <span className='second_part_description'>DANYL,</span></p>
                <p className='biography_white_description'>I’M UKRAINIAN <span className='second_row'><span className='yellow_part_description'>RUN</span><span className='second_part_word'>NER,</span></span></p>
                <p className='biography_white_description'><span className='yellow_white_biography'><span className='yellow_word'>MENTOR</span> <span className='and_white_word'>AND</span></span><span><span className='second_part_club_word'>CLUB</span> <span className='owner_word_last_part'>OWNER.</span></span></p>
            </div>
        </div>
    )
}
