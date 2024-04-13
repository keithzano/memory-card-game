import Image from "next/image"
import { Player } from "../utils/Types"

export const PlayerComponent = ({player, currentPlayer}:{player:Player; currentPlayer:Player}) =>{
    return(
        <div className=" max-w-[220px] max-h-[344px] flex flex-col items-stretch gap-6">
        <div className=" flex flex-col justify-center items-center rounded-lg p-7 bg-white/35 gap-4 ">
          <Image src='/images/player_1_avatar.png' width={180} height={144} alt="player 1 avator" />
          <p>{player.name}</p>
          <p>Score: {player.score}</p>
        </div>
          <button className={`bg-emerald-500 text-white rounded-lg text-lg font-bold leading-normal p-2 ${currentPlayer===player? `block`: 'hidden'} `}> It's Your Turn</button>
        </div>
    )
}