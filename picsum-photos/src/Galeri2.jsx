import './Galeri.css';
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Image, Row, Table } from 'react-bootstrap';

export default function Galeri2() {
    const [sayfa, setSayfa] = useState(1);
    const [fotolar, setFotolar] = useState([]);
    console.log(fotolar);

    useEffect(() => {
        fetch(`https://picsum.photos/v2/list?page=${sayfa}&limit=30`)
            .then(res => res.json())
            .then(data => setFotolar(data));
    }, [sayfa]);

    return (
        <>
            <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
                {fotolar.map(x => (
                    <Col key={x.id}>
                        <Card className='mb-4'>
                            <a href={`http://picsum.photos/id/${x.id}/${x.width}/${x.height}`} target="_blank">
                                <Card.Img variant="top" src={`http://picsum.photos/id/${x.id}/800/600`} />
                            </a>
                            <Card.Body>
                                <Card.Title className='h6 text-center'>
                                    {x.author}
                                </Card.Title>
                                <Card.Text className='text-black-50 text-center small'>
                                    {x.width}&times;{x.height}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className='d-flex pb-3 mb-3 justify-content-between align-items-center'>
                <Button variant="dark" disabled={sayfa == 1} onClick={() => setSayfa(1)}>|&lt;</Button>{" "}
                <Button variant="dark" disabled={sayfa == 1} onClick={() => setSayfa(sayfa - 1)}>&lt;</Button>
                <span className='fw-bold lead'>Sayfa {sayfa}</span>
                <Button variant="dark" disabled={sayfa == 34} onClick={() => setSayfa(sayfa + 1)}>&gt;</Button>
                <Button variant="dark" disabled={sayfa == 34} onClick={() => setSayfa(34)}>&gt;|</Button>
            </div>
        </>
    );
}