// let a = ['현금', '금', '다이아몬드', '주식', '명칭', '명칭'];
// let b = [100000000, 20000000, 70000000, 326000000];

export const AssetAdata = {
  labels: ['현금', '금', '다이아몬드', '주식', '명칭', '명칭'],

  datasets: [
    {
      data: [100000000, 20000000, 70000000, 326000000, 50000000, 53210000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderRadius: 8,
      cutout: '50%',
      radius: '90%',
    },
  ],

  hoverOffset: 5,
};

export const pieOptions = {
  plugins: {
    legend: {
      display: true,
      labels: {
        align: 'top',
        formatter: function (value) {
          return value + '%';
        },
        boxWidth: 50,
        boxHeight: 50,
        font: {
          size: 20,
          weight: 'bold',
          color: 'rgba(68, 68, 68, 100)',
        },
      },
    },
  },
};
// // options: [
// //   {
// //     responsive: false,
// //     legend: { position: 'top' },
// //     title: [{ display: true, text: 'testtesttesttest' }],
// //     animation: [
// //       {
// //         animateScale: true,
// //         animateRotate: true,
// //       },
// //     ],
// //   },
// // ],
