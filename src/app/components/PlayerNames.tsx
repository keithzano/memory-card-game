import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { Player } from "../utils/Types";

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
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Panel className="bg-white rounded-lg p-6">
          <Dialog.Title className="text-lg font-medium">Enter Player Names</Dialog.Title>
          <div className="mt-4">
            <input
              type="text"
              value={player1Name}
              onChange={(e) => setPlayer1Name(e.target.value)}
              placeholder="First Name"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
            <input
              type="text"
              value={player2Name}
              onChange={(e) => setPlayer2Name(e.target.value)}
              placeholder="Last Name"
              className="block mt-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mt-4 flex justify-end">

            <button
              className={`ml-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 ${!(player2Name && player2Name) && 'opacity-50 cursor-not-allowed'}`}
              onClick={handleDeactivate}
              disabled={!player1Name || !player2Name}
            >
              Lets Play
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};


