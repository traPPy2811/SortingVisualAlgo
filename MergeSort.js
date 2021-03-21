
async function domerge(l,mid,r)
{
    disableButton(true);
    var num1=mid-l;
    var num2=r-mid-1;
    var list1=[];
    var list2=[];
    var in1=0;
    for(var a=l;a<=l+num1;a++)
    {
        list1[in1]=arr[a];
        in1++;
    }
    var in2=0;
    for(var a=mid+1;a<=mid+1+num2;a++)
    {
        list2[in2]=arr[a];
        in2++;
    }
    var k=l;
    var i=0;
    var j=0;
    while(i<=num1&& j<=num2)
    {
        var tempI=l+i;
        var tempJ=mid+1+j;
        animate(tempI,tempJ,secondColor);
        if(list1[i]<list2[j])
        {
            arr[k]=list1[i];
            i++;
        }
        else{
            arr[k]=list2[j];
            j++;
        }
       
        await new Promise((resolve) => {
            setTimeout(resolve, timer);
        })
        ele[k].style.height = arr[k] + "vh";
        animate(tempI,tempJ,firstColor);
        k++;
    }
    while(i<=num1)
    {
        var tempI=k;
        arr[k]=list1[i];
        animate2(tempI,thirdColor);
        ele[k].style.height = arr[k] + "vh";
        await new Promise((resolve) => {
            setTimeout(resolve, timer);
        })
        animate2(tempI,firstColor);
        i++;
        k++;
    }
    while(j<=num2)
    {
        var tempJ=k;
        arr[k]=list2[j];
       ele[k].style.height = arr[k] + "vh";
       animate2(tempJ,thirdColor);
        await new Promise((resolve) => {
            setTimeout(resolve, timer);
        })
        animate2(tempJ,firstColor);
        j++;
        k++;
    }
    disableButton(false);
}


//Merge Sort algorithm
async function mergeSortRec(l,r)
{
   
    if(l<r)
    {
        var mid=Math.floor((l+r)/2);
        await mergeSortRec(l,mid);
        await mergeSortRec(mid+1,r);
        await domerge(l,mid,r);
    }
}
