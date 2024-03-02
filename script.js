//creating a square and append in the container
const container = document.querySelector('.container');

var getCanva=prompt("Set canva'\s dimension. Min:16 - Max: 100");

let finalCanva;
if (getCanva>100){
    finalCanva=100;
} else if(getCanva<16){
    finalCanva=16;
}
else {
    finalCanva=getCanva;
};

for (let i=1;i<=finalCanva;i++){
    const row = document.createElement('div');
    row.classList.add('rowitem');
    container.appendChild(row);

    for (let f=1;f<=finalCanva;f++){
    const column = document.createElement('div');
    column.classList.add('columnitem');
    row.appendChild(column);

}}

console.log (getCanva);
