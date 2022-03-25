async function getClients() {
  let url = "customersreq.php";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderClients() {
  let clients = await getClients();

  //CREO UN ELEMENTO TABLA
  var table = document.createElement("TABLE");

  //HEADERS
  const headers = [
    "ID",
    "NOMBRE",
    "DIRECCION 1",
    "DIRECCION 2",
    "TELEFONO 1",
    "TELEFONO 2",
    "E-MAIL",
    "NOTAS",
  ];

  // INSERT HEADERS
  var header = table.createTHead();
  var row = header.insertRow(-1);

  headers.forEach((header) => {
    var headerCell = row.insertCell(-1);
    headerCell.outerHTML = "<th>"  +header +"</th>";
   
  });


  // TABLE BODY
  var mybody = table.createTBody();
  mybody.setAttribute("ID", "myTable");

  //ROWS
  clients.forEach((client) => {
    row = table.insertRow(-1);
    var cell = row.insertCell(-1);
    cell.innerHTML = client.id;
    var cell = row.insertCell(-1);
    cell.innerHTML = client.name;
    var cell = row.insertCell(-1);
    cell.innerHTML = client.dir1;
    var cell = row.insertCell(-1);
    cell.innerHTML = client.dir2;
    var cell = row.insertCell(-1);
    cell.innerHTML = client.tel1;
    var cell = row.insertCell(-1);
    cell.innerHTML = client.tel2;
    var cell = row.insertCell(-1);
    cell.innerHTML = client.email;
    var cell = row.insertCell(-1);
    cell.innerHTML = client.obs;
    var cell = row.insertCell(-1);
    cell.innerHTML = document.createElement;  //  estaba viendo como crear ls botones de modificar y eliminar!!!


  });

  var dvTable = document.getElementById("acaClientes");
  dvTable.innerHTML = "";
  dvTable.appendChild(table);
}

// FUNCTION START
renderClients();
