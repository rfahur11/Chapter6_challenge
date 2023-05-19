function NavbarComponent() {
    return (
        <div className={"container-fluid"}>
            {/* <!--Navigation Bar--> */}
            <nav className={"navbar position-fixed"}>
                <div className={"d-lg-none"}>
                    <nav className={"navbar fixed-top nav-lg-custom"}>
                        <img src={"images/logo.png"} className={"img-responsive"} alt="logo"/>
                        <button className={"navbar-toggler border-0"} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className={"navbar-toggler-icon"}></span>
                        </button>
                        <div className={"offcanvas offcanvas-end"} tab-index="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className={"offcanvas-header"}>
                                <h5 className={"offcanvas-title"} id="offcanvasNavbarLabel">BCR</h5>
                                <button type="button" className={"btn-close"} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className={"offcanvas-body"}>
                                <ul className={"navbar-nav justify-content-end flex-grow-1 pe-1"}>
                                    <li className={"nav-item"}>
                                        <a className={"nav-link"} href="#our-services">Our Services</a>
                                    </li>
                                    <li className={"nav-item"}>
                                        <a className={"nav-link"} href="#why-us">Why Us</a>
                                    </li>
                                    <li className={"nav-item"}>
                                        <a className={"nav-link"} href="#testimonial">Testimonial</a>
                                    </li>
                                    <li className={"nav-item"}>
                                        <a className={"nav-link"} href="#faq">FAQ</a>
                                    </li>
                                    <li className={"nav-item"}>
                                        <a className={"nav-link active mid-a"} aria-current="page" href="#">Register</a>
                                    </li>
                                </ul>
                            </div>
                          </div>
                      </nav>
                </div>
                <img src={"images/logo.png"} className={"img-responsive img-xl-custom"} alt="logo"/>
                <ul className={"nav nav-pills justify-content-end nav-xl-custom"}>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href="#our-services">Our Services</a>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href="#why-us">Why Us</a>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href="#testimonial">Testimonial</a>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href="#faq">FAQ</a>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link active"} aria-current="page" href="#">Register</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavbarComponent;
