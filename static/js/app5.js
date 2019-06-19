
var ctx2 = document.getElementById('myChart3');
var mixedChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Navy Clear Attempts',
            data: [19,19,13,21,18,24,21,23,23,22,17,20,17,16,9,21,19,21,18,14],
            backgroundColor: "rgba(193,46,12,0.2)",
            borderColor: "rgba(193,46,12,1)"
       
        }, {
            label: 'Navy Goals',
            backgroundColor: "rgba(0,0,0,0.2)",
            backgroundColorHover: "#3e95cd",
            borderColor: "#8e5ea2",
            data: [20,21,20,5,13,18,17,18,14,16,16,22,21,23,6,9,12,14,14,12,12],
            // Changes this dataset to become a line
            type: 'line'
        }],
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, 16,17, 18, 19, 20, 21]
     
    },
    options: {
        title: {
          display: true,
          text: 'Navy Clear Attempts vs. Goals Per Game'
        }
      }
});