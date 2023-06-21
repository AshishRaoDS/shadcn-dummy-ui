/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import Image from "next/image";

type Game = {
  id: string,
  background_image: string,
  name: string,
  rating: number;
};

const getGames = async (): Promise<Game[]> => {
  const result = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWDG_API_KEY}`);
  if (!result.ok) {
    throw new Error('Something went wrong');
  }
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = await result.json();
  return data?.results;
};


export default async function Home() {

  const games = await getGames();
  return (
    <main className="m-24 rounded-md grid grid-cols-4 gap-12">
      {
        games.map((game) => {
          return <div key={game.id} className="ng-white p-8 col-span-4 md:col-span-2">
            <h1>{game.name}</h1>
            <p className="font-bold text-sm mb-4">{game.rating}</p>
            <div className="relative aspect-video">
              <Image
                src={game.background_image}
                fill
                className="object-cover rounded-md"
                alt={game.name}
              />
            </div>
          </div>;
        })
      }
    </main>
  );
}


