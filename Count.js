function maxValue()
{
    var max=arr[0];
    for(var i=1;i<size;i++)
    {
        if(max<arr[i])
        {
            max=arr[i];
        }
    }
    return max;
}
async function countingSort()
{
    disableButton(true);
    var max= await maxValue();
    var countArray=[];
    var auxialaryArray=arr.slice();
    for(var i=0;i<=max;i++)
    {
        countArray[i]=0;
    }
    for(var i=0;i<size;i++)
    {
        countArray[auxialaryArray[i]]++;
    }
    for(var i=1;i<=max;i++)
    {
        countArray[i]=countArray[i]+countArray[i-1];
    }
    for(var i=size-1;i>=0;i--)
    {
        
        arr[--countArray[auxialaryArray[i]]]=auxialaryArray[i];
       animate(i,countArray[auxialaryArray[i]],secondColor);

        ele[countArray[auxialaryArray[i]]].style.height = arr[countArray[auxialaryArray[i]]] + "vh";
        await new Promise((resolve)=>{
            setTimeout(resolve,timer);
        })
       animate(i,countArray[auxialaryArray[i]],firstColor);
    }
    disableButton(false);
}