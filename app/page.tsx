import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next'
import Testemonial from "./ui/testomonial";
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
}

const Blocks: Array<Block> = [
  {
    label: "pårørende",
    image: "https://images.unsplash.com/photo-1514415008039-efa173293080?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Vi ved, hvor vigtigt det er, at dine nærmeste er i trygge hænder. Hos CosmosGruppen møder vi beboerne med omsorg, respekt og menneskeligt nærvær - hver dag.",
    path: "/"
  },
  {
    label: "sagsbehandlere",
    image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHwy",
    text: "Vi tilbyder botilbud med høj faglig kvalitet, tydelig dokumentation og individuelt tilrettelagte forløb. Vores tilgang bygger på tæt samarbejde og solid erfaring med komplekse sager.",
    path: "/sagsbehandlere"
  },
  {
    label: "beboere",
    image: "https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhcmV8ZW58MHx8MHx8fDA%3D",
    text: "Hos os får du din egen lejlighed, støtte i hverdagen og mulighed for at udvikle dig i dit eget tempo. Vi tror på tryghed, struktur og fællesskab - på dine præmisser.",
    path: "/beboere"
  }
]

export default function Home() {
  return (
    <div className="w-full space-y-16 py-6">
      {/* Introduction */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div className="max-w-lg md:max-w-none bg-blue-100 rounded p-8">
            <h2 className="text-2xl font-semibold sm:text-3xl text-blue-500">
              Et trygt sted at være
            </h2>

            <div className="mt-4 text-gray-700 flex flex-col space-y-1">
              <p className="font-semibold text-blue-500">Cosmosgruppen tilbyder botilbud efter servicelovens § 107 og 108.</p>
              <p className="text-balance text-blue-600">
                Vi skaber trygge og meningsfulde rammer for borgere med særlige behov gennem
                specialiseret pædagogisk støtte og individuelt tilrettelagte aktiviteter.
                Cosmosgruppen samarbejder med kommuner i hele Danmark for at sikre det bedst mulige forløb for den enkelte borger.
              </p>
              <p className="text-balance text-blue-600">
                Vi prioriterer faglig kvalitet, tæt dialog og tydelig dokumentation i samarbejdet med
                den visiterende myndighed - og har erfaring med komplekse sager, herunder
                domsrelaterede forløb.
              </p>
            </div>
          </div>

          <div className="aspect-video bg-blue-300">
            <img
              src="cover.png"
              className="rounded-md object-cover h-full grayscale"
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

      {/** Hero Section */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="w-full bg-orange-200 rounded-md px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col jusitfy-center text-center space-y-3">
            <h2 className="font-semibold text-xl text-orange-800">
              Et hjem med faglighed og hjerterum
            </h2>
            <p className="font-light text-balance text-orange-700">
              Hos CosmosGruppen tilbyder vi specialiseret pædagogisk støtte og meningsfuld hverdag til voksne med særlige behov.
              Vi skaber stabile rammer, nære relationer og muligheder for at leve et liv med struktur, værdighed og fællesskab.
            </p>
          </div>
        </div>
      </section>

      {/** Kompetencer */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 reverse">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div className="order-last">
              <div className="mt-4 text-gray-700 flex flex-col space-y-1">
                <h2 className="text-2xl font-semibold sm:text-3xl text-blue-700">
                  Tryghed og faglighed - hver dag, hele døgnet
                </h2>

              </div>
              <div className="max-w-lg md:max-w-none">
                <p className="text-balance">
                  Hos CosmosGruppen ved vi, hvor vigtigt det er, at dine nærmeste er i trygge hænder - både menneskeligt og fagligt.
                </p>

                <p className="text-balance">
                  Vi er specialiseret i støtte til voksne med særlige behov, og vores pædagogiske tilgang
                  bygger på faglig omsorg, anerkendelse og nærvær. Med udgangspunkt i beboerens egne ønsker
                  og forudsætninger skaber vi en hverdag med struktur, stabilitet og mulighed for personlig udvikling.
                </p>
              </div>
            </div>

            <div className="order-first">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-md object-cover h-full grayscale"
                alt="tryghed"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
