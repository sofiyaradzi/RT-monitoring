var random_datas = document.getElementsByClassName('random-data')


//convert html collection to array
const random_data = []

// for (let i = 0; i < dates.length; i++) {  //iterate over the html collection (hidden input) retrieved from the html
//             date[i] = dates[i].innerHTML //get the value(date) of each of the html collection (hidden input)
//             console.log(date[i])
//       }

for (let j = 0; j < random_datas.length; j++) {  //iterate over the html collection (hidden input) retrieved from the html
    random_data[j] = random_datas[j].innerHTML //get the value(prices) of each of the html collection (hidden input)
    console.log(random_data[j])
}

// Chart js code
var context = document.getElementById('chart').getContext('2d');
new Chart(context, {
    type: 'line',
    data: {
        labels: '0123456789', //make the values of the date array the labels for the bar chart
        datasets: [{
            label: 'Random Values',
            data: random_data,  //make the values of the price array the data for the bar chart
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        // responsive: true,
        // plugins: {
        //     title: {
        //         display: true,
        //         text: 'sss'
        //     },
        // },
        // scales: {
        //     x: {
        //         display: true,
        //         title: {
        //             display: true,
        //             text: 'xxx'
        //         }
        //     },
        //     y: {
        //         display: true,
        //         title: {
        //             display: true,
        //             text: 'Number'
        //         }
        //     }
        // }
    }
});