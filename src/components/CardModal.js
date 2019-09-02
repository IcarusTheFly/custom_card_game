import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Media } from 'reactstrap';

const CardModal = (props) => {
    const card = props.card;

    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader className="bg-warning">{card.title}</ModalHeader>
            <ModalBody>
            <Media>
                <Media object width="100%" src={"assets/images/" + card.img} alt={card.name} />
            </Media>
            <Media body className="ml-4 mr-2 mt-2">
                <Media heading>{card.name}</Media>
                <p>{card.description}</p>
            </Media>
            {/* <Card>
                <CardImg width="100%" src={"assets/images/" + card.img} alt={card.name} />
                <CardBody>
                    <CardTitle>{card.name}</CardTitle>
                    <CardText>{card.description}</CardText>
                </CardBody>
            </Card> */}
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={props.close}>Close</Button>
            </ModalFooter>
        </Modal>
    );
}

export default CardModal;