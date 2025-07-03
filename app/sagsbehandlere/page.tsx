import Image from "next/image";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sagsbehandlere | Cosmos Gruppen',
    description: '...',
}

export default function Sagsbehandlere() {
    return (
        <div className="w-full space-y-16 py-16">
            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <h2>CosmosGruppen er et godkendt botilbud efter Servicelovens §§ 107 og 108.</h2>
            </section>

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

            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
                    <div className="max-w-lg md:max-w-none bg-blue-100 rounded p-8">
                        <h2 className="text-2xl font-semibold sm:text-3xl text-blue-500">
                            Vi er specialiseret i støtte til voksne med:
                        </h2>

                        <div className="mt-4 text-gray-700 flex flex-col space-y-1">
                            <p className="text-balance text-blue-600">
                                <ul>
                                    <li>Autisme, ADHD, skizofreni, gennemgribende udviklingsforstyrrelser eller psykisk udviklingshæmning</li>
                                    <li>Problemskabende adfærd</li>
                                    <li>Domsanbringelse efter straffelovens §§ 68, 69 og 70</li>
                                </ul>
                            </p>
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


            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
                    <div className="order-last max-w-lg md:max-w-none bg-blue-100 rounded p-8">
                        <h2 className="text-2xl font-semibold sm:text-3xl text-blue-500">
                            Vi er specialiseret i støtte til voksne med:
                        </h2>

                        <div className="mt-4 text-gray-700 flex flex-col space-y-1">
                            <p className="font-semibold text-blue-500">Vi tilbyder bl.a.:</p>
                            <p className="text-balance text-blue-600">
                                <ul>
                                    <li>Særforanstaltninger</li>
                                    <li>Akutpladser og observationsophold</li>
                                    <li>Alternativ afsoning og ophold ifm. behandlingsdom</li>
                                    <li>Individuelt tilrettelagte forløb med pædagogisk støtte og beskæftigelsesrettede aktiviteter</li>
                                    <li>Et trygt og struktureret miljø med døgnbemanding og fast personalegruppe</li>
                                </ul>
                            </p>
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


            <h3></h3>



            <p>Vi prioriterer faglig kvalitet, tæt dialog og tydelig dokumentation i samarbejdet med den visiterende myndighed - og har erfaring med komplekse sager, herunder
                domsrelaterede forløb.</p>
        </div >
    )
}