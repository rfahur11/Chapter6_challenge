function Footer () {
    return (
        <footer>
            <div className={"container-md"}>
                <div className={"row"}>
                    <div className={"col col-lg-3 col-sm-12 col-12"}>
                        <p id="alamat-width-custom">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-344-808</p>
                    </div>
                    <div className={"col col-lg-2 col-sm-12 col-12"}>
                        <ul>
                            <li><a className={"link-dark"} href="#our-services">Our Services</a></li>
                            <li><a className={"link-dark"} href="#why-us">Why Us</a></li>
                            <li><a className={"link-dark"} href="#testimonial">Testimonial</a></li>
                            <li><a className={"link-dark"} href="#faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div className={"col col-lg-4 col-sm-12 col-12 "}>
                        <p id="social-media-custom">Connect with us</p>
                        <div className={"row logo-social-media"}>
                            <img src={"images/icon_facebook.png "} alt=''/>
                            <img src={"images/icon_instagram.png "} alt=''/>
                            <img src={"images/icon_twitter.png "} alt=''/>
                            <img src={"images/icon_mail.png "} alt=''/>
                            <img src={"images/icon_twitch.png "} alt=''/>
                        </div>
                    </div>
                    <div className={"col col-lg-3 col-sm-12 col-12"}>
                        <p>Copyright Binar 2022</p>
                        <img id="logo-custom" src={"images/logo.png "}/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;