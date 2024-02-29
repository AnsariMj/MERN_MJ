import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'

const Home = () => {
    const [data, setData] = useState({})

    const fetchBook = async () => {
        try {
            const response = await axios.get("localhost:5000/api/v1/book/getAllBook")
            console.log(response)



        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchBook()
    }, [])
    return (
        <>
            <div className='  flex flex-wrap'>

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default Home