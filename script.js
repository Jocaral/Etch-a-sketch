/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var k;
      for (k = 0; k < dropdowns.length; k++) {
        var openDropdown = dropdowns[k];
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

// setting radom colors for the pen
    const randomColors = document.querySelector('.randomcolors');
    randomColors.addEventListener('click', () => {

    square.addEventListener('mouseover', () => {
        let randomColor='#'+ Math.floor(Math.random()*16777215).toString(16);
        square.style.background = randomColor;
        square.style.opacity = 1;
    });
      });

      // setting one color for the pen
    const oneColor = document.querySelector('.onecolor');
    oneColor.addEventListener('click', () => {

    square.addEventListener('mouseover', () => {
      square.style.background = 'black';
      square.style.opacity = 1;
      });
    })

// setting progressive darkening for the pen
const proDark = document.querySelector('.prodark');
proDark.addEventListener('click', () => {

      let opa=0;
      function addOpacity(){
        return opa+=0.2;
      };

    square.addEventListener('mouseover', () => {
      square.style.background = 'black';
      square.style.opacity = addOpacity();
      
      });
    })

}};

