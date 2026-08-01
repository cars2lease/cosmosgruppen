import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Billeder | Cosmos Gruppen',
    description: '...',
}

const Images = [
    {
        label: "",
        image: "/pictures/image_1.png",
        text: "Omkringliggende Natur",
    },
    {
        label: "",
        image: "/pictures/image_2.png",
        text: "Ejendommen",
    },
    {
        label: "",
        image: "/outdoor/image-1.jpg",
        text: "Omkringliggende Natur",
    },
    {
        label: "",
        image: "/outdoor/image-2.jpg",
        text: "Omkringliggende Natur",
    },
    {
        label: "",
        image: "/outdoor/image-3.jpg",
        text: "Omkringliggende Natur",
    },
    {
        label: "",
        image: "/outdoor/image-4.jpg",
        text: "Omkringliggende Natur",
    },
    {
        label: "",
        image: "/outdoor/image-5.jpg",
        text: "Omkringliggende Natur",
    },
    {
        label: "",
        image: "/outdoor/image-6.jpg",
        text: "Omkringliggende Natur",
    },
    {
        label: "",
        image: "/outdoor/image-7.jpg",
        text: "Omkringliggende Natur",
    },
    {
        label: "",
        image: "/outdoor/image-8.jpg",
        text: "Omkringliggende Natur",
    },
        {
        label: "",
        image: "/outdoor/image-9.jpeg",
        text: "Omkringliggende Natur",
    },
]

export default function Page() {
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 grid grid-cols-2 xl:grid-cols-3 gap-4">
            {Images.map((image, key) => (
                <div className="group block overflow-hidden" key={key}>
                    <img
                        src={image.image}
                        alt={image.text}
                        className="w-full object-cover rounded aspect-square"
                    />

                    <div className="relative py-2">
                        <p className="mt-2">
                            {image.text}
                        </p>
                    </div>
                </div>
            ))}
        </section>

    );
}