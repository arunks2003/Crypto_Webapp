import React, { useEffect, useState } from 'react'
import './Feature.css'
import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import axios from 'axios'
// import '../setupProxy'

const Feature = () => {

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en"
    const [data, setData] = useState(null);
    useEffect(() => {
        axios
            .get(
                url
            )
            .then(res => {
                setData(res.data)
                //  console.log(res.data);
            }).catch(error => console.log(error))
    }, []);

    // console.log(data);

    if (!data) {
        return null;
    }

    return (
        <div className='featured'>
            <div className="container">
                {/* left */}
                <div className="left">
                    <h2>Explore the Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                    <button className='btn'>See More Coins</button>
                </div>


                {/* Right */}
                <div className="right">
                    <div className="card">
                        <div className="top">
                            {/* <img src={BTC} alt="/" /> */}
                            <img src={data[0] && data[0].image ? data[0].image : ""} alt="" />
                        </div>
                        <div>
                            <h5>{data[0].name}</h5>
                            <p>${data[0].current_price.toLocaleString()}</p>
                        </div>

                        {data[0].price_change_percentage_24h < 0 ? (
                            <span className='red'><FiArrowDown className='icon' />{data[0].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (<span className='green'><FiArrowUpRight className='icon' />{data[0].price_change_percentage_24h.toFixed(2)}%</span>)}
                    </div>


                    <div className="card">
                        <div className="top">
                            {/* <img src={BTC} alt="/" /> */}
                            <img src={data[1] && data[1].image ? data[1].image : ""} alt="" />
                        </div>
                        <div>
                            <h5>{data[1].name}</h5>
                            <p>${data[1].current_price.toLocaleString()}</p>
                        </div>

                        {data[1].price_change_percentage_24h < 0 ? (
                            <span className='red'><FiArrowDown className='icon' />{data[1].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (<span className='green'><FiArrowUpRight className='icon' />{data[1].price_change_percentage_24h.toFixed(2)}%</span>)}
                    </div>




                    <div className="card">
                        <div className="top">
                            {/* <img src={BTC} alt="/" /> */}
                            <img src={data[2] && data[2].image ? data[2].image : ""} alt="" />
                        </div>
                        <div>
                            <h5>{data[2].name}</h5>
                            <p>${data[2].current_price.toLocaleString()}</p>
                        </div>

                        {data[2].price_change_percentage_24h < 0 ? (
                            <span className='red'><FiArrowDown className='icon' />{data[2].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (<span className='green'><FiArrowUpRight className='icon' />{data[2].price_change_percentage_24h.toFixed(2)}%</span>)}
                    </div>



                    <div className="card">
                        <div className="top">
                            {/* <img src={BTC} alt="/" /> */}
                            <img src={data[3] && data[3].image ? data[3].image : ""} alt="" />
                        </div>
                        <div>
                            <h5>{data[3].name}</h5>
                            <p>${data[3].current_price.toLocaleString()}</p>
                        </div>

                        {data[3].price_change_percentage_24h < 0 ? (
                            <span className='red'><FiArrowDown className='icon' />{data[3].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (<span className='green'><FiArrowUpRight className='icon' />{data[3].price_change_percentage_24h.toFixed(2)}%</span>)}
                    </div>



                    <div className="card">
                        <div className="top">
                            {/* <img src={BTC} alt="/" /> */}
                            <img src={data[5] && data[5].image ? data[5].image : ""} alt="" />
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'><FiArrowDown className='icon' />{data[5].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (<span className='green'><FiArrowUpRight className='icon' />{data[5].price_change_percentage_24h.toFixed(2)}%</span>)}
                    </div>



                    <div className="card">
                        <div className="top">
                            {/* <img src={BTC} alt="/" /> */}
                            <img src={data[4] && data[4].image ? data[4].image : ""} alt="" />
                        </div>
                        <div>
                            <h5>{data[4].name}</h5>
                            <p>${data[4].current_price.toLocaleString()}</p>
                        </div>

                        {data[4].price_change_percentage_24h < 0 ? (
                            <span className='red'><FiArrowDown className='icon' />{data[4].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (<span className='green'><FiArrowUpRight className='icon' />{data[4].price_change_percentage_24h.toFixed(2)}%</span>)}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Feature
