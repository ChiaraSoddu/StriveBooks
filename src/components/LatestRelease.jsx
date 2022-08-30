import horror from '../data/horror.json'
import { Container, Row, Col } from 'react-bootstrap';

const LatestRelease = () => (
<Container>
      
      <Row className="LibroRow">
        {
        horror.map((libro) => (
        <Col xs={4} key={libro.id} className='mb-6'>
            <img src={libro.img} alt="" style={{width: '50%'}}/>
        </Col>
        ))}
      </Row>
    </Container>
)

export default LatestRelease