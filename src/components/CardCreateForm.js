import React, { Component } from 'react';
import CardModal from './CardModal';
import { Form, FormGroup, Label, Input, Button, Col, FormFeedback } from 'reactstrap';

class CardCreateForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            img: 'image1.png', // The picture should be hardcoded for now
            title: '',
            name: '',
            description: '',
            isModalOpen: false,
            touched: {
                title: false,
                name: false,
                description: false
            }
        }

        this.toggleCreatedCardModal = this.toggleCreatedCardModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    toggleCreatedCardModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        this.setState({
            isModalOpen: true
        });
        e.preventDefault();
    }

    handleBlur = (field) => {
        return (e) => {
            this.setState({
                touched: { ...this.state.touched, [field]: true }
            })
        }
    }

    validate(title, name, description) {
        const errors = {
            title: '',
            name: '',
            description: ''
        }

        if (this.state.touched.title && title.length < 2) {
            errors.title = 'Card title should have at least 2 characters';
        } else if (this.state.touched.title && title.length > 8) {
            errors.title = 'Card title should not have more than 8 characters';
        }

        if (this.state.touched.name && name.length < 4) {
            errors.name = 'Card name should have at least 4 characters';
        } else if (this.state.touched.name && name.length > 12) {
            errors.name = 'Card name should not have more than 12 characters';
        }

        if (this.state.touched.description && description.length < 5) {
            errors.description = 'Card description should have at least 5 characters';
        }

        return errors;
    }

    disableSubmit(errors) {
        return (
            this.state.title === '' ||
            this.state.name === '' ||
            this.state.description === '' ||
            errors.title !== ''||
            errors.name !== '' ||
            errors.description !== ''
        );
    }

    render() {
        const errors = this.validate(this.state.title, this.state.name, this.state.description);

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label htmlFor="title" md={2}>Title</Label>
                    <Col md={10}>
                        <Input type="text" id="title" name="title"
                            placeholder="Card Title"
                            value={this.state.title}
                            valid={this.state.touched.title && errors.title === ''}
                            invalid={errors.title !== ''}
                            onBlur={this.handleBlur('title')}
                            onChange={this.handleChange}
                            />
                        <FormFeedback>{errors.title}</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="name" md={2}>Name</Label>
                    <Col md={10}>
                        <Input type="text" id="name" name="name"
                            placeholder="Card Name"
                            value={this.state.name}
                            valid={this.state.touched.name && errors.name === ''}
                            invalid={errors.name !== ''}
                            onBlur={this.handleBlur('name')}
                            onChange={this.handleChange} 
                            />
                        <FormFeedback>{errors.name}</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="description" md={2}>Description</Label>
                    <Col md={10}>
                        <Input type="textarea" id="description" name="description"
                            rows="6"
                            valid={this.state.touched.description && errors.description === ''}
                            invalid={errors.description !== ''}
                            onBlur={this.handleBlur('description')}
                            onChange={this.handleChange}
                            />
                        <FormFeedback>{errors.description}</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{size: 3, offset: 9}} className="text-right">
                        <Button type="submit" color="primary" className="customSubmit" disabled={this.disableSubmit(errors)}>
                            Open card view
                        </Button>
                    </Col>
                </FormGroup>
                <CardModal isOpen={this.state.isModalOpen} toggle={() => this.toggleCreatedCardModal()} card={this.state} close={this.toggleCreatedCardModal} />
            </Form>
        );
    }
}

export default CardCreateForm;