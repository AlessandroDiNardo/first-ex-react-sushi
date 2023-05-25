import Cards from './Cards'
import California from '../images/california.png';
import Dragon from '../images/dragon.png';
import Dynamite from '../images/dynamite.png';
import Philadelphia from '../images/philadelphia.png';
import Rainbow from '../images/rainbow.png';
import Shrimp from '../images/shrimp.png';


function Main() {
    return (
        <>
            <div className="container-fluid bg-warning py-5">
                <h3 className="text-center fw-bold fs-2"> Lista dei piatti </h3>
                <div className='container px-5 py-5'>
                    <div className='d-flex justify-content-center align-items-center flex-wrap gap-5'>
                        <Cards
                            Img={California}
                            Name="California"
                            Price="5.00"
                        />
                        <Cards
                            Img={Dragon}
                            Name="Dragon"
                            Price="7.00"
                        />
                        <Cards
                            Img={Dynamite}
                            Name="Dynamite"
                            Price="3.00"
                        />
                        <Cards
                            Img={Philadelphia}
                            Name="Philadelphia"
                            Price="7.00"
                        />
                        <Cards
                            Img={Rainbow}
                            Name="Rainbow"
                            Price="7.00"
                        />
                        <Cards
                            Img={Shrimp}
                            Name="Shrimp"
                            Price="7.00"
                        />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Main;