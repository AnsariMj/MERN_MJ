import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Card = () => {
    const [data, setData] = useState({})

    const fetchBook = async () => {
        try {
            const response = await axios.get("localhost:5000/api/v1/book/getAllBook")
            console.log(response)
            setData(response.data);


        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchBook()
    }, [])
    console.log(data)
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg my-10">
            <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ufnXPKqiP5HCaV78sSyRJrCgW--utPTbGfkfjN1bOA&s" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
        </div>
    )
}

export default Card