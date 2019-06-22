

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, 16,17, 18, 19, 20, 21],
        datasets: [{
            label: 'Navy',
            backgroundColor: "#3e95cd",
            data: [19, 17, 26, 7, 16, 21, 19, 11, 15, 16, 16, 16, 21, 20, 16,17, 16, 18, 15, 16, 19]
          }, {
            label: 'Opponent', 
            backgroundColor: "#8e5ea2",
            data:[12, 14, 6, 18, 11, 11, 1, 15, 13, 11, 7, 14, 6, 10, 8, 15, 9, 10 ,6, 13, 9]
          }
           
        ]
    },
    options: {
      title: {
        display: true,
        text: 'Draws per Game',
    
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }}
    }
});


// var chart = new Chart(ctx, {
//   plugins: [ChartDataSource],
//   options: {
//       // ...
//   }
// });

// d3.csv("draw_controls.csv", function(error, data) {
//   if (error) throw error;
// })

// var element = document.createElement('myChart');
// element.id = 'testqq';
// var ctx = document.getElementById('testqq');
// Chart.defaults.global.defaultFontFamily = 'Roboto';
// Chart.defaults.global.defaultFontColor = '#333';

// function makeChart(players) {

// var gameLabels = players.map(function(d) {return d.Game_id});
// var goalsData = players.map(function(d) {return +d.Draws});
//   var chart = new Chart(ctx, {
//     type: 'horizontalBar',
//     data: {
//       labels: gameLables,
//       datasets: [
//         {
//           data: goalsData
//         }
//       ]
//     }
//   })
// }


// var chart = new Chart(ctx, { 
//     type: 'bar',
//     data: {
//         datasets: [{
//             type: 'horizontalBar',
//             yAxisID: 'temperature',
//             backgroundColor: 'transparent',
//             borderColor: 'rgb(255, 99, 132)',
//             pointBackgroundColor: 'rgb(255, 99, 132)',
//             tension: 0,
//             fill: false
//         }, {
//             yAxisID: 'precipitation',
//             backgroundColor: 'rgba(54, 162, 235, 0.5)',
//             borderColor: 'transparent'
//         }]
//     },
//     plugins: [ChartDataSource],
//     options: {
//         scales: {
//             yAxes: [{
//                 id: 'Game_id',
//                 gridLines: {
//                     drawOnChartArea: false
//                 }
//             }, {
//                 id: 'Navy_goals',
//                 position: 'right',
//                 gridLines: {
//                     drawOnChartArea: false
//                 }
//             }]
//         },
//         plugins: {
//             datasource: {
//                 url: 'goals.csv'
//             }
//         }
//     }
// });