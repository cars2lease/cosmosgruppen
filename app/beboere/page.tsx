import { Metadata } from "next";

import SquareImageBlock from "../ui/square-image"

export const metadata: Metadata = {
    title: 'Beboere | Cosmos Gruppen',
    description: '...',
}
const Apartments = [
    {
        label: "",
        image: "/familie/bolig_1.png",
        text: "",
        path: "/"
    },
    {
        label: "",
        image: "/familie/bolig_2.png",
        text: "",
        path: "/"
    },
    {
        label: "",
        image: "/familie/bolig_3.png",
        text: "",
        path: "/"
    },
    {
        label: "",
        image: "/familie/bolig_4.png",
        text: "",
        path: "/"
    },
]


export default function Maalgruppe() {
    return (
        <div className="w-full space-y-8 py-16">
            {/* Introduction */}
            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-4" id="familie">
                <b className="text-2xl font-semibold sm:text-2xl">For pårørende</b>
                <p className="mt-2">
                    Hos CosmosGruppen ved vi, hvor vigtigt det er, at dine nærmeste er i trygge hænder
                    - både menneskeligt og fagligt. Vi er specialiseret i støtte til voksne med særlige behov, og vores tilgang bygger
                    på faglig omsorg, anerkendelse og nærvær. Med udgangspunkt i beboerens egne
                    ønsker og forudsætninger skaber vi en hverdag med struktur, stabilitet og mulighed
                    for personlig udvikling. Et hjem med plads til forskellighed Beboerne bor i egne lejligheder med mulighed for privatliv og ro - og samtidig
                    adgang til fælles aktiviteter og samvær, når de ønsker det. Vi lægger vægt på, at vores omgivelser skal føles hjemlige, trygge og tilpasset den enkelte.
                </p>

                <b className="text-xl font-semibold sm:text-xl">Du som pårørende</b>
                <p className="mt-2">
                    Vi ser pårørende som en vigtig del af beboerens liv og støtter op om en åben og
                    respektfuld dialog – altid tilpasset beboerens ønsker og grænser. Har du spørgsmål
                    eller behov for sparring, er du altid velkommen til at kontakte os.
                </p>
            </section>

            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="mb-4">
                    <b className="text-2xl font-semibold sm:text-2xl">Egne Lejligheder</b>
                    <p className="">
                        Beboerne bor i egne lejligheder med mulighed for privatliv og ro - og samtidig
                        adgang til fælles aktiviteter og samvær, når de ønsker det. Vi lægger vægt på, at
                        vores omgivelser skal føles hjemlige, trygge og tilpasset den enkelte.
                        Du som pårørende
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
                    {Apartments.map((content: any, idx: number) => <SquareImageBlock key={idx} {...content} />)}
                </div>

                <div className="mb-4">
                    <p>
                        Alle lejligheder har egen indgang, køkken og badeværelse, som giver mulighed for
                        privatliv, struktur og en tryg base i hverdagen.
                    </p>

                    <p>
                        Samtidig er der adgang til fællesområder, hvor man kan deltage i sociale aktiviteter,
                        fællesspisning og samvær - alt sammen i eget tempo og med respekt for individuelle
                        behov.
                    </p>

                    <p>
                        CosmosGruppen rummer også et træningslokale, værksted og store fællesrum, som
                        giver mulighed for bevægelse, kreativ udfoldelse og fællesskab - altid på beboerens
                        præmisser.
                    </p>
                </div>
            </section>
        </div>
    )
}