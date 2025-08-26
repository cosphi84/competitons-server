import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function Home() {
  return (
    <div className="container mx-auto w-[975px] text-white justify-between bg-[url(/background.jpg)] bg-center p-3">
      <main className="container mx-auto flex flex-col h-dvh bg-gray-400/30 rounded-xl gap-5">
        <div className="flex flex-col bg-red-600/70 gap-5 shadow-2xl shadow-black rounded-md">
          <h1 className="font-extrabold text-8xl text-center justify-between pt-3 font-mono">00:00:00</h1>
          <button className="bg-green-600 hover:bg-green-400 border-2 rounded-lg p-3 m-3 cursor-pointer text-5xl font-mono">GO!</button>
        </div>
        <div className="flex flex-col w-full items-center">
          <table className="table-auto w-11/12 bg-red-800/50 border text-2xl font-bold">
            <thead>
              <tr>
                <th className="w-1/6 border">#</th>
                <th className="w-3/6 border">Nama Peserta</th>
                <th className="w-2/6 border">Waktu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-1/6 text-center border-r px-2">1</td>
                <td className="w-3/6 border-r px-2">Peserta 1</td>
                <td className="w-2/6 border-r px-2">00:36:56</td>
              </tr>
              <tr>
                <td className="w-1/6 text-center border-r px-2">2</td>
                <td className="w-3/6 border-r px-2">Peserta 2</td>
                <td className="w-2/6 border-r px-2">00:40:56</td>
              </tr>
              <tr>
                <td className="w-1/6 text-center border-r px-2">3</td>
                <td className="w-3/6 border-r px-2">Peserta 3</td>
                <td className="w-2/6 border-r px-2">00:41:56</td>
              </tr>
              <tr>
                <td className="w-1/6 text-center border-r px-2">4</td>
                <td className="w-3/6 border-r px-2">Peserta 4</td>
                <td className="w-2/6 border-r px-2">00:45:56</td>
              </tr>
              <tr>
                <td className="w-1/6 text-center border-r px-2">5</td>
                <td className="w-3/6 border-r px-2">Peserta 5</td>
                <td className="w-2/6 border-r px-2">00:50:56</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </main>
      <footer className="bg-amber-700 rounded-md p-1 m-1">
        <div>
          <Link href="/peserta">Peserta</Link>
        </div>
      </footer>
    </div>
  );
}
