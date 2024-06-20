import { useEffect, useState } from "react";
import HouseRow from "./houseRow";

const houseArray = [
{
    id: 1,
    address: "12 Valley of Kings, Geneva",
    country: "Switzerland",
    price: 900000,
},
{
    id: 2,
    address: "89 Road of Forks, Bern",
    country: "Switzerland",
    price: 500000,
},
{
    id: 3,
    address: "891 Road of Goderich, Hola",
    country: "Germany",
    price: 600000,
},
];

const HouseList = () => {
    // const [houses, setHouses] = useState([]);
    const [houses, setHouses] = useState(houseArray);
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     const fetchHouses = async() => {
    //         const response = await fetch("/api/houses");
    //         const houses = await response.json();
    //         setHouses(houses);
    //     }
    //     fetchHouses();
    // }, []);

    const addHouse = () => {
        setHouses([
            ...houses, 
            {
                id: 4,
                address: "54 Road of Hay, Hola",
                country: "Australia",
                price: 400000,
            }
        ]);
    };

    const buttonClick = () => {
        setCount(count+1);
    }

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map(h => (
                        <HouseRow key={h.id} house={h}/>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>
                Add
            </button>
            <div className="row">
                <div className="col-2">点击次数：{count}</div>
                <button onClick={buttonClick} className="btn btn-warning col-1">
                    赞
                </button>
            </div>
        </>
    )
};

export default HouseList;