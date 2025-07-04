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
    <div className="w-full space-y-10 py-10">
      {/* Introduction */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div className="max-w-lg md:max-w-none bg-blue-100 rounded p-8">
            <h2 className="text-2xl font-semibold sm:text-3xl text-blue-500">
              Et trygt sted at være
            </h2>

            <div className="mt-4 text-gray-700 flex flex-col space-y-1">
              <p className="font-semibold text-blue-500">Cosmosgruppen tilbyder botilbud efter servicelovens § 107 og 108.</p>
              <p className="text-balance text-blue-500">
                Vi leverer specialiseret pædagogisk omsorg og individuelt tilrettelagte aktiviteter til
                borgere med særlige behov. Cosmosgruppen samarbejder med kommuner over hele landet.
              </p>

              <p className='text-blue-500 mt-1'>Vil du vide mere om vores botilbud så ring eller skriv til:</p>

              <div className='flex flex-row justify-evenly'>
                <div>
                  <h3 className='text-blue-500 my-1'>Kåre Hartmann Nielsen</h3>
                  <div className="flex flex-col -space-y-1 text-blue-500">
                    <a href="tel:28136899" className="text-sm hover:text-orange-500">+45 2813 6899</a>
                    <a href="mailto:kh@cosmosgruppen.dk" className="text-sm hover:text-orange-500">kh@cosmosgruppen.dk</a>
                  </div>
                </div>
                <div>
                  <h3 className='text-blue-500 my-1'>Rune Raun Jensen</h3>
                  <div className="flex flex-col -space-y-1 text-blue-500">
                    <a href="tel:21472092" className="text-sm hover:text-orange-500">+45 2147 2092</a>
                    <a href="mailto:rrj@cosmosgruppen.dk" className="text-sm hover:text-orange-500">rrj@cosmosgruppen.dk</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-video bg-blue-300">
            <img
              src="cover.png"
              className="rounded-md object-cover h-full"
              alt="location"
            />
          </div>
        </div>
      </section>


      {/** Short Content Links */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 md:grid-cols-3 md:items-center md:gap-8">
          {Blocks.map((content: any, idx: number) => <SquareImageBlock key={idx} {...content} />)}
        </div>
      </section>

      {/** Kompetencer */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 reverse">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">

            <div className="order-last max-w-lg md:max-w-none bg-gray-50 rounded p-8 text-center">
              <h2 className="text-2xl font-semibold sm:text-3xl text-gray-700">
                Tryghed og faglighed - hver dag, hele døgnet
              </h2>

              <div className="mt-4 text-gray-700 flex flex-col space-y-1">
                <p className="text-balance font-semibold text-gray-700">
                  Hos CosmosGruppen ved vi, hvor vigtigt det er, at dine nærmeste er i trygge hænder - både menneskeligt og fagligt.
                </p>

                <p className="text-balance text-gray-700">
                  Vi er specialiseret i støtte til voksne med særlige behov, og vores pædagogiske tilgang
                  bygger på faglig omsorg, anerkendelse og nærvær. Med udgangspunkt i beboerens egne ønsker
                  og forudsætninger skaber vi en hverdag med struktur, stabilitet og mulighed for personlig udvikling.
                </p>
              </div>
            </div>

            <div className="order-first relative">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-md object-cover h-full grayscale"
                alt="tryghed"
              />

              <div className="absolute rounded-md bg-blue-700/30 inset-0 w-full z-10">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
