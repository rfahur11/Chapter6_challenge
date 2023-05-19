function OurServices() {
    return (
        <section id="our-services">
            <div className={"container-md"}>
                <div className={"row"}>
                    <div className={"col col-lg-6 col-md-12 col-sm-12 col-12 justify-content-start"}>
                        <img src={"images/service.png"} className={"img-responsive people-services"} alt="service"/>
                    </div>
                    <div className={"col col-lg-6 col-md-12 col-sm-12 col-12 justify-content-end desc-services"}>
                        <h1>Best Car Rental for any kind of trip in Lokasimu!</h1>
                        <p id="custom-text">Sewa mobil di Lokasimu bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <div className={"row lists-services"}>
                            <img src={"images/correct.png"} className={"img-responsive correct"} alt="correct"/>
                            <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                        </div>
                        <div className={"row lists-services"}>
                            <img src={"images/correct.png"} className={"img-responsive correct"} alt="correct"/>
                            <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                        </div>
                        <div className={"row lists-services"}>
                            <img src={"images/correct.png"} className={"img-responsive correct"} alt="correct"/>
                            <p>Sewa Mobil Jangka Panjang Bulanan</p>
                        </div>
                        <div className={"row lists-services"}>
                            <img src={"images/correct.png"} className={"img-responsive correct"} alt="correct"/>
                            <p>Gratis Antar - Jemput Mobil di Bandara</p>
                        </div>
                        <div className={"row lists-services"}>
                            <img src={"images/correct.png"} className={"img-responsive correct"} alt="correct"/>
                            <p>Layanan Airport Transfer / Drop In Out</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurServices;