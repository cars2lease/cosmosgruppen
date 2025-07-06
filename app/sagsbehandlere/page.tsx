import Image from "next/image";
import type { Metadata } from 'next'

import SquareImageBlock from "../ui/square-image";

export const metadata: Metadata = {
    title: 'Sagsbehandlere | Cosmos Gruppen',
    description: '...',
}

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

export default function Sagsbehandlere() {
    return (
        <div className="w-full space-y-8 py-16">
            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <h2>CosmosGruppen er et godkendt botilbud efter Servicelovens §§ 107 og 108.</h2>
            </section>

            {/* Introduction */}
            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-4">
                <h2 className="text-2xl font-semibold sm:text-2xl">Målgruppe</h2>
                <p>
                    CosmosGruppen henvender sig til voksne over 18 år med udviklingsforstyrrelser,
                    psykiatriske diagnoser eller kognitive funktionsnedsættelser - herunder også
                    borgere, der er domsanbragte.
                </p>

                <b className="text-xl font-semibold sm:text-xl">Vores målgruppe omfatter blandt andet personer med:</b>

                <ul className="list-disc ml-6 mt-4 text-balance">
                    <li>Autisme</li>
                    <li>Skizofreni</li>
                    <li>ADHD</li>
                    <li>Gennemgribende udviklingsforstyrrelse</li>
                    <li>Psykisk udviklingshæmning</li>
                    <li>Domsanbringelse efter straffelovens §§ 68, 69 og 70</li>
                </ul>

                <p>
                    Vi modtager borgere i både midlertidige og længerevarende ophold, og vi tilbyder
                    også særforanstaltninger, akut anbringelse, alternativ afsoning og observation i
                    pædagogisk regi.
                </p>
            </section>

            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl font-semibold sm:text-xl">
                    Vi er specialiseret i støtte til voksne med:
                </h2>

                <div className="mt-4 text-gray-700 flex flex-col space-y-1">
                    <ul className="text-balance list-disc ml-6">
                        <li>Autisme, ADHD, skizofreni, gennemgribende udviklingsforstyrrelser eller psykisk udviklingshæmning</li>
                        <li>Problemskabende adfærd</li>
                        <li>Domsanbringelse efter straffelovens §§ 68, 69 og 70</li>
                    </ul>
                </div>
            </section>

            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl font-semibold sm:text-xl">
                    Vi tilbyder bl.a.:
                </h2>

                <div className="mt-4 text-gray-700 flex flex-col space-y-1">
                    <ul className="list-disc ml-6">
                        <li>Særforanstaltninger</li>
                        <li>Akutpladser og observationsophold</li>
                        <li>Alternativ afsoning og ophold ifm. behandlingsdom</li>
                        <li>Individuelt tilrettelagte forløb med pædagogisk støtte og beskæftigelsesrettede aktiviteter</li>
                        <li>Et trygt og struktureret miljø med døgnbemanding og fast personalegruppe</li>
                    </ul>
                </div>
            </section>

            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <p>
                    Vi prioriterer faglig kvalitet, tæt dialog og tydelig dokumentation i samarbejdet med den visiterende myndighed
                    og har erfaring med komplekse sager, herunder domsrelaterede forløb.
                </p>
            </section>

            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <b className="text-2xl font-semibold sm:text-2xl">Aktiviteter & beskæftigelse</b>
                    <p className="text-balance mt-4">
                        Hos CosmosGruppen tilbyder vi både meningsfulde daglige aktiviteter på matriklen
                        og beskæftigelsesrettede forløb i samarbejde med eksterne aktører. Fælles for alle
                        aktiviteter er, at de understøtter trivsel, mestring og personlig udvikling hos den
                        enkelte beboer.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8 mb-8">
                    {Activities.map((content: any, idx: number) => <SquareImageBlock key={idx} {...content} />)}
                </div>

                <div className="mb-8">
                    <b className="text-xl font-semibold sm:text-xl">Et udvalg af vores interne aktiviteter:</b>
                    <ul className="mt-2 list-disc ml-6">
                        <li>Fiskeri i vores private søer</li>
                        <li>Brændeprojekter i skoven</li>
                        <li>Dyrehold - pasning og samvær med dyr</li>
                        <li>Værkstedsaktiviteter - kreativt og håndværkspræget arbejde</li>
                        <li>Fællesspisning - madlavning, måltider og samvær</li>
                        <li>Træningslokale - fysisk aktivitet og sundhed</li>
                        <li>Sociale events - fx film, spil, gåture og bålhygge i naturen</li>
                    </ul>
                </div>

                <div className="py-4 space-y-4">
                    <b className="text-lg font-semibold sm:text-lg">Beskæftigelsesrettede tilbud:</b>

                    <p className="mt-4">
                        Vi tilbyder også målrettede beskæftigelsesforløb, som tager udgangspunkt i den
                        enkelte beboers ønsker, ressourcer og behov. Formålet er at skabe struktur i
                        hverdagen, øge selvstændighed og – hvis muligt – bane vejen for beskæftigelse eller
                        uddannelse.
                    </p>
                </div>

                <div className="py-4 space-y-">
                    <b className="text-lg font-semibold sm:text-lg">Eksempler på beskæftigelsestilbud:</b>

                    <ul className="my-4 list-disc ml-6">
                        <li>Interne opgaver som skovbrug, vedligehold og tømrerarbejde</li>
                        <li>Støttet deltagelse i eksterne beskæftigelsestilbud i lokalområdet</li>
                        <li>Samarbejde med virksomheder, sociale projekter, beskyttede værksteder og STU-forløb</li>
                    </ul>

                    <p>Forløbene tilpasses individuelt og evalueres løbende i samarbejde med beboeren og relevante samarbejdspartnere.</p>
                </div>
            </section>
        </div >
    )
}