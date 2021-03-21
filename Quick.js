async function partition(l,r)
{
    disableButton(true);
    var i=l-1;
    var pivot=arr[r];
    animate2(r,thirdColor);
    for(var j=l;j<r;j++)
    {
       animate2(j,secondColor);
        if(arr[j]<=pivot)
        {
            i++;
            animate(i,j,secondColor);
            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            ele[i].style.height = arr[i] + "vh";
            ele[j].style.height = arr[j] + "vh";
            await new Promise((resolve) => {
                setTimeout(resolve, timer);
            })
            animate(i,j,firstColor);
        }
        else{
            await new Promise((resolve) => {
                setTimeout(resolve, timer);
            })
            animate2(j,firstColor);
        }
       
    }
    i++;
    animate2(r,firstColor);
    animate(i,r,secondColor);
    arr[r]=arr[i];
    arr[i]=pivot;
    ele[i].style.height = arr[i] + "vh";
    ele[r].style.height = arr[r] + "vh";
    await new Promise((resolve) => {
        setTimeout(resolve, timer);
    })
    animate(i,r,firstColor);
    disableButton(false);
    return i;
}
async function quickSort(l,r){
    if(l<r)
    {
        var pos= await partition(l,r);
        await quickSort(l,pos-1);
        await quickSort(pos+1,r);
    }
}