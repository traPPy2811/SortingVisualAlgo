var arr;
var ele;
var size;
var width=3;
var timer=3;
var firstColor="limegreen";
var secondColor="#242582";
var thirdColor="red";
var fourthColor="#f64c72";
const slider1=document.querySelector("#slide1");
const slider2=document.querySelector("#slide2");
slider1.addEventListener('input',(e)=>{display()});
slider2.addEventListener('input',(e)=>{timer=parseInt(slider2.value)});
function setArraySizeansTimer()
{
    size=parseInt(slider1.value);
    if(size<50)
    {
        width=7;
    }
    else{
        if(size<120)
        {
            width=5;
        }
        else{
            width=3;
        }
    }
    timer=parseInt(slider2.value);
}

function newArray()
{
    for (var i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * 79) + 6;
    }
}
function disableButton(check)
{
    const button=document.querySelectorAll(".btn");
    const s1=document.querySelector("#slide1");
    const s2=document.querySelector("#slide2");
    const si=document.querySelector(".size");
    const ti=document.querySelector(".timer");
    s1.disabled=Boolean(check===true);
    s2.disabled=Boolean(check===true);
      s1.classList.toggle("disabled");
      s2.classList.toggle("disabled");
      s1.classList.toggle("ss1");
      s2.classList.toggle("ss2");
      si.classList.toggle("disabled");
      ti.classList.toggle("disabled");
    for(var x=0; x<button.length;x++)
    {
        button[x].classList.toggle("disabled");
        button[x].classList.toggle("btn1");
        button[x].disabled=Boolean(check===true);
    }
}

Window.onload=display();

algoritm();
function algoritm()
{
    const control=document.querySelector(".controls");
    control.addEventListener('click',(e)=>{
    var select=e.target.classList[1];
    switch(select)
    {
        case "btn-new-array":
            display();
            return;
        case "btn-bubble":
            bubbleSort();
            return;
        case "btn-selection":
            selectionSort();
            return;
        case "btn-insertion":
        
            insertionSort();
         
            return;
        case "btn-merge":
       
            mergeSort();
            return;
        case "btn-merge-rec":
            mergeSortRec(0,size-1);
            return;
        case "btn-quick":
            quickSort(0,size-1);
            return;
        case "btn-counting":
            countingSort();
            return;
        case "btn-heap":
            heapSort();
            return;
        default:
            return;

    }
})
}
function display() {
    arr=[];
    ele=[];
    setArraySizeansTimer();
  const container = document.querySelector(".container");
  var nodeSize=container.childNodes.length;
    for(var x =0;x<nodeSize;x++)
    {
        container.removeChild(container.childNodes[0]);
    }
    newArray();
    for (var i = 0; i < size; i++) {
        ele[i] = document.createElement("div");
        ele[i].classList.add("st");
        ele[i].style.height = arr[i] + "vh";
        ele[i].style.width = width + "px";
        ele[i].style.backgroundColor = firstColor;
        container.append(ele[i]);
    }
}
