import Link from "next/link"

export interface Props {
    label: string,
    image: string,
    text: string | undefined,
    path: string | undefined,
    hover: boolean
}

export default function SquareImageBlock({ label, image, text, path, hover = false }: Props) {
    return (
        <div className="" aria-label={label}>
            <div className="aspect-square w-full relative group">
                <img
                    src={image}
                    className="rounded-md object-cover w-full hover:grayscale aspect-square"
                    alt={label}
                />

                {hover &&
                    <div className="absolute inset-0 bg-orange-900/75 flex items-end justify-left p-6 text-white text-xl rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex flex-col space-y-2">
                            <p>{text}</p>
                            <Link href={path!} className="underline underline-offset-4 font-light">læs mere</Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}