import { useState } from 'react';
import type { AccordionProps } from '../types'
import './accordion.css';

export default function Accordion({ number, title, description }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleAccordionOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className='accordion_item'>
            <div className='accordion_content' onClick={handleAccordionOpen}>
                <span className='number_of_accordion'>{number}</span>
                <span className='accordion_title'>{title}</span>
                <span className={`accordion_icon ${isOpen ? 'open' : ''}`}>{isOpen ? '×' : '+'}</span>
            </div>
            <div className={`accordion_description${isOpen ? ' open' : ''}`}>
            {isOpen ? (
                <span className='acc_description'>{description}</span>
            ) : ''}
        </div>
        </div >
    )
}
