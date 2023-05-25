import React, { Component } from 'react';

class Cards extends Component {
    render() {
        return (
            <div className="card" style={{ width: "18rem", textAlign: 'center' }}>
                <img src={this.props.card.Img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.card.Name} Roll</h5>
                    <p className="card-text">&euro;{this.props.card.Price} </p>
                    <div className='d-flex justify-content-center align-items-center gap-4'>
                        <button type="button" class="btn btn-success position-relative" onClick={() => this.props.onIncrement(this.props.card)}>
                            Add
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
                                {this.props.card.Quantity}
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </button>
                        <button className="btn btn-danger fw-bold" onClick={() => this.props.onDelete(this.props.card.id)}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;