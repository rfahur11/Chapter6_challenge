function WhyUs() {
    return (
        <section id="why-us">
            <div className={"container-md"}>
                <div className={"row"}>
                    <h1>Why Us?</h1>
                    <p id="text-center-custom">Mengapa harus pilih Binar Car Rental?</p>
                    <div className={"col col-md-6 col-lg-3 col-sm-12 col-12"}>
                        <div className={"card position-static card-height"}>
                            <div className={"card-body"}>
                                <img src={"images/icon_complete.png"}/>
                                <h5 className={"card-title"}>Mobil Lengkap</h5>
                                <p className={"card-text"}>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                            </div>
                        </div>
                    </div>
                    <div className={"col col-md-6 col-lg-3 col-sm-12 col-12"}>
                        <div className={"card position-static card-height"}>
                            <div className={"card-body"}>
                                <img src={"images/icon_price.png"}/>
                                <h5 className={"card-title"}>Harga Murah</h5>
                                <p className={"card-text"}>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                            </div>
                        </div>
                    </div>
                    <div className={"col col-md-6 col-lg-3 col-sm-12 col-12"}>
                        <div className={"card position-static card-height"}>
                            <div className={"card-body"}>
                                <img src={"images/icon_24hrs.png"}/>
                                <h5 className={"card-title"}>Layanan 24 Jam</h5>
                                <p className={"card-text"}>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                            </div>
                        </div>
                    </div>
                    <div className={"col col-md-6 col-lg-3 col-sm-12 col-12"}>
                        <div className={"card position-static card-height"}>
                            <div className={"card-body"}>
                                <img src={"images/icon_professional.png"}/>
                                <h5 className={"card-title"}>Sopir Profesional</h5>
                                <p className={"card-text"}>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;