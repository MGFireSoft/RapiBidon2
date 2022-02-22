<?php
$conexion = mysqli_connect("localhost", "root", "", "rapibidon") or
    die("Problemas con la conexión");
$registros = mysqli_query($conexion, "SELECT id, name, dir1, dir2, tel1, tel2, comments
FROM customers
") or die("Problemas en el select:" . mysqli_error($conexion));

$clientesarray = array();
while($row =mysqli_fetch_row($registros))
{
    $clientesarray[] = $row;
}

// Con json_encode lo paso a json
$myJSON = json_encode($clientesarray);
echo $myJSON;

    // Lo escribo en un json para debug
    $fp = fopen('clientesdata1.json', 'w');
    fwrite($fp, json_encode($clientesarray));
    fclose($fp);
?>