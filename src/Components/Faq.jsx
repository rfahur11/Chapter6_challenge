import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <Container fluid="md" id="faq">
            <Row>
                {/* text */}
                <Col md={5} xs={12}>
                    <h2>Frequently Asked Question</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Col>

                {/* Accourdion */}
                <Col md={7} xs={12}>
                    <Accordion className={"accordion"}>
                        <Accordion.Item eventKey="0" className={"accordion-item"}>
                            <Accordion.Header className={"accordion-header"}>Apa saja syarat yang dibutuhkan?</Accordion.Header>
                            <Accordion.Body className={"accordion-body"}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam neque dicta veritatis dolore nobis corrupti error odio quasi deserunt, cupiditate blanditiis ducimus repudiandae nemo expedita eaque veniam
                                nesciunt illo sit?
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1" className={"accordion-item my-3"}>
                            <Accordion.Header className={"accordion-header"}>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                            <Accordion.Body className={"accordion-body"}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam neque dicta veritatis dolore nobis corrupti error odio quasi deserunt, cupiditate blanditiis ducimus repudiandae nemo expedita eaque veniam
                                nesciunt illo sit?
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" className={"accordion-item my-3"}>
                            <Accordion.Header className={"accordion-header"}>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
                            <Accordion.Body className={"accordion-body"}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam neque dicta veritatis dolore nobis corrupti error odio quasi deserunt, cupiditate blanditiis ducimus repudiandae nemo expedita eaque veniam
                                nesciunt illo sit?
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3" className={"accordion-item my-3"}>
                            <Accordion.Header className={"accordion-header"}>Apakah Ada biaya antar-jemput?</Accordion.Header>
                            <Accordion.Body className={"accordion-body"}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam neque dicta veritatis dolore nobis corrupti error odio quasi deserunt, cupiditate blanditiis ducimus repudiandae nemo expedita eaque veniam
                                nesciunt illo sit?
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4" className={"accordion-item my-3"}>
                            <Accordion.Header className={"accordion-header"}>Bagaimana jika terjadi kecelakaan?</Accordion.Header>
                            <Accordion.Body className={"accordion-body"}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam neque dicta veritatis dolore nobis corrupti error odio quasi deserunt, cupiditate blanditiis ducimus repudiandae nemo expedita eaque veniam
                                nesciunt illo sit?
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default FAQ;
