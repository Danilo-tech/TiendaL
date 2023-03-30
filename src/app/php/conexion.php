<?php
$servidor = "localhost:3307";
$usuario = "root";
$clave ="";
$bd = "almacen";

$conexion = mysqli_connect($servidor,$usuario,$clave) or die ("no se conecto a mysql");
mysqli_select_db($conexion,$bd) or die("no encontró la base de datos");


?>
