import './pricingPage.css'
import PricingCard from './PricingCard';
export default function PricingPage() {
    const cards = [
        {
            title: '02. Weekends long run',
            amount: '10 km',
            description: <>
                Weekend ritual <br />
                Strong body <br />
                Clear mind
            </>,
            price: '$15',
            background: '/run_mentor_club/images/first_card_image.jpg',
        },
        {
            title: '01. Everyday mornings run',
            amount: '3 km',
            description: <>
                Daily energy boost <br />
                Light & consistent training <br />
                Good habit
            </>,
            price: '$10',
            background: '/run_mentor_club/images/second_card_image.jpg',
        },
        {
            title: '03. Free run with mentor',
            amount: '5 km',
            description: <>
                Personalized mentoring <br />
                Smart training strategies <br />
                Once a month
            </>,
            price: 'Free',
            background: '/run_mentor_club/images/third_card_image.jpg',
        },
    ];


    return (
        <div className="pricing_page_wrapper" id='pricing_page'>
            <div className="pricing_page_title">
                <span>MENTORSHIPS</span>
            </div>
            <div className="pricing_cards">
                {cards.map((card, index) => (
                    <PricingCard
                        key={index}
                        title={card.title}
                        amount={card.amount}
                        description={card.description}
                        price={card.price}
                        background={card.background}
                    />
                ))}
            </div >
        </div >
    )
}
