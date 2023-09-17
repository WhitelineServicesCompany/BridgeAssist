import Card from 'react-bootstrap/Card';
import styles from "./Card.module.css"
function CardVal(props) {
  return (
    <Card style={{ width: '18rem' }} className={`${styles.card} mx-auto`}>
      <Card.Body>
        <h2 className={`${styles.title}`}>{props.title}</h2>
        <Card.Text className={`${styles.text}`}>
         {props.text}
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" style={{borderRadius:'10px'}} src={`/images/${props.img}`}/>
    </Card>
  );
}

export default CardVal;