

 async function heapify(idx,hSize)
{
    var largest=idx;
    var l=2*idx+1;
    var r=2*idx+2;
    if(l<hSize && arr[l]>arr[largest])
    {
        largest=l;
    }
    if(r<hSize && arr[r]>arr[largest])
    {
        largest=r;
    }
    if(largest!==idx)
    {
       animate(idx,largest,secondColor);
        var temp=arr[idx];
        arr[idx]=arr[largest];
        arr[largest]=temp;
        ele[idx].style.height = arr[idx] + "vh";
        ele[largest].style.height = arr[largest] + "vh";
        await new Promise((resolve)=>{
            setTimeout(resolve,timer);
        })
       animate(idx,largest,firstColor);
       await heapify(largest,hSize);
    }
}
async function buildHeap()
{
    for(var i=Math.floor(size/2)-1;i>=0;i--)
    {
       await heapify(i,size);
    }
}
 async function heapSort()
{
   disableButton(true);
     await buildHeap();
    var tempIdx=size;
    tempIdx--;
    var i=0;
    while(tempIdx>0)
    {
     animate(i,tempIdx,secondColor);
        var temp=arr[i];
        arr[i]=arr[tempIdx];
        arr[tempIdx]=temp;
        ele[tempIdx].style.height = arr[tempIdx] + "vh";
        ele[i].style.height = arr[i] + "vh";
        await new Promise((resolve)=>{
            setTimeout(resolve,timer);
        })
       animate(i,tempIdx,firstColor);
       animate2(tempIdx,fourthColor);
       await heapify(i,tempIdx);
       tempIdx--;
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