import { Container, Form } from 'react-bootstrap'
import './App.css'
import Galeri from './Galeri'
import Galeri2 from './Galeri2'
import { useState } from 'react'

function App() {
  const [gorunum, setGorunum] = useState(1);

  return (
    <div>
      <Container>
        <header className='mt-3 mb-3 d-flex justify-content-between align-items-baseline'>
          <h1>Picsum Fotoğraf Galerisi</h1>
          <div>
            <Form.Select value={gorunum} onChange={e => setGorunum(e.target.value)}>
              <option value="1">Tablo</option>
              <option value="2">Kartlar</option>
            </Form.Select>
          </div>
        </header>
        {gorunum == 1 && <Galeri />}
        {gorunum == 2 && <Galeri2 />}
      </Container>
    </div>
  )
}

export default App
