
async function bubbleSort() {
    disableButton(true);
    for (var i = 0; i < size; i++) {
        var j=0;
        for (j = 0; j < (size - 1) - i; j++) {
            ele[j].style.backgroundColor = secondColor;
            ele[j + 1].style.backgroundColor = secondColor;
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                ele[j].style.height = arr[j] + "vh";

                ele[j + 1].style.height = arr[j + 1] + "vh";

            }
            await new Promise((resolve) => {
                setTimeout(resolve, timer);
            })
            ele[j].style.backgroundColor = firstColor;
            ele[j + 1].style.backgroundColor = firstColor;
        }
        ele[j].style.backgroundColor = fourthColor;
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