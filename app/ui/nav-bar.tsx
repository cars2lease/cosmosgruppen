import Link from 'next/link'

export default function NavigationBar() {
    return (
        <header className="bg-[#FFFDD0]/25">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="block text-blue-800" href="/">
                    <span className="">Cosmos Gruppen</span>
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <Link href="/sagsbehandlere" className="text-gray-500 transition hover:text-gray-500/75">Sagsbehandlere</Link>
                            </li>

                            <li>
                                <Link href="/sagsbehandlere" className="text-gray-500 transition hover:text-gray-500/75">Pårørende</Link>
                            </li>

                            <li>
                                <Link href="/maalgruppe" className="text-gray-500 transition hover:text-gray-500/75">Målgruppe</Link>
                            </li>

                            <li>
                                <Link href="/information" className="text-gray-500 transition hover:text-gray-500/75">Information</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link
                                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-800 transition hover:text-blue-800/75 sm:block"
                                href="/kontakt-os"
                            >
                                Kontakt
                            </Link>
                        </div>

                        <button
                            className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>

    )
}