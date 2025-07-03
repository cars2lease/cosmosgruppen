import SquareImageBlock from "../ui/square-image"

const Images = [
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
        <div className="w-full space-y-16 py-16">
            {/* Introduction */}
            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-8">
                <h2>Målgruppe</h2>
                <p>
                    CosmosGruppen henvender sig til voksne over 18 år med udviklingsforstyrrelser,
                    psykiatriske diagnoser eller kognitive funktionsnedsættelser – herunder også
                    borgere, der er domsanbragte.
                </p>

                <b>Vores målgruppe omfatter blandt andet personer med:</b>

                <ul>
                    <div className="li">Autisme</div>
                    <div className="li">Skizofreni</div>
                    <div className="li">ADHD</div>
                    <div className="li">Gennemgribende udviklingsforstyrrelse</div>
                    <div className="li">Psykisk udviklingshæmning</div>
                    <div className="li">Domsanbringelse efter straffelovens §§ 68, 69 og 70</div>
                </ul>

                <p>
                    Vi modtager borgere i både midlertidige og længerevarende ophold, og vi tilbyder
                    også særforanstaltninger, akut anbringelse, alternativ afsoning og observation i
                    pædagogisk regi.
                </p>
            </section>


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
                    {Images.map((content: any, idx: number) => <SquareImageBlock key={idx} {...content} />)}
                </div>
            </section>

            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-8">
                <p>
                    Vi ser pårørende som en vigtig del af beboerens liv og støtter op om en åben og
                    respektfuld dialog - altid tilpasset beboerens ønsker og grænser. Har du spørgsmål
                    eller behov for sparring, er du altid velkommen til at kontakte os.
                </p>
            </section>
        </div>
    )
}