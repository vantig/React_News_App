import React, {useState} from 'react';
import {Button, Card} from "react-bootstrap";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#d0d0fa'
    }
};
Modal.setAppElement('#root');

const FoodItem = ({variant, src, title = '', cost = 0 }) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    let total=cost;
    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };
    const pay = () => {
        console.log( JSON.stringify(`${title} ${cost}`))
    };
    return (
        <>
            <Card
                bg={variant.toLowerCase()}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={src} />
                    <Card.Title>{cost}$ </Card.Title>
                    <Button onClick={() => openModal()} variant="primary">Add</Button>
                </Card.Body>

            </Card>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Card
                    bg={variant.toLowerCase()}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header>{title}</Card.Header>
                    <Card.Body>
                        <Card.Img variant="top" src={src} />
                        <Card.Title>{cost}$ </Card.Title>
                        <Button onClick={() => openModal()} variant="primary">Add</Button>
                    </Card.Body>

                </Card>
                <button onClick={closeModal}>close</button>
                <button onClick={pay}>pay</button>
            </Modal>
        </>



    );
}

export default FoodItem;