import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Information | Cosmos Gruppen',
    description: '...',
}

export default function Kontakt() {
    return (
        <div className="w-full">

            {/* Personel */}
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 gap-4 md:grid-cols-3 md:items-center md:gap-8">
                        <div className="aspect-square bg-blue-100 rounded-md w-full p-8">
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-2xl font-semibold sm:text-3xl text-blue-600">
                                    Vi er her for dig
                                </h2>

                                <div className="mt-2 text-blue-600 flex flex-col space-y-1">
                                    <p className="text-pretty antialiased md:subpixel-antialiased">
                                        Hos CosmosGruppen er vores personale nøje udvalgt med udgangspunkt i både
                                        faglighed og medmenneskelighed. Vi ansætter udelukkende relevant uddannet
                                        personale med dokumenteret erfaring i arbejdet med vores målgruppe.
                                        Vi lægger vægt på engagement og nærvær og på, at vores medarbejdere brænder
                                        for at gøre en forskel for beboerne. Derudover forventer vi faglig udvikling i form af
                                        supervision, kurser og temadage, så vi altid sikrer en høj og opdateret faglig
                                        standard.
                                    </p>

                                </div>
                            </div>
                        </div>

                        {/** Employee One */}
                        <div className="aspect-square w-full relative group">
                            <img
                                src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="rounded-md object-cover w-full grayscale aspect-square"
                                alt="location"
                            />

                            <div className="absolute inset-0 bg-orange-800/75 flex items-end justify-left p-6 text-white text-xl rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div>
                                    <h3>Kåre Hartmann Nielsen</h3>

                                    <div className="flex flex-col -space-y-1">
                                        <a href="tel:28136899" className="text-sm font-mono hover:text-blue-500">+45 2813 6899</a>
                                        <a href="mailto:kh@cosmosgruppen.dk" className="text-sm font-mono hover:text-blue-500">kh@cosmosgruppen.dk</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/** Employee One - mobile */}
                        <div className="flex flex-row-reverse items-stretch gap-4 md:hidden">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="w-20 rounded object-cover"
                            />

                            <div>
                                <h3 className="font-medium text-gray-900 sm:text-lg">Kåre Hartmann</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio
                                    nesciunt quas non animi.
                                </p>
                            </div>
                        </div>

                        {/** Employee Two - desktop */}
                        <div className="aspect-square w-full relative group">
                            <img
                                src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="rounded-md object-cover w-full grayscale aspect-square"
                                alt="location"
                            />

                            <div className="absolute inset-0 bg-orange-800/75 p-6 flex items-end justify-left text-white text-xl rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div>
                                    <h3>Rune Raun Jensen</h3>

                                    <div className="flex flex-col -space-y-1">
                                        <a href="tel:21472092" className="text-sm hover:font-blue-500">+45 2147 2092</a>
                                        <a href="mailto:rrj@cosmosgruppen.dk" className="text-sm hover:font-blue-500">rrj@cosmosgruppen.dk</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/** Employee two - mobile */}
                        <div className="flex flex-row-reverse items-stretch gap-4 md:hidden">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="w-20 rounded object-cover"
                            />

                            <div>
                                <h3 className="font-medium text-gray-900 sm:text-lg">Rune Raun Jensen</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio
                                    nesciunt quas non animi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/** Location */}
            <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <p>CosmosGruppen er beliggende på adressen: Klostergårdsvej 9, 8882 Fårvang</p>

                <p>Vi ligger midt i hjertet af det midtjyske - i fredelige, naturskønne omgivelser med egen skov og fiskesøer lige uden for døren.</p>
            </section>

            <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 h-128">
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

            <section className="bg-gray-50">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit
                        </h2>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor officia blanditiis
                            repellat in, vero, aperiam porro ipsum laboriosam consequuntur exercitationem incidunt
                            tempora nisi?
                        </p>
                    </div>

                    <div className="mx-auto mt-8 max-w-xl">
                        <form action="#" className="sm:flex sm:gap-4">
                            <div className="sm:flex-1">
                                <label htmlFor="email" className="sr-only">Email</label>

                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-xs transition focus:border-white focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:ring-3 focus:ring-yellow-400 focus:outline-hidden sm:mt-0 sm:w-auto"
                            >
                                <span className="text-sm font-medium"> Sign Up </span>

                                <svg
                                    className="size-5 shadow-sm rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    )
}