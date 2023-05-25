import California from '../images/california.png';

function Cards() {
    return (
        <div classNameName="col">
            <div className="card" style={{ width: "18rem", textAlign: 'center' }}>
                <img src={California} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">California Rolls</h5>
                    <p className="card-text">5.00 &euro;</p>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Cards;