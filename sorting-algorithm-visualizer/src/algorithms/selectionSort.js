import sleep from "./sleep";
import greenLayer from "./greenLayer";
import inputOn from "./inputOn";

async function selectionSort(data , setData ,speed, jump)
{
    let buffer = [...data]
    const n = buffer.length
    let min , i , j

    let counter = 0
let flag = 0
    for (i = 0 ; i < n ; i++)
    {
        
        const positionElement = document.getElementById(i)
        positionElement.style.backgroundColor = "green"

        min = i 
        
        document.getElementById(i).style.backgroundColor = "green"

        let minElement = document.getElementById(min)
        minElement.style.backgroundColor = "red"
        for (j = i + 1 ; j < n; j++)
        {
            flag  = 0
            const swapCheck = document.getElementById(j)
            swapCheck.style.backgroundColor = "red"
            if (buffer[j] < buffer[min])
            { 
            
                minElement.style.backgroundColor = "black"
                min = j
                minElement = document.getElementById(min)
                minElement.style.backgroundColor = "red"
                flag = 1
                
            }
            document.getElementById(i).style.backgroundColor = "green"
        
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
                if (flag == 0)
                {
                    swapCheck.style.backgroundColor = "black"
                }
          
        }
        
        if (min != i)
        {        
           
            const temp = buffer[min]
            buffer[min] = buffer[i]
            buffer[i] = temp


            const x = document.getElementById(min)
            const y = document.getElementById(i)

            const tempHeight = x.style.height
            x.style.height = y.style.height
            y.style.height = tempHeight

            setData(buffer)

        }
    
    //positionElement.style.backgroundColor = "black"
    document.getElementById(i).style.backgroundColor = "black"
        
    minElement.style.backgroundColor = "black"
        
    }

    greenLayer(data , speed  ,jump)
    inputOn()

}

export default selectionSort