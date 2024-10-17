import PropTypes from 'prop-types'
import './Bottle.css'

const Bottle = ({ bottles }) => {
    console.log(bottles);
    const { name, img, price } = bottles;
    return (
        <div className='bottle'>
            <img className='bottles-img' src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
        </div>
    );
};

export default Bottle;

Bottle.propTypes = {
    bottles: PropTypes.object,
}