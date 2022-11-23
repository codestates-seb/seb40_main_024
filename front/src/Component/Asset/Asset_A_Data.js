let a = ['현금', '금', '다이아몬드', '주식'];
let b = [100000000, 20000000, 70000000, 326000000];

export const AssetAdata = {
  labels: a,
  datasets: [
    {
      label: 'Test',
      data: b,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
    },
  ],
};
