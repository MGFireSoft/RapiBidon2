/*fetch("customersreq.php")
  .then((response) => response.json())
  //.then((data) => console.log(data))
  .then((data) => {
    return data;
  });
*/

  async function getClients() {
    let url = 'customersreq.php';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderClients() {
  let users = await getClients();
  let html = '';
  users.forEach(user => {
      let htmlSegment = `<div class="user">
                          <img src="${user.id}" alt="${user.id}" >
                          <h2>${user.name} ${user.dir1}</h2>
                          <div class="email"><a href="email:${user.email}">${user.tel1}</a></div>
                      </div>`;

      html += htmlSegment;
  });

  let container = document.getElementById("acaClientes");
  container.innerHTML = html;
}

renderClients();




/*


function crearTabla(data){


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
  "NOTAS",
];

var row = table.insertRow(-1);
for (var i = 0; i <= +6; i++) {
  var headerCell = row.insertCell(-1);
  headerCell.innerHTML = headers[i];
}

var mybody = table.createTBody();
mybody.setAttribute("ID", "myTable");

//ROWS
for (var i = 0; i < myObj.length; i++) {
  row = table.insertRow(-1);
  //TD
  for (var j = 0; j < 7; j++) {
    var cell = row.insertCell(-1);
    cell.innerHTML = myObj[i][j];
  }
  mybody.appendChild(row);
}

var dvTable = document.getElementById("acaClientes");
dvTable.innerHTML = "";
dvTable.appendChild(table);



}



getData().then(crearTabla)
*/

//.catch((error) => console.log(error));

/*

      //esto es lo q andaba
      var myObj = JSON.parse(data);

      //CREO UN ELEMENTO TABLA
      var table = document.createElement("TABLE");

      //HEADERS
      const headers = [
        "ID",
        "NOMBRE",
        "DIRECCION",
        "TELEFONO",
        "TIPO",
        "VENTAS",
        "TOTAL",
        "ULT. VENTA",
      ];

      var row = table.insertRow(-1);
      for (var i = 0; i <= 7; i++) {
        var headerCell = row.insertCell(-1);
        headerCell.innerHTML = headers[i];
      }

      var mybody = table.createTBody();
      mybody.setAttribute("ID", "myTable");

      //ROWS
      for (var i = 0; i < myObj.length; i++) {
        row = table.insertRow(-1);
        //TD
        for (var j = 0; j < 8; j++) {
          var cell = row.insertCell(-1);
          cell.innerHTML = myObj[i][j];
        }
        mybody.appendChild(row);
      }

      var dvTable = document.getElementById("acaClientes");
      dvTable.innerHTML = "";
      dvTable.appendChild(table);
    });
})();
*/

/*

    var myObj = JSON.parse(this.responseText);

    var table = document.createElement("TABLE"); //CREO UN ELEMENTO TABLA
    table.setAttribute("class", "table table-sm", "table-hover");
    table.setAttribute("text-align", "align-middle");
    table.setAttribute("background-color", "red");
    const headers = [
      "ID",
      "NOMBRE",
      "DIRECCION",
      "TELEFONO",
      "TIPO",
      "VENTAS",
      "TOTAL",
      "ULT. VENTA",
    ]; //HEADERS
    var row = table.insertRow(-1);
    for (var i = 0; i <= 7; i++) {
      var headerCell = row.insertCell(-1);
      headerCell.innerHTML = headers[i];
      row.setAttribute("style", "FONT-WEIGHT : BOLD");
    }

    var mybody = table.createTBody();
    mybody.setAttribute("ID", "myTable");

    for (var i = 0; i < myObj.length; i++) {
      //ROWS
      row = table.insertRow(-1);

      for (var j = 0; j < 8; j++) {
        //TD
        if (myObj[i][4] == "") {
          // Comprobar el campo " no definido"
          myObj[i][4] = "No definido";
        }
        if (myObj[i][8] == "") {
          myObj[i][8] = "NADA POR AQUI";
        }
        var cell = row.insertCell(-1);
        cell.innerHTML = myObj[i][j];
      }
      row.setAttribute("onclick", "mostrarclienteprofile(" + myObj[i][0] + ")");
      row.setAttribute("data-toggle", "tooltip");
      row.setAttribute("title", "NOTAS: \n" + myObj[i][8]);
      row.setAttribute("class", "pointer");
      mybody.appendChild(row);
    }

    var dvTable = document.getElementById("acaClientes");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}
*/
