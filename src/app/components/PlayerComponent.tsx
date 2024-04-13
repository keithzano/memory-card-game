import Image from "next/image"
import { Player } from "../utils/Types"

export const PlayerComponent = ({player }:{player:Player }) =>{
    return(
      
        <div className=" flex flex-col justify-center items-center rounded-lg p-7 bg-white/35 gap-4 ">
          <Image src='/images/player_1_avatar.png' width={180} height={144} alt="player 1 avator" />
          <p>{player.name}</p>
          <p>Score: {player.score}</p>
        </div>
        
    )
}