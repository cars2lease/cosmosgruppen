import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Information | Cosmos Gruppen',
    description: '...',
}

export default function Kontakt() {
    return (
        <div className="w-full space-y-8 pb-8">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 p-8">
                <div className="max-w-lg md:max-w-none">
                    <h2 className="text-2xl font-semibold sm:text-3xl">
                        Personale
                    </h2>

                    <div className="mt-2 flex flex-col space-y-2">
                        <p className="text-pretty antialiased md:subpixel-antialiased">
                            Hos Cosmos Gruppen er vores personale nøje udvalgt med udgangspunkt i både
                            faglighed og medmenneskelighed. Vi ansætter udelukkende relevant uddannet
                            personale med dokumenteret erfaring i arbejdet med vores målgruppe.
                        </p>

                        <p className="text-pretty antialiased md:subpixel-antialiased">
                            Vi lægger vægt på engagement og nærvær og på, at vores medarbejdere brænder
                            for at gøre en forskel for beboerne. Derudover forventer vi faglig udvikling i form af
                            supervision, kurser og temadage, så vi altid sikrer en høj og opdateret faglig
                            standard.
                        </p>

                        <p className="text-pretty antialiased md:subpixel-antialiased">
                            Personalet arbejder ud fra en struktureret, anerkendende og relationsbaseret
                            tilgang, og vi prioriterer et tæt tværfagligt samarbejde for at skabe en
                            helhedsorienteret indsats omkring hver enkelt beboer.
                        </p>

                        <p className="text-pretty antialiased md:subpixel-antialiased">
                            Vi er altid på udkig efter kvalificerede medarbejdere, og hvis du kan se dig selv i
                            ovenstående, er du meget velkommen til at kontakte os eller sende en ansøgning.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg md:max-w-none">
                    <p className='mb-4'>Vil du vide mere om vores botilbud så ring eller skriv til:</p>

                    <div className='flex flex-col space-y-4'>
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
            </div>

            {/** Location */}
            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-2">
                <h2 className="text-2xl font-semibold sm:text-3xl">
                    Placering
                </h2>
                <p>Cosmos Gruppen er beliggende på adressen: Klostergårdsvej 9, 8882 Fårvang</p>
                <p>Vi ligger midt i hjertet af det midtjyske - i fredelige, naturskønne omgivelser med egen skov og fiskesøer lige uden for døren.</p>
            </section>

            {/** Location */}
            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl font-semibold sm:text-xl">
                    Afstande til centrum af nærliggende byer:
                </h2>

                <ul className="list-disc ml-6 mt-4 text-balance">
                    <li>Randers: 30 km</li>
                    <li>Silkeborg: 19 km</li>
                    <li>Viborg: 28 km</li>
                    <li>Aarhus: 40 km</li>
                </ul>
            </section>

            <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-128">
                <iframe
                    className="contact-map"
                    title="map"
                    scrolling="no"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.921164217193!2d9.687420612702184!3d56.3008452495348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464bf626d167b7c1%3A0x2bff902100d5561f!2sKlosterg%C3%A5rdsvej%209%2C%208882%20F%C3%A5rvang!5e1!3m2!1sen!2sdk!4v1751571904726!5m2!1sen!2sdk"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    frameBorder="0">
                </iframe>
            </section>
        </div>
    )
}