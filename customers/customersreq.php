<?php
// CREATE CONNECTION
$conexion = mysqli_connect("localhost", "root", "", "rapibidon") or
    die("Problemas con la conexión");

// ETCH DATA
$registros = mysqli_query($conexion, "SELECT id, name, dir1, dir2, tel1, tel2, comments
FROM customers
") or die("Problemas en el select:" . mysqli_error($conexion));


/*
$clientsarray = array();
while($row =mysqli_fetch_row($registros))
{
    $clientsarray[] = $row;
}
*/

/*
// Con json_encode lo paso a json
$myJSON = json_encode($clienesarray);
echo $myJSON;
*/



// STORE DATA IN clientsarray VARIABLE
$result = mysqli_fetch_all($registros, MYSQLI_ASSOC);
//$result = mysqli_fetch_all($registros, MYSQLI_NUM);
echo (json_encode($result));



// Lo escribo en un json para debug
$fp = fopen('clientesdata1.json', 'w');
fwrite($fp, json_encode($result));
fclose($fp);
exit;
