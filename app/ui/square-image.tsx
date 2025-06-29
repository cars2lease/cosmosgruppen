import Link from "next/link"

export interface Props {
    label: string,
    image: string,
    text: string,
    path: string,
}

export default function SquareImageBlock(props: Props) {
    return (
        <div className="" aria-label={props.label}>
            <div className="aspect-square w-full relative group">
                <img
                    src={props.image}
                    className="rounded-md object-cover w-full grayscale aspect-square"
                    alt={props.label}
                />

                <div className="absolute inset-0 bg-orange-900/75 flex items-end justify-left p-6 text-white text-xl rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col space-y-2">
                        <p>{props.text}</p>
                        <Link href={props.path} className="underline underline-offset-4 font-light">læs mere</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}