import img1 from './images/burger.jpg'
import img2 from './images/coke-bottle.jpg'
import img3 from './images/milkshake.jpg'
import img4 from './images/pasta.jpg'
import img5 from './images/water-bottle.jpg'
import img6 from './images/juice.jpg'
import img7 from './images/green-tea.jpg'
import img8 from './images/coffee.jpg'

const images = [
    {
        id: 1,
        img: img1,
    },
    {
        id: 1,
        img: img1,
    },
    {
        id: 2,
        img: img2,
    },
    {
        id: 2,
        img: img2,
    },
    {
        id: 3,
        img: img3,
    },
    {
        id: 3,
        img: img3,
    },
    {
        id: 4,
        img: img4,
    },
    {
        id: 4,
        img: img4,
    },
    {
        id: 5,
        img: img5,
    },
    {
        id: 5,
        img: img5,
    },
    {
        id: 6,
        img: img6,
    },
    {
        id: 6,
        img: img6,
    },
    {
        id: 7,
        img: img7,
    },
    {
        id: 7,
        img: img7,
    },
    {
        id: 8,
        img: img8,
    },
    {
        id: 8,
        img: img8,
    },
    
    // sort method to suffle array of objects
].sort( () => Math.random() - 0.5);

export default images;