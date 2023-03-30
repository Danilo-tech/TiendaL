<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json =file_get_contents('php://input');

$params = json_decode($json);


require ("../conexion.php");

$ins = "insert into usuarios(nombre,usuario,clave,tipo) values('$params ->nombre','$params->usuario',sha1('$params->clave'),'$params->tipo')";

mysqli_query($conexion,$ins) or die ('no insertó');

class Result{}

  $response = new Result();
  $response -> resultado = 'OK';
  $response -> mensaje = 'datos grabados';

header('Content-Type: application/json');
echo json_decode($response);

?>
