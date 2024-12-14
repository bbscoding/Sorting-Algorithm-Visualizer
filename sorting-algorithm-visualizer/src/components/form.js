import React, { useState, useEffect, createContext } from "react";
import "../styles/Form.css"
import Tray from "./Tray";

export const DataContext = createContext()
function Form() {
    const [number, setNumber] = useState(50);
    const [algorithm, setAlgorithm] = useState("bubbleSort");
    const [data, setData] = useState([])
    const [speedValue, setSpeedValue] = useState(1)

    function handleCountChange(e) {
        setNumber(e.target.value)
    }
    function handleAlgorithmChange(e) {
        setAlgorithm(e.target.value)
    }
    function handleSpeedValueChange(e) {
        setSpeedValue(e.target.value)
    }

    function generateSample(number) {
        document.getElementById("isSorted").value = 0
        if (number <= 1) {
            window.alert("The minimum array size is 2 , please enter a bigger size")
            return;
        }
        if (number > 5000) {
            window.alert("The max array size is 5000 , please enter a smaller size")
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
        generateSample(number)
    }, [])

    return (
        <React.Fragment>
            <div>
                <select name="sortingAlgorithm" id="sortingAlgorithm" className="formElement" onChange={handleAlgorithmChange}>
                    <option value="bubbleSort">Bubble Sort</option>
                    <option value="selectionSort">Selection Sort</option>
                    <option value="insertionSort">Insertion Sort</option>
                    <option value="cocktailShakerSort">Cocktail Shaker Sort</option>
                </select>
                <label for="count">Data Count</label>
                <input id="count" placeholder="Array Size" className="formElement" autoComplete="off" value={number} onChange={handleCountChange} />
                <label for="speedValue">Speed (in ms)</label>
                <input id="speedValue" placeholder="speedValue" className="speedValue" autoComplete="off" value={speedValue} onChange={handleSpeedValueChange} />
                <button className="formElement" onClick={() => generateSample(number)} id="generateButton">Generate Sample ↻</button>
                <DataContext.Provider value={data}>
                    <Tray algorithm={algorithm} data={data} setData={setData} speedValue={speedValue} />
                </DataContext.Provider>

            </div>


        </React.Fragment>
    )
}


export default Form