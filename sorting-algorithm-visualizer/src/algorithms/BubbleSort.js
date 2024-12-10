import sleep from "./sleep";
import greenLayer from "./greenLayer";
import inputOn from "./inputOn";
async function BubbleSort(data, setData, speed, jump) {

  let buffer = [...data]

  let counter = 0
  const n = buffer.length
  let i, j;

  for (i = 0; i < n; i++) // this is the required number of iterations
  {
    for (j = 0; j < n - 1; j++) {

      if (buffer[j] > buffer[j + 1]) {

        // we have to swap j and j + 1
        // first we change their height

        const x = document.getElementById(j);
        const y = document.getElementById(j + 1);

        x.style.backgroundColor = "red"
        y.style.backgroundColor = "red"

        const tempHeight = x.style.height;
        x.style.height = y.style.height;
        y.style.height = tempHeight;


        let temp = buffer[j];
        buffer[j] = buffer[j + 1];
        buffer[j + 1] = temp;

        await sleep(1)

        x.style.backgroundColor = "black"
        y.style.backgroundColor = "black"


        setData(buffer)
      }
    }
  }


  greenLayer(data, speed, jump)
  inputOn()
}


export default BubbleSort