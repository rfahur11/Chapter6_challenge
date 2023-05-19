function Banner() {
    return (
        <section id="cta-banner">
            <div className={"container-md"}>
                <div className={"row"}>
                    <div className={"card text-center position-static"}>
                        <div className={"card-body"}>
                            <h1 className={"card-title"}>Sewa Mobil di Lokasimu Sekarang</h1>
                            <p className={"card-text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="/cars"><button type="button" className={"btn btn-success"}>Mulai Sewa Mobil</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;