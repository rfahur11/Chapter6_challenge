function Header() {
    return (
        <header>
            <div className={"container-md hero"}>
                <div className={"row"}>
                    <div className={"col col-lg-6 col-md-12 col-sm-12 col-12 justify-content-md-start text-hero"}>
                        <h1>Sewa &amp; Rental Mobil Terbaik di kawasan Lokasimu</h1>
                        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        <a href="/cars"><button type="button" className={"btn btn-success"}>Mulai Sewa Mobil</button></a>
                    </div>
                    <div className={"col col-lg-6 col-md-12 col-sm-12 col-12 justify-content-md-end img-hero"}>
                        <img src={"images/car.png"} className={"img-responsive img-hero"} alt="car"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;