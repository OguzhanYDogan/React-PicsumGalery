import './Galeri.css';
import { useEffect } from "react";
import { useState } from "react";
import { Button, Image, Pagination, Table } from 'react-bootstrap';

export default function Galeri() {
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
            <Table striped bordered hover className='text-center align-middle'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Fotoğrafçı</th>
                        <th>Boyut</th>
                        <th>Resim</th>
                    </tr>
                </thead>
                <tbody>
                    {fotolar.map(x => (
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.author}</td>
                            <td>{x.width}&times;{x.height}</td>
                            <td>
                                <a href={`http://picsum.photos/id/${x.id}/${x.width}/${x.height}`} target="_blank">
                                    <Image src={`http://picsum.photos/id/${x.id}/80/60`} thumbnail width={80} height={60} />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className='d-flex p-2 mb-2 justify-content-between align-items-center'>
                <Button variant="dark" disabled={sayfa == 1} onClick={() => setSayfa(1)}>|&lt;</Button>{" "}
                <Button variant="dark" disabled={sayfa == 1} onClick={() => setSayfa(sayfa - 1)}>&lt;</Button>
                <span className='fw-bold lead'>Sayfa {sayfa}</span>
                <Button variant="dark" disabled={sayfa == 34} onClick={() => setSayfa(sayfa + 1)}>&gt;</Button>
                <Button variant="dark" disabled={sayfa == 34} onClick={() => setSayfa(34)}>&gt;|</Button>
            </div>
        </>
    );
}