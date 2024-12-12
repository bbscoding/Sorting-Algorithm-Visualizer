
import greenLayer from "./greenLayer";
import sleep from "./sleep";
import inputOn from "./inputOn";



async function cocktailShakerSort(data, setData, speed , jump )
{
    let buffer = [...data]
    const n = data.length
    let i 
    let flag = 1

    let counter = 0
    while (flag == 1)
    {
        flag = 0
        for (i = 0 ; i < n - 1 ; i++)
        {
            if (buffer[i] > buffer[i+1])
            {
                flag = 1
                let temp = buffer[i]
                buffer[i] = buffer[i+1]
                buffer[i+1] = temp

                const x = document.getElementById(i);
              const y = document.getElementById(i+1);

              x.style.backgroundColor = "red"
              y.style.backgroundColor = "red"
              
              const tempHeight = x.style.height;
              x.style.height = y.style.height;
              y.style.height = tempHeight;
            
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
        }
        if (flag == 0)
        {
            break
        }
        setData(buffer)
        flag = 0

        for (i = n - 1 ; i >=1 ; i--)
        {
            if (buffer[i] < buffer[i-1])
            {
                flag = 1
                let temp = buffer[i]
                buffer[i] = buffer[i-1]
                buffer[i-1] = temp
                const x = document.getElementById(i);
                const y = document.getElementById(i-1);

              x.style.backgroundColor = "red"
              y.style.backgroundColor = "red"
              
              const tempHeight = x.style.height;
              x.style.height = y.style.height;
              y.style.height = tempHeight;
              
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
        }
        setData(buffer)

    }
    greenLayer(data ,speed ,jump)
    inputOn()
}

export default cocktailShakerSort