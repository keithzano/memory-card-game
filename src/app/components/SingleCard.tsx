import Image from "next/image"
import { Card } from "../utils/Types"

export const SingleCard = ({card}: {card:Card})=>{
    return (
        <div>
            <Image
                src={`/images/cards/${card.rank}_of_${card.suit}.png`}
                alt={`/images/cards/${card.rank}_of_${card.suit}`}
                width={72}
                height={112}
            />
        </div>
    )
}