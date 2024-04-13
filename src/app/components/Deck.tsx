import { useEffect, useState } from "react"
import { Card } from "../utils/Types";
import { SingleCard } from "./SingleCard";

export const Deck = ()=>{
    const [cards, setCards] = useState<Card[]>([])
    const [choiceOne, setChoiceOne] = useState<Card>();
    const [choiceTwo, setChoiceTwo] = useState<Card>();
    const [disabled, setDisabled] = useState<boolean>(false)

    //Initialising the Deck
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

    //Updating the state with the value for the first and secnd clicked card
    const handleChoice =(card:Card) =>{
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }

    useEffect(()=>{
        if (choiceOne && choiceTwo){
            setDisabled(true)
            if(choiceOne.color === choiceTwo.color && choiceOne.rank === choiceTwo.rank){
                // rerendering the cards to avoid mutation 
                const updatedCards = cards.map(card=>(
                    card.id === choiceOne.id || card.id === choiceTwo.id? {...card, matched:true}:card
                ));
                
                setCards(updatedCards)

            }else console.log("No match")
            setTimeout(()=>{resetTurn()},1000)
            
        }
    },[choiceOne,choiceTwo])
console.log(choiceOne, choiceTwo)

    const resetTurn = () => {
        setChoiceOne(undefined);
        setChoiceTwo(undefined);
        setDisabled(false);
    }
    return (
       <section>
        <div className="max-w-[842px] mx-auto bg-white/35 p-6 rounded-lg gap-x-5 gap-y-6 grid grid-cols-9 bg-blue-600">
            {cards.map(card=>(
            <SingleCard
                card={card}
                key={card.id}
                handleChoice= {handleChoice}
                flipped = {card === choiceOne || card === choiceTwo}
                disabled= {disabled}
            />
        ))
            }
        </div>
       </section> 
    )
}