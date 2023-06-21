/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

const getGames = async () => {
    const result = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWDG_API_KEY}`);
    if (!result.ok) {
        throw new Error('Something went wrong');
    }

    const data = await result.json();
    return data;
};


export default async function Home() {

    await getGames();
    // console.log("game results", games?.results);
    console.log(process.env.NEXT_PUBLIC_RAWDG_API_KEY);
    return (
        <>
            <h1>Games details</h1>
        </>
    );
}


