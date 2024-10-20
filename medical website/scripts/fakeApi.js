const fakeApiData = () => {
    return {
        dates: [
            "2023-01", "2023-02", "2023-03", "2023-04", "2023-05",
            "2023-06", "2023-07", "2023-08", "2023-09", "2023-10",
            "2023-11", "2023-12"
        ],
        diabetesPatients: [
            120, 135, 140, 150, 160,
            170, 180, 190, 200, 210,
            220, 230
        ],
        hypertensionPatients: [
            100, 115, 125, 130, 145,
            155, 165, 175, 185, 190,
            200, 210
        ]
    };
};
const data = fakeApiData();
const ctx = document.getElementById('pie').getContext('2d');
const bar=document.getElementById('bar').getContext("2d");
const visualize=(ctx,graph)=>{
        const myChart = new Chart(ctx, {
            type: `${graph}`,
            data: {
                labels: data.dates,
                datasets: [
                    {
                        label: 'Diabetes Patients',
                        data: data.diabetesPatients,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        backgroundColor:"#FF6F61",
                        borderWidth: 2,
                        fill: false,
                        width:"20px"
                    },
                    {
                        label: 'Hypertension Patients',
                        data: data.hypertensionPatients,
                        borderColor: 'rgba(54, 162, 235, 1)',
                        backgroundColor:"hsl(212, 72%, 59%)",
                        borderWidth: 2,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Patients'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    }
                }
            }
        });
        
}
        
visualize(ctx,"pie");
visualize(bar,"bar");
visualize(line,"line")