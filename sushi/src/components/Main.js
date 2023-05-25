import Cards from './Cards'

function Main() {
    return (
        <>
            <div className="container-fluid bg-warning py-3">
                <h3 className="text-center fw-bold fs-2"> Lista dei piatti </h3>
                <div className='row'>
                    <Cards />
                </div>
            </div>
        </>

    );
}

export default Main;