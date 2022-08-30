import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const MyFooter = () => (
    /*<div expand="lg" style={{ backgroundColor: '#333333'}}>
        <Button >Iscriviti</Button>
    </div>*/
    <Card.Footer bg='dark' expand="lg" className="text-muted">
        <p>miglior negozio di libri online</p>
        <Button>Iscriviti</Button>
    </Card.Footer >
    )
    
    export default MyFooter