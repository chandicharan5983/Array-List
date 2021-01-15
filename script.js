let leftList = [];
let rightList = [];

let sel = document.querySelector(".slc");

function populateArray(){
    for(i=0;i<10;i++){
        leftList.push({ id: `left${i}`, name: generateString()});
        rightList.push({ id: `right${i}`, name: generateString()})
    }
   render(leftList,rightList)
}
let left = ''
let right=''
function render(leftx,rightx){
    left='';
    right='';
     leftx.forEach(element => {
         left += `<li>${element.name}<button 
         onclick="move('${element.id}','left')">Move</button><button 
         onclick="deleteEl('${element.id}','left')">Delete</button></li>` 
     });
    rightx.forEach(elementx => {
        right += `<li>${elementx.name}<button 
        onclick="move('${elementx.id}','right')">Move</button><button 
        onclick="deleteEl('${elementx.id}','right')">Delete</button></li>`
    });
 document.getElementById('left').innerHTML=left;
document.getElementById('right').innerHTML = right;

}

function move(id,direction){
    console.log(direction,id)
    if(direction === 'left'){
        let index = leftList.findIndex(item => item.id === id);
        if(index !== -1){
            let tempEl = leftList[index];
            leftList.splice(index,1);
            rightList.splice(index,0,tempEl);

        }
    }
        if (direction === 'right') {word => word.length > 6
            let indexx = rightList.findIndex(item => item.id === id);
            if (indexx !== -1) {
                let tempElm = rightList[indexx];
                rightList.splice(indexx, 1);
                leftList.splice(indexx, 0, tempElm);

            }
        }
      
    
    render(leftList, rightList)
   
}

function deleteEl(id,direction) {
    if(direction === 'left'){
        leftList = leftList.filter(word => word.id !== id)
    }

    if (direction === 'right') {
        rightList = rightList.filter(word => word.id !== id)
    }

    render(leftList, rightList)
}

function generateString(){
    return Math.random().toString(36).substring(7);
}

populateArray()


function dropDown()
{
    let selec = document.querySelector('#select');
    if (selec.value == "left"){
        for (i = 0; i < 5; i++) {
            leftList.push({ id: `left${i}`, name: generateString() });
        }
    }
    else{
        for (i = 0; i < 5; i++) {
            rightList.push({ id: `right${i}`, name: generateString() });
        }
    }
    console.log(selec.value);
    render(leftList, rightList);
}