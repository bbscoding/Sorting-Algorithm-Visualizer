import React, { useState, useEffect, createContext } from 'react'
import "../styles/form.css"
import Tray from "./Tray"

export const DataContext = createContext()


const form = () => {
    const [number, setNumber] = useState(100)
    const [algorithm, setAlgorithm] = useState("bubbleSort")
    const [data, setData] = useState([])

    function handleCountChange(e) {
        setNumber(e.target.value)
    }
    function handleAlgorithmChange(e) {
        setAlgorithm(e.target.value)
    }
    function genereateSample(number) {
        document.querySelector("#isSorted").value = 0
        if (number <= 1) {
            window.alert("The minimum array size is 2, please enter a bigger value")
            return;
        }
        if (number > 200) {
            window.alert("The max array size is 200, please enter a smaller value")
            return;
        }

        const newData = [];
        let dataCounter = 0;
        let randomElement;
        while (dataCounter < number) {
            randomElement = Math.floor(Math.random() * number + 1);
            if (!newData.includes(randomElement)) {
                newData[dataCounter] = randomElement;
                dataCounter++;
            }
        }
        setData(newData)
    }
    useEffect(() => {
        genereateSample(number)
    }, [])


    return (
        <>
            <div>
                <select name="sortingAlgorithm" id="sortingAlgorithm" className="formElement" onChange={handleAlgorithmChange}>
                    <option value="bubbleSort">Bubble Sort</option>
                    <option value="selectionSort">Selection Sort</option>
                    <option value="insertionSort">Insertion Sort</option>
                    <option value="cocktailShakerSort">Cocktail Shaker Sort</option>
                </select>
                <input id="count" placeholder="Array Size" className="formElement" autoComplete="off" value={number} onChange={handleCountChange} />
                <button className="formElement" onClick={() => generateSample(number)} id="generateButton">Generate Sample ↻</button>
                <DataContext.Provider value={data}>
                    <Tray algorithm={algorithm} data={data} setData={setData} />
                </DataContext.Provider>

            </div>
        </>
    )
}

export default form