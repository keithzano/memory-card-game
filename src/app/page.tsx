'use client'
import { Deck } from "./components/Deck";

export default function Home() {
  return (
    <main className=" max-w-[1440px] mx-auto max-h-[1024]  " style={{ backgroundImage: 'url(/images/Background.png)' }} >
      <Deck/>
    </main>
  );
}
