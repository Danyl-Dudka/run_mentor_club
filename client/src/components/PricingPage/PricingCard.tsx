import { useState } from "react";
import type { PriceProps } from "../types";
import './pricingPage.css'
import { Button } from "antd";
export default function PricingCard({ title, description, amount, price, background }: PriceProps) {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped)
    }
    return (
        <div
            className={`pricing_card ${flipped ? 'flipped' : ''}`}
            style={!flipped ? {
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                mixBlendMode: 'luminosity'
            } : undefined}
            onClick={handleClick}
        >
            {!flipped ? (
                <div className="pricing_button">
                    <Button className="pricing_card_button">{title}</Button>
                </div>
            ) : (
                <div className="cards_detais">
                    <div className="details_wrapper">
                        <span className="amount_details">{amount}</span>
                        <span className="description_details">{description}</span>
                        <span className="price_details">{price}</span>
                    </div>
                </div>
            )}
        </div>
    )
}
