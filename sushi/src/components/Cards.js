import React, { Component } from 'react';

class Cards extends Component {
    render() {
        return (
            <div className="card" style={{ width: "18rem", textAlign: 'center' }}>
                <img src={this.props.card.Img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.card.Name} Roll</h5>
                    <p className="card-text">&euro;{this.props.card.Price} </p>
                    <div className='d-flex justify-content-center align-items-center gap-2'>
                        <button className="btn btn-success fw-bold">Add</button>
                        <button className="btn btn-danger fw-bold">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;