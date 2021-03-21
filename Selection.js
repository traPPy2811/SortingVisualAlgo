
async function selectionSort() {
    disableButton(true);
    for (var i = 0; i < size; i++) {
        for (var j = i+1; j < size; j++) {
            ele[i].style.backgroundColor = secondColor;
            ele[j].style.backgroundColor = secondColor;
            if (arr[i] > arr[j]) {
                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
                ele[i].style.height = arr[i] + "vh";
                ele[j].style.height = arr[j] + "vh";

            }
            await new Promise((resolve) => {
                setTimeout(resolve, timer);
            })
            ele[i].style.backgroundColor = firstColor;
            ele[j].style.backgroundColor = firstColor;
        }
        ele[i].style.backgroundColor = fourthColor;
    }
    for(var q=0;q<size;q++)
    {
        animate2(q,firstColor);
        await new Promise((resolve)=>{
            setTimeout(resolve,1);
        })
    }
    disableButton(false);
}
