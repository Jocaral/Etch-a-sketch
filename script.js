/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

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
    const square = document.createElement('div');
    square.classList.add('columnitem');
    row.appendChild(square);

    square.addEventListener('mouseover', () => {
        square.classList.add('on');
        // square.style.background = 'blue';
      });

    

}};




console.log (getCanva);
