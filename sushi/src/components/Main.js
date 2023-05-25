import React, { Component } from 'react';

import Cards from './Cards';
import California from '../images/california.png';
import Dragon from '../images/dragon.png';
import Dynamite from '../images/dynamite.png';
import Philadelphia from '../images/philadelphia.png';
import Rainbow from '../images/rainbow.png';
import Shrimp from '../images/shrimp.png';


class Main extends Component {
    state = {
        cards: [
            {
                id: 0,
                Img: California,
                Name: "California",
                Price: 5.00,
                Quantity: 0
            },
            {
                id: 1,
                Img: Dragon,
                Name: "Dragon",
                Price: 7.00,
                Quantity: 0
            },
            {
                id: 2,
                Img: Dynamite,
                Name: "Dynamite",
                Price: 3.00,
                Quantity: 0
            },
            {
                id: 3,
                Img: Philadelphia,
                Name: "Philadelphia",
                Price: 7.00,
                Quantity: 0
            },
            {
                id: 4,
                Img: Rainbow,
                Name: "Rainbow",
                Price: 7.00,
                Quantity: 0
            },
            {
                id: 5,
                Img: Shrimp,
                Name: "Shrimp",
                Price: 7.00,
                Quantity: 0
            },
        ]
    }

    cardDelete = cardId => {
        const cards = this.state.cards.filter(card => card.id != cardId);
        this.setState({ cards });
    }

    cardIncrement = card => {
        const cards = [...this.state.cards];
        const id = cards.indexOf(card);
        cards[id] = { ...card };
        cards[id].Quantity++;
        this.setState({ cards });
    }

    render() {
        return (
            <>
                <div className='container-fluid py-5'>
                    <h3 className='text-center fw-bold fs-2'> Lista dei piatti </h3>
                    <div className='container px-5 py-5' >
                        <div className='d-flex justify-content-center align-items-center flex-wrap gap-5' >
                            {
                                this.state.cards.map(card => (
                                    <Cards
                                        key={card.id}
                                        card={card}
                                        onDelete={this.cardDelete}
                                        onIncrement={this.cardIncrement}
                                    />
                                ))
                            }
                        </div >
                    </div >
                </div >
            </>
        );
    }
}

export default Main;