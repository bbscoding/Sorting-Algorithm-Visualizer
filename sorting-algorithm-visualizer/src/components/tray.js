import React, { useContext, useEffect, useState } from "react";
import "../styles/Tray.css"
import { DataContext } from "./Form"
import Bar from "./Bar"
import BubbleSort from "../algorithms/BubbleSort";
import cocktailShakerSort from "../algorithms/cocktailShakerSort";
import selectionSort from "../algorithms/selectionSort";
import insertionSort from "../algorithms/insertionSort";
const Tray = (props) => {
    const data = useContext(DataContext)
    const [jump, setJump] = useState(0)
    const [sliderValue, setSliderValue] = useState(51)
    // console.log(speedValue)
    console.log(props)

    function sort() {
        console.log("This is from the sorting function ")
        if (document.getElementById("isSorted").value == "1") {
            return
        }
        console.log("this is after the if statement of the sorring function ")
        document.getElementById("isSorted").value = "1"
        document.getElementById("sortingButton").disabled = true;
        document.getElementById("generateButton").disabled = true;
        console.log("this is the value of props.algorithm ; ", props.algorithm)
        switch (props.algorithm) {
            case "bubbleSort":
                {
                    BubbleSort(props.data, props.setData, props.speedValue, jump)
                    break;
                }
            case "selectionSort":
                {
                    selectionSort(props.data, props.setData, props.speedValue, jump)
                    break;
                }
            case "insertionSort":
                {
                    insertionSort(props.data, props.setData, props.speedValue, jump)
                    break;
                }
            case "cocktailShakerSort":
                {
                    cocktailShakerSort(props.data, props.setData, props.speedValue, jump)
                    break;
                }
        }

    }

    return (<React.Fragment>
        <button onClick={sort} id="sortingButton" className="edit">Sort ⇄</button>
        <div className="tray" id="tray">
            <div className="screen" id="screen">
                {
                    data.map(function (item, i) {
                        return <Bar length={data.length} id={i} key={i} value={item} i={i} />
                    })
                }
            </div>
        </div>
    </React.Fragment>)
}

export default Tray