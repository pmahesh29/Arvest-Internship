function generateTable() {


  const table = document.getElementById("myTable");
  // add table headers to table
  let tableHeaders = ["Loan Number", "Customer Name", "Loan Amount", "Product Type", "Loan Type", "Collateral Code", "Loan Category", "Date Booked", "Working Date", "Status"];
  let html = `<thead><tr>`;
  tableHeaders.forEach(head => {
    html += `<th>${head}</th>`
  });
  html += '</tr></thead>'

  // Load JSON data from file
  fetch('data2.json')
    .then(response => response.json())
    .then((data) => {
      // Access and use the JSON data
      console.log(data); // Log the JSON data

      for (const [key, value] of Object.entries(data)) {
        html += `
          <tr id="row${key}">
            <td>${data[key].loan_number}</td>
            <td>${data[key].name}</td>
            <td>$${data[key].amount}</td>
            <td>${data[key].product_type}</td>
            <td>${data[key].type}</td>
            <td>${data[key].code}</td>
            <td>${data[key].category}</td>
            <td>${data[key].booked_date}</td>
            <td>${(data[key].working_date) ? data[key].working_date : ''}</td>
            <td>${data[key].status}</td>
          </tr>
        `
        table.innerHTML = html;
        // for (let i = 0; i < rows; i++) {
        //   let row = table.insertRow(i);
        //   for (let j = 0; j < cols; j++) {
        //     let cell = row.insertCell(j);
        //     cell.textContent = data[i][j];
        //   }
        // }
      }
    })
    .catch(error => {
      console.error('Error loading JSON file:', error);
    });
}

window.addEventListener('DOMContentLoaded', generateTable);