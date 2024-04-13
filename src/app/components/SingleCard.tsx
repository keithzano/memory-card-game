import Image from "next/image"
import { Card } from "../utils/Types"

export const SingleCard = ({card, handleChoice, flipped, disabled}: {card:Card; handleChoice:any; flipped:boolean; disabled:boolean})=>{

    const handleCardClick = () => {
        if(!disabled)handleChoice(card)
    }

    return (
        <div className="relative">
            <div className={` ${flipped? 'flipped': ''} ${card.matched? 'opacity-0 cursor-not-allowed' : ''} ${flipped|| disabled? 'cursor-not-allowed': ''} `} >
                <Image
                    src={`/images/cards/${card.rank}_of_${card.suit}.png`}
                    alt={`/images/cards/${card.rank}_of_${card.suit}`}
                    width={72}
                    height={112}
                    className="front"
                />
                <Image
                    src={"/images/cards/card_back.png"}
                    //src={`/images/cards/${card.rank}_of_${card.suit}.png`}
                    alt={ "back of the card"}
                    width={72}
                    height={112}
                    onClick={!card.matched? handleCardClick : undefined}
                    className="back"
                />
            </div>
        </div>
    )
}