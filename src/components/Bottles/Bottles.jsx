import { useState, useEffect } from 'react'
import Bottle from '../Bottle/Bottle';
import './Bottles.css';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    return (
        <div>
            <div className='bottles'>
                {
                    bottles.map(bottles => <Bottle key={bottles.id} bottles={bottles}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;