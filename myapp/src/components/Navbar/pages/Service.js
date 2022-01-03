import React, { useState } from 'react'
import Navbar from '../Navbar'
import { Menu } from './Menu'
import './Pages.css'
import { useHistory } from 'react-router-dom'

const button = [...new Set(Menu.map((ele) => {
    return ele.category;
})), 'all Item']
// console.log(button)

function Service() {
    const [item, setitem] = useState(Menu);
    const [btn, setbtn] = useState(button)
    const [search, setsearch] = useState('')
    const [result, setresult] = useState([])
    let history = useHistory();


    const filterMenu = (category) => {

        if (category === 'all Item') {
            setitem(Menu);

        } else {
            setitem(Menu.filter((ele) => {
                return ele.category === category;
            }))

        }
    }
    const handleClick = () => {
        history.push('/contact');
    }

    const clickHandle = () => {
        setitem(Menu.filter((Ele) => {
            return Ele.name.toLowerCase() === search.toLowerCase();

        }))
        setsearch('')
    }


    return (
        < div className='main-div'>
            <Navbar />
            <h1>Order your favourite dish</h1>
            <br />
            <div className='menu'>
                {
                    btn.map((element) => {
                        return <button className='btn1' key={element.id} onClick={() => filterMenu(element)}>{element}</button>
                    })
                }

                <input type="text" placeholder="search anything" value={search} onChange={(e) => setsearch(e.target.value)} />
                <button onClick={clickHandle}>Search</button>

            </div>
            <div className='itemmenu'>
                {
                    item.map((elem) => {
                        const { id, name, image, price, category } = elem;
                        return (
                            <div key={id} className='item1'>
                                <div>
                                    <img src={image} alt="" className='img' />
                                </div>
                                <div>
                                    <h2>{name}</h2>
                                    <p>Price: {price}</p>
                                    <button className='btn-order' onClick={handleClick}>Order now</button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>

        </div>
    )
}

export default Service
