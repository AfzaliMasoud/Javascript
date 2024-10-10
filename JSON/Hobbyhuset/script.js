fetch("users.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const table = document.getElementById("table").getElementsByTagName("tbody")[0];

        data.forEach(user => {

            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);

            cell1.textContent = user["KNr"];
            cell2.textContent = user["Fornavn"];
            cell3.textContent = user["Etternavn"];
            cell4.textContent = user["Adresse"];
            cell5.textContent = user["PostNr"];


        });
    })
    .catch(error => console.error("Error:", error));
