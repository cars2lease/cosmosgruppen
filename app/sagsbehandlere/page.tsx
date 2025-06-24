import Image from "next/image";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sagsbehandlere | Cosmos Gruppen',
  description: '...',
}

export default function Sagsbehandlere() {
    return (
        <>
            <p>Hello</p>
            <h2>CosmosGruppen er et godkendt botilbud efter Servicelovens §§ 107 og 108.</h2>

            <h3>Vi er specialiseret i støtte til voksne med:</h3>

            <ul>
                <li>Autisme, ADHD, skizofreni, gennemgribende udviklingsforstyrrelser eller psykisk udviklingshæmning</li>
                <li>Problemskabende adfærd</li>
                <li>Domsanbringelse efter straffelovens §§ 68, 69 og 70</li>
            </ul>

            <h3>Vi tilbyder bl.a.:</h3>

            <ul>
                <li>Særforanstaltninger</li>
                <li>Akutpladser og observationsophold</li>
                <li>Alternativ afsoning og ophold ifm. behandlingsdom</li>
                <li>Individuelt tilrettelagte forløb med pædagogisk støtte og beskæftigelsesrettede aktiviteter</li>
                <li>Et trygt og struktureret miljø med døgnbemanding og fast personalegruppe</li>
            </ul>

            <p>Vi prioriterer faglig kvalitet, tæt dialog og tydelig dokumentation i samarbejdet med den visiterende myndighed - og har erfaring med komplekse sager, herunder
                domsrelaterede forløb.</p>
        </>
    )
}