async function insertionSort() {
    disableButton(true);
    for (var i = 0; i < size-1; i++) {
        var j=i+1;
        var key=arr[j];
        ele[i+1].style.backgroundColor = secondColor;
        while(j-1>=0 && key<arr[j-1] )
        {
            arr[j]=arr[j-1];
            ele[j].style.height = arr[j] + "vh";
            if(j>0)
            {
                ele[j-1].style.backgroundColor = secondColor;
            }
            await new Promise((resolve) => {
                        setTimeout(resolve, timer);
                    })
            if(j>0)
            {
                ele[j-1].style.backgroundColor = firstColor;
            }
            j--;
        }
        arr[j]=key;
        ele[j].style.height = arr[j] + "vh";
        ele[i+1].style.backgroundColor = firstColor;
    }
    disableButton(false);
}