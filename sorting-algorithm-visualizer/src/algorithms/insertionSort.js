import sleep from "./sleep";
import greenLayer from "./greenLayer";
import inputOn from "./inputOn";


async function insertionSort(data ,setData , speed , jump)
{
let i , j , key;
let buffer = [...data]
const n = buffer.length
let counter = 0
for (i = 1 ; i < n ; i++)
{
    
    key = buffer[i]
    j = i -1
    
    let keyElement = document.getElementById(i)
    const keyHeight = keyElement.style.height
    
    keyElement.style.backgroundColor = "red"
    let comparisonElement
    while (j >= 0 && buffer[j] > key)
    {
        comparisonElement = document.getElementById(j)
        comparisonElement.style.backgroundColor = "red"

        buffer[j+1] = buffer[j];

        const x = document.getElementById(j);
        const y = document.getElementById(j+1);

        x.style.backgroundColor = "red"
        y.style.backgroundColor = "red"
        
        const tempHeight = x.style.height;
        x.style.height = y.style.height;
        y.style.height = tempHeight;

        j--;

        if (jump != 0)
        {
            if (counter == jump)
            {
                counter = 0
                await sleep(speed)
              
            }
            counter++;
        }
        else
        {
            await sleep(speed)
        }

      x.style.backgroundColor = "black"
      y.style.backgroundColor = "black"





    }
    buffer[j+1] = key;

    document.getElementById(j+1).style.height = keyHeight
    
    setData(buffer)
}
greenLayer(data, speed , jump)
inputOn()
}


export default insertionSort

