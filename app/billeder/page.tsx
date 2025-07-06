

export default function Page() {
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 grid grid-cols-2 xl:grid-cols-3 gap-4">
            {[...Array(8)].map((_, key) => (
                <a href="#" className="group block overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt=""
                        className="w-full object-cover rounded aspect-square"
                    />

                    <div className="relative py-2">
                        <p className="mt-2">
                            Regular Price
                        </p>
                    </div>
                </a>
            )
            )}
        </section>

    );
}