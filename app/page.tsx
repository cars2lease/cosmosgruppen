import Image from "next/image";
import type { Metadata } from 'next'
import Testemonial from "./ui/testomonial";

export const metadata: Metadata = {
  title: 'Cosmos Gruppen',
  description: '...',
}

export default function Home() {
  return (
    <div className="w-full">
      {/* First section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold sm:text-3xl text-blue-800/80">
                  Et trygt sted at være
                </h2>

                <div className="mt-4 text-gray-700 flex flex-col space-y-1">
                  <p className="font-semibold">Cosmosgruppen tilbyder botilbud efter servicelovens § 107 og 108.</p>
                  <p className="text-balance">
                    Vi skaber trygge og meningsfulde rammer for borgere med særlige behov gennem
                    specialiseret pædagogisk støtte og individuelt tilrettelagte aktiviteter.
                    Cosmosgruppen samarbejder med kommuner i hele Danmark for at sikre det bedst mulige forløb for den enkelte borger.
                  </p>
                  <p className="text-balance">
                    Vi prioriterer faglig kvalitet, tæt dialog og tydelig dokumentation i samarbejdet med
                    den visiterende myndighed - og har erfaring med komplekse sager, herunder
                    domsrelaterede forløb.
                  </p>
                </div>
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
        </div>
      </section>

      <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
        <Testemonial />
      </div>


      {/* Second section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 reverse">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div className="order-last">
              <div className="mt-4 text-gray-700 flex flex-col space-y-1">
                <h2 className="text-2xl font-semibold sm:text-3xl text-blue-800/80">
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
                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
