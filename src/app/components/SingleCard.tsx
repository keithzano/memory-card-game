import Image from "next/image"
import { Card } from "../utils/Types"

export const SingleCard = ({card, handleChoice}: {card:Card; handleChoice:any})=>{

    const handleCardClick = () => {
        handleChoice(card)
    }

    return (
        <div>
            <Image
                src={`/images/cards/${card.rank}_of_${card.suit}.png`}
                alt={`/images/cards/${card.rank}_of_${card.suit}`}
                width={72}
                height={112}
            />
            <Image
                src={"/images/cards/card_back.png"}
                alt={ "back of the card"}
                width={72}
                height={112}
                onClick={handleCardClick}
            />
        </div>
    )
}