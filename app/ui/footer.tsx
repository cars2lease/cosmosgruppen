import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-[#f1f2f2]">
            <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-center text-blue-800 sm:justify-start">
                            <Image src="/logo-clean.png" alt="cosmogruppen" className="w-3/4" width={392} height={168} />
                        </div>

                        <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                            Hos Cosmos Gruppen prioriterer vi faglig kvalitet, tæt dialog og tydelig dokumentation i samarbejdet med den visiterende myndighed.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-blue-500">Sagsbehandlere</p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                                        Kompetencer
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                                        Vores Tilbud
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-blue-500">Pårørende</p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                                        Vores botilbud
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#">For pårørende</a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-blue-500">Målgruppe</p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> FAQs </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Support </a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-blue-500">Information</p>
                            
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                                        Beliggenhed
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#">Medarbejdere</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-100 pt-6">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="mt-4 text-sm text-blue-500 sm:order-first sm:mt-0">&copy; 2025 Cosmos Gruppen ApS</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}