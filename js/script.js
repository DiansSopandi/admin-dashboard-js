// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

const openSideBar = () => {
    if(!sidebarOpen) {
        sidebar.classList.add('sidebar-responsive');
        sidebarOpen = true;
    }
}

const closeSideBar = () => {
    if(sidebarOpen) {
        sidebar.classList.remove('sidebar-responsive');
        sidebarOpen = false;
    }
}

// CHART
var options = {
    series: [{
    data: [300, 400, 500, 600, 700, ]
  }],
    chart: {
    type: 'bar',
    height: 300,
    width: 400,
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      horizontal: false,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Laptop', 'Hanphone', 'Monitor', 'Camera','Tablet'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
  chart.render();


var options = {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Product Trends by Month',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#area-chart"), options);
  chart.render();
