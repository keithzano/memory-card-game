import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { Player } from "../utils/Types";
import Image from "next/image";

interface PlayerNamesProps {
  onSubmit: (player1Name: string, player2Name: string) => void;
}

export const PlayerNames: React.FC<PlayerNamesProps> = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [player1Name, setPlayer1Name] = useState<string>("");
  const [player2Name, setPlayer2Name] = useState<string>("");

  const handleDeactivate = () => {
    if (player1Name && player2Name) {
      onSubmit(player1Name, player2Name);
      setIsOpen(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => (false)}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
        <Dialog.Panel className="bg-blue-500 rounded-lg p-6 ">
        <div className="flex flex-col gap-8 items-center justify-center min-h-screen">
  <Dialog.Title className="text-4xl text-white font-medium text-center">Are you ready to play?</Dialog.Title>

  <section className="flex gap-20 min-w-[814px] justify-center">
    <div className="flex flex-col gap-6 justify-between">
      <Image
        src='/images/player_1_avatar.png'
        width={180}
        height={222}
        alt="Player 1 avatar"
      />
      <input
        type="text"
        value={player1Name}
        onChange={(e) => setPlayer1Name(e.target.value)}
        placeholder="First Name"
        className="block w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        required
      />
    </div>

    <div className="flex flex-col gap-6 justify-between">
      <Image
        src='/images/player_2_avatar.png'
        width={180}
        height={222}
        alt="Player 2 avatar"
      />
      <input
        type="text"
        value={player2Name}
        onChange={(e) => setPlayer2Name(e.target.value)}
        placeholder="First Name"
        className="block w-full p-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        required
      />
    </div>
  </section>

  <div className="mt-4 flex justify-center">
    <button
      className={`  px-6 py-2  font-medium text-white text-3xl bg-emerald-500 rounded-md hover:bg-emerald-700 ${!(player2Name && player2Name) && 'opacity-50 cursor-not-allowed'}`}
      onClick={handleDeactivate}
      disabled={!player1Name || !player2Name}
    >
     {"Let's Play"} 
    </button>
  </div>
</div>

        </Dialog.Panel>
    </Dialog>
  );
};


