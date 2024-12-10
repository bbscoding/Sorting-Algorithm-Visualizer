import sleep from "./sleep";


async function greenLayer(data , speed , jump)
{
    let i , j;
        let counter = 0
        const n = data.length
        for (i = 0 ; i < n ; i++) // this is the required number of iterations
        {  
            document.getElementById(i).style.backgroundColor = "green"

        }
        await sleep(250)
        for (i = 0 ; i < n ; i++) // this is the required number of iterations
        {  
            document.getElementById(i).style.backgroundColor = "black"

        }
}



export default greenLayer