import SquareImageBlock from "../ui/square-image"

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

const Activities = [
    {
        label: "",
        image: "/activities/bonfire.png",
        text: "",
        path: "/"
    },
    {
        label: "",
        image: "/activities/tractor.JPG",
        text: "",
        path: "/"
    },
    {
        label: "",
        image: "/activities/animals.JPG",
        text: "",
        path: "/"
    },
    {
        label: "",
        image: "/activities/plant-2.png",
        text: "",
        path: "/"
    },
]

export default function Maalgruppe() {
    return (
        <div className="w-full space-y-16 py-16">
            {/* Introduction */}
            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-8">

                <p>
                    Hos CosmosGruppen ved vi, hvor vigtigt det er, at dine nærmeste er i trygge hænder
                    - både menneskeligt og fagligt.
                </p>


                <p>
                    Vi er specialiseret i støtte til voksne med særlige behov, og vores tilgang bygger
                    på faglig omsorg, anerkendelse og nærvær. Med udgangspunkt i beboerens egne
                    ønsker og forudsætninger skaber vi en hverdag med struktur, stabilitet og mulighed
                    for personlig udvikling.
                </p>
            </section>

            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="mb-4">
                    <b>Et hjem med plads til forskellighed</b>
                    <p>
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

            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="mb-4">
                    <b>Aktiviteter & beskæftigelse</b>
                    <p>
                        Hos CosmosGruppen tilbyder vi både meningsfulde daglige aktiviteter på matriklen
                        og beskæftigelsesrettede forløb i samarbejde med eksterne aktører. Fælles for alle
                        aktiviteter er, at de understøtter trivsel, mestring og personlig udvikling hos den
                        enkelte beboer.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8 mb-8">
                    {Activities.map((content: any, idx: number) => <SquareImageBlock key={idx} {...content} />)}
                </div>

                <div className="mb-4">
                    <b>Et udvalg af vores interne aktiviteter:</b>
                    <ul className="mt-2">
                        <li>Fiskeri i vores private søer</li>
                        <li>Brændeprojekter i skoven</li>
                        <li>Dyrehold - pasning og samvær med dyr</li>
                        <li>Værkstedsaktiviteter - kreativt og håndværkspræget arbejde</li>
                        <li>Fællesspisning - madlavning, måltider og samvær</li>
                        <li>Træningslokale - fysisk aktivitet og sundhed</li>
                        <li>Sociale events - fx film, spil, gåture og bålhygge i naturen</li>
                    </ul>
                </div>

                <div className="py-2">
                    <b>Beskæftigelsesrettede tilbud:</b>
                    <p className="mt-2">Vi tilbyder også målrettede beskæftigelsesforløb, som tager udgangspunkt i den
                        enkelte beboers ønsker, ressourcer og behov. Formålet er at skabe struktur i
                        hverdagen, øge selvstændighed og – hvis muligt – bane vejen for beskæftigelse eller
                        uddannelse.</p>

                    <b>Eksempler på beskæftigelsestilbud:</b>
                    <ul className="mt-2">
                        <li>Interne opgaver som skovbrug, vedligehold og tømrerarbejde</li>
                        <li>Støttet deltagelse i eksterne beskæftigelsestilbud i lokalområdet</li>
                        <li>Samarbejde med virksomheder, sociale projekter, beskyttede værksteder og STU-forløb</li>
                    </ul>
                    <p>Forløbene tilpasses individuelt og evalueres løbende i samarbejde med beboeren og relevante samarbejdspartnere.</p>
                </div>
            </section>

            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-4" id="familie">
                <b className="">For pårørende</b>
                <p className="mt-2">
                    Hos CosmosGruppen ved vi, hvor vigtigt det er, at dine nærmeste er i trygge hænder
                    - både menneskeligt og fagligt. Vi er specialiseret i støtte til voksne med særlige behov, og vores tilgang bygger
                    på faglig omsorg, anerkendelse og nærvær. Med udgangspunkt i beboerens egne
                    ønsker og forudsætninger skaber vi en hverdag med struktur, stabilitet og mulighed
                    for personlig udvikling. Et hjem med plads til forskellighed Beboerne bor i egne lejligheder med mulighed for privatliv og ro - og samtidig
                    adgang til fælles aktiviteter og samvær, når de ønsker det. Vi lægger vægt på, at vores omgivelser skal føles hjemlige, trygge og tilpasset den enkelte.
                </p>

                <b>Du som pårørende</b>
                <p className="mt-2">
                    Vi ser pårørende som en vigtig del af beboerens liv og støtter op om en åben og
                    respektfuld dialog – altid tilpasset beboerens ønsker og grænser. Har du spørgsmål
                    eller behov for sparring, er du altid velkommen til at kontakte os.
                </p>
                <p>
                    Vi ser pårørende som en vigtig del af beboerens liv og støtter op om en åben og
                    respektfuld dialog - altid tilpasset beboerens ønsker og grænser. Har du spørgsmål
                    eller behov for sparring, er du altid velkommen til at kontakte os.
                </p>
            </section>
        </div>
    )
}