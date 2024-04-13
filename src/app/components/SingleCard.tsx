import Image from "next/image"
import { Card } from "../utils/Types"

export const SingleCard = ({card, handleChoice, flipped}: {card:Card; handleChoice:any; flipped:boolean})=>{

    const handleCardClick = () => {
        handleChoice(card)
    }

    return (
        <div className="relative">
            <div className={flipped? 'flipped': ''}>
                <Image
                    src={`/images/cards/${card.rank}_of_${card.suit}.png`}
                    alt={`/images/cards/${card.rank}_of_${card.suit}`}
                    width={72}
                    height={112}
                    className="front"
                />
                <Image
                    src={"/images/cards/card_back.png"}
                    alt={ "back of the card"}
                    width={72}
                    height={112}
                    onClick={handleCardClick}
                    className="back"
                />
            </div>
        </div>
    )
}