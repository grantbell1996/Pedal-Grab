import React, { useEffect, useState } from "react"

export const DelayList = () => {
    const [pedals, setPedals] = useState([])

    //make a useEffect that watches the the state of customers 
    useEffect(
        () => {
            //location of the fetch is the customers in the api
            fetch("http://localhost:8088/pedals?_expand=effect/")
                //retrieve the data from the api in json format
                .then(res => res.json())
                .then((data) => {
                    //use the second parameter of the useState to make the array of customers from the api in javascript
                    setPedals(data)
                })
        },
        []
    )


    useEffect(
        () => {

        },
    [pedals]
    )

    return (
        <>
        <h2>Delay Pedals</h2>
            {
                //use the map method to make a new array of the pedal properties converted into a single line of string 
                pedals.map(
                    (pedalObject) => {
                        if (pedalObject.effectId === 6) {
                        return <p key={`reverb--${pedalObject.id}`}>{pedalObject.name} by {pedalObject.maker} --{pedalObject.price}.00</p>
                    }
                }
                )
            }
        </>
    )
}