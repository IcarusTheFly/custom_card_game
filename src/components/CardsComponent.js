import React, { Component } from 'react';
import CardModal from './CardModalComponent';
import { Card, CardImg, Collapse, CardText, CardBody, CardTitle } from 'reactstrap';

export default class Cards extends Component {
    constructor(props) {
        super(props);

        // this.toggleBody = this.toggleBody.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.closeModal = this.toggleModal.bind(this);
        this.state = {
            showCardBodyID: null,
            modalCardID: null
        };
    }

    // toggleBody(card) {
    //     this.setState({
    //         showCardBodyID: card.id
    //     });
    //     console.log(this.state);
    // }

    toggleModal(card) {
        this.setState({
            modalCardID: (card !== undefined)? card.id : null
        });
    }

    closeModal() {
        this.setState({
            modalCardID: null
        });
    }

    render() {
        const cardList = this.props.cards.map((card) => {
            return (
                <div key={card.id} className="col-6 col-md-3 mt-2">
                    <Card>
                        {/* <CardImg onClick={() => this.toggleBody(card)} width="100%" src={"assets/images/" + card.img} alt={card.name} /> */}
                        <CardImg onClick={() => this.toggleModal(card)} width="100%" src={"assets/images/" + card.img} alt={card.name} />
                        <Collapse isOpen={this.state.showCardBodyID === card.id}>
                            <CardBody>
                                <CardTitle>{card.name}</CardTitle>
                                <CardText>{card.description}</CardText>
                            </CardBody>
                        </Collapse>
                    </Card>
                    <CardModal isOpen={this.state.modalCardID === card.id} toggle={() => this.toggleModal()} card={card} close={this.closeModal} />
                </div>
            );
        });

        return (
            <div className="container">
                <h4 className="mt-3 border-info border-bottom">Cards List</h4>
                <div className="row">
                    {cardList}
                </div>
            </div>
        );
    }
}