var ctx = document.getElementById('myChart').getContext('2d');
var datas = [10,5,30,-20,40,30,10];


var updatebutton= document.getElementById('update');

function updated(){
  var max =60;
  var min =-60;
    var random =Math.floor(Math.random() * (+max - +min)) + +min; 
  for (i =0; i< datas.length; i++)
  {
    random =Math.floor(Math.random() * (+max - +min)) + +min; 
    datas[i] = random;
  }
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
               // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(0, 255, 0)',
                data: datas,
            },{
                label:'USL',
                borderColor: 'rgb(255, 99, 132)',
                data:[10,10,10,10,10,10,10],
            },
            {
                label:'LSL',
                borderColor: 'rgb(255, 99, 132)',
                data:[-10,-10,-10,-10,-10,-10,-10],
            }
        ]
        },
    
        // Configuration options go here
        options: {
            layout:{
                padding:{
                    left:50,
                    right:50,
                    top:50,
                    bottom:50,
                }
            }
        }
    });
}
//updated()
var fromdate = document.getElementById("from");
var todate = document.getElementById("to");
fromdate.valueAsDate = new Date();
todate.valueAsDate = new Date();




function changetomin(){
   let tomin = fromdate.valueAsDate;
    todate.minAsDate = tomin;
}

updatebutton.addEventListener("click",updated)
fromdate.addEventListener("change", changetomin)