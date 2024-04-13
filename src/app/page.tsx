'use client'
import { useEffect, useState } from "react";
import { Deck } from "./components/Deck";
import { PlayerComponent } from "./components/PlayerComponent";
import { Player } from "./utils/Types";
import { PlayerNames } from "./components/PlayerNames";

export default function Home() {
  const [player1, setPlayer1] = useState<Player>({ name: '', score: 0 });
  const [player2, setPlayer2] = useState<Player>({ name: '', score: 0 });
  const [currentPlayer, setCurrentPlayer] = useState<Player>({ name: '', score: 0 });

  const handlePlayerNames = (player1Name:string, player2Name:string) => {
    setPlayer1({ ...player1, name: player1Name })
    setPlayer2({ ...player2, name: player2Name })
  }

  useEffect(() => {
    setCurrentPlayer(player1); // Set current player to player1 after player1 is updated
  }, [player1]);
  const switchPlayer = ()=>{
    currentPlayer === player1? setCurrentPlayer(player2): setCurrentPlayer(player1)
  }

  return (
    <main className=" max-w-[1440px] mx-auto max-h-[1024]  " style={{ backgroundImage: 'url(/images/Background.png)' }} >
      <PlayerNames onSubmit={handlePlayerNames} />

      <div className=" flex items-center justify-center gap-8 p-6">

      <div className=" max-w-[220px] max-h-[344px] flex flex-col items-stretch gap-6  ">
        <PlayerComponent player={player1}  />
        <button className={`bg-emerald-500 text-white rounded-lg text-lg font-bold leading-normal p-2 ${currentPlayer===player1? `block`: 'hidden'} `}> It's Your Turn</button>
      </div>

          <Deck currentPlayer = {currentPlayer}  switchPlayer = {switchPlayer} />
        

        <div className=" max-w-[220px] max-h-[344px] flex flex-col items-stretch gap-6  ">
        <PlayerComponent player={player2}  />
        <button className={`bg-white text-blue-400 rounded-lg text-lg font-bold leading-normal p-2 ${currentPlayer ===player2? `block`: 'hidden'} `}> It's Your Turn</button>
        </div>

      </div>
      
    </main>
  );
}
