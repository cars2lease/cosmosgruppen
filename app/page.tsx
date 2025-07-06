import type { Metadata } from 'next'
import SquareImageBlock from "./ui/square-image";

export const metadata: Metadata = {
  title: 'Cosmos Gruppen',
  description: '...',
}

interface Block {
  label: string,
  image: string,
  text: string,
  path: string,
  hover: boolean
}

const Blocks: Array<Block> = [
  {
    label: "pårørende",
    image: "https://images.unsplash.com/photo-1514415008039-efa173293080?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Vi ved, hvor vigtigt det er, at dine nærmeste er i trygge hænder. Hos CosmosGruppen møder vi beboerne med omsorg, respekt og menneskeligt nærvær - hver dag.",
    path: "/beboere#familiy",
    hover: true,
  },
  {
    label: "sagsbehandlere",
    image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHwy",
    text: "Vi tilbyder botilbud med høj faglig kvalitet, tydelig dokumentation og individuelt tilrettelagte forløb. Vores tilgang bygger på tæt samarbejde og solid erfaring med komplekse sager.",
    path: "/sagsbehandlere",
    hover: true,
  },
  {
    label: "beboere",
    image: "https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhcmV8ZW58MHx8MHx8fDA%3D",
    text: "Hos os får du din egen lejlighed, støtte i hverdagen og mulighed for at udvikle dig i dit eget tempo. Vi tror på tryghed, struktur og fællesskab - på dine præmisser.",
    path: "/beboere",
    hover: true
  }
]

export default function Home() {
  return (
    <div className="w-full space-y-10 pb-10">
      <div
        className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-4 mt-8"
      >
        <img
          src="cover.png"
          className="rounded-md object-cover h-[512px] w-full"
          alt="location"
        />
      </div>

      <div className='flex flex-row mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 text-center'>
        <div className="w-1/2 ">
          <p className="font-semibold">Cosmosgruppen er et botilbud inden for servicelovens §§ 107 og 108.</p>
          <p className="text-balance mt-2">
            Vi leverer specialiseret pædagogisk omsorg og individuelt tilrettelagte aktiviteter til borgere med særlige behov.
          </p>

          <p className='mt-2'>Cosmosgruppen samarbejder med kommuner over hele landet.</p>
          <p className='mt-2'>Vil du vide mere om vores botilbud så ring eller skriv til:</p>

          <div className='flex flex-row justify-evenly mt-4'>
            <div>
              <h3 className='my-1'>Kåre Hartmann Nielsen</h3>
              <div className="flex flex-col -space-y-1 ">
                <a href="tel:28136899" className="text-sm hover:text-orange-500">+45 2813 6899</a>
                <a href="mailto:kh@cosmosgruppen.dk" className="text-sm hover:text-orange-500">kh@cosmosgruppen.dk</a>
              </div>
            </div>
            <div>
              <h3 className=' my-1'>Rune Raun Jensen</h3>
              <div className="flex flex-col -space-y-1 ">
                <a href="tel:21472092" className="text-sm hover:text-orange-500">+45 2147 2092</a>
                <a href="mailto:rrj@cosmosgruppen.dk" className="text-sm hover:text-orange-500">rrj@cosmosgruppen.dk</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="aspect-video flex justify-center">
            <img
              src="logo.png"
              className="rounded-md object-cover h-full"
              alt="location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
