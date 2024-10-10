const ctx = document.getElementById('weatherChart').getContext('2d');

// Hent data fra JSON
fetch('været.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(weatherData => {
        const labels = weatherData.data.map(d => d.måned);
        const initialData = weatherData.data.map(d => d.nedbør_mm);

        // Konfigurasjon for Chart.js
        const weatherChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Nedbør (mm)',
                    data: initialData,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Bytt data når knappen klikkes
        document.getElementById('toggleButton').addEventListener('click', () => {
            if (weatherChart.data.datasets[0].label === 'Nedbør (mm)') {
                // Bytt til temperatur
                weatherChart.data.datasets[0].label = 'Temperatur (°C)';
                weatherChart.data.datasets[0].data = weatherData.data.map(d => d.gjennomsnittlig_temperatur_celsius);
                document.getElementById('toggleButton').innerText = 'Vis Nedbør';
            } else {
                // Bytt tilbake til nedbør
                weatherChart.data.datasets[0].label = 'Nedbør (mm)';
                weatherChart.data.datasets[0].data = initialData;
                document.getElementById('toggleButton').innerText = 'Vis Temperatur';
            }
            weatherChart.update(); // Oppdater diagrammet
        });
    })
    .catch(error => console.error('Error fetching data:', error));
