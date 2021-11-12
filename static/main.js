const ctx = document.getElementById('myChart').getContext('2d');

var graphData = {
    type: 'line',
    data: {
        labels: ['0', '1', '2', '3', '4', '5'],
        datasets: [{
            label: 'Dummy Data',
            data: [12, 19, 3, 5, 2, 3],
            fill: true,
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 1,
            borderColor: 'rgb(75, 192, 192)'
        }]
    },
    options: {}
}

const myChart = new Chart(ctx, graphData);

var socket = new WebSocket('ws://localhost:8000/ws/asset');

socket.onmessage = function (e) {
    var djangoData = JSON.parse(e.data);
    console.log(djangoData);
    document.querySelector('#app').innerText = djangoData.value;
    var newGraphData = graphData.data.datasets[0].data;
    newGraphData.shift();
    newGraphData.push(djangoData.value);
    graphData.data.datasets[0].data = newGraphData;
    myChart.update();
}