'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function NavigationBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="bg-[#FFFDD0]/25 py-3 relative z-50">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="block text-blue-800" href="/">
                    <Image src="/logo-clean.png" alt="cosmogruppen" className="w-2/5" width={392} height={168} />
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    {/* Desktop Nav */}
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li><Link href="/" className="text-gray-500 hover:text-gray-500/75 text-lg">Forside</Link></li>
                            <li><Link href="/beboere" className="text-gray-500 hover:text-gray-500/75 text-lg">Beboere</Link></li>
                            <li><Link href="/sagsbehandlere" className="text-gray-500 hover:text-gray-500/75 text-lg">Sagsbehandlere</Link></li>
                            <li><Link href="/information" className="text-gray-500 hover:text-gray-500/75 text-lg">Information</Link></li>
                            <li><Link href="/billeder" className="text-gray-500 hover:text-gray-500/75 text-lg">Billeder</Link></li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link
                                className="hidden rounded-md bg-gray-100 hover:bg-orange-100 text-lg text-blue-800 hover:text-orange-800 px-5 py-2.5 font-medium sm:block"
                                href="/kontakt"
                            >
                                Kontakt
                            </Link>
                        </div>

                        {/* Hamburger button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <nav aria-label="Global" className="md:hidden absolute w-full bg-white shadow-lg pt-2 pb-4 px-4">
                    <ul className="space-y-1 text-sm">
                        <li>
                            <Link
                                href="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2 rounded-lg hover:bg-gray-100">
                                Forside
                            </Link>
                        </li>
                        <li>
                            <Link href="/beboere"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2 rounded-lg hover:bg-gray-100">
                                Beboere</Link></li>
                        <li>
                            <Link href="/sagsbehandlere"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2 rounded-lg hover:bg-gray-100">
                                Sagsbehandlere
                            </Link>
                        </li>
                        <li>
                            <Link href="/information"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2 rounded-lg hover:bg-gray-100">
                                Information
                            </Link>
                        </li>
                        <li>
                            <Link href="/billeder"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2 rounded-lg hover:bg-gray-100">
                                Billeder
                            </Link>
                        </li>
                        <li>
                            <Link href="/kontakt"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2 rounded-lg hover:bg-gray-100">
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    )
}
