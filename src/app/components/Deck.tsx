import { useEffect, useState } from "react"
import { Card } from "../utils/Types";

export const Deck:React.FC = ()=>{
    const [cards, setCards] = useState<Card[]>([])
    
    useEffect(()=>{
        const suits:string[] = ['hearts', 'diamonds', 'clubs', 'spades'];
        const ranks:string[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const jokers:Card[] = [{id: 53,rank: 'joker', suit: 'black', color: 'red'},{id: 54,rank: 'joker', suit: 'red', color: 'red'}];

        let deck:Card[] = [];
        let id = 1;
        for (const suit of suits){
            let color:'red' | 'black';
            if (suit === 'hearts' || suit === 'diamonds'){
                color = 'red';
            }else{
                color = 'black'
            }
            for (const rank of ranks){
                deck.push({id, suit, rank, color})
                id++
            }
        }
        deck.push(...jokers);
        // Shuffling the cards
        const shuffle = (deck:Card[]):Card[]=>{
            
            for (let i = deck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
              }
              return deck;
        }
        setCards(shuffle(deck));
    },[])

    console.log(cards)

    return (
        <></>
    )
}