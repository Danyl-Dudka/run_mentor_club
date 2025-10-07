import Accordion from './Accordion';
import './faqPage.css';

export default function FaqPage() {
    const accordions = [
        {
            number: '01',
            title: 'DO I NEED TO BE FAST TO JOIN THE CLUB?',
            description: <>
                We welcome runners of all levels - beginners, intermediate and experienced. <br />
                Our goal is to make running enjoyable for everyone.</>,
        },
        {
            number: '02',
            title: 'WHERE DO YOU USUALLY RUN?',
            description: 'We usually run in Woolwich Dam',
        },
        {
            number: '03',
            title: 'WHAT DO I NEED TO BRING WITH ME?',
            description: <>Just wear comfortable running clothes and shoes. <br />
                A water bottle and a positive attitude.</>
        },
        {
            number: '04',
            title: 'CAN I CANCEL MY MEMBERSHIP?',
            description: 'You can cancel your membership anytime.',
        },
    ];
    return (
        <div className="faq_page_wrapper" id='faq_page'>
            <div className='faq_page_title'>
                <span className='faq_title'>FAQ /</span>
            </div>
            <div className='accordions'>
                {accordions.map((acc, index) => (
                    <Accordion
                        key={index}
                        number={acc.number}
                        title={acc.title}
                        description={acc.description}
                    />
                ))}
            </div>
        </div>
    )
}
