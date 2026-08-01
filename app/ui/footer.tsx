import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-[#f1f2f2]">
            <div className="mx-auto max-w-screen-xl px-4 pt-4 pb-6 sm:px-6 lg:px-8 lg:pt-6">
                <div className="border-t border-gray-100">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="mt-4 text-sm text-blue-500 sm:order-first sm:mt-0">&copy; 2025 Cosmos Gruppen ApS</p>
                        <a
                            href="/tilsyn/tilsynsrapport_08_2026.pdf"
                            download
                            className="mt-4 text-sm text-blue-500 sm:order-first sm:mt-0"
                        >
                            Tilsynsrapport
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}