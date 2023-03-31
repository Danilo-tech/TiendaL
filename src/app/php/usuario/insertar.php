<?php

/* header('Access-Control-Allow-Origin: *');
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
echo json_encode($response);
 */

 header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

if (!isset($params->nombre) || !isset($params->usuario) || !isset($params->clave) || !isset($params->tipo)) {
  http_response_code(400);
  echo json_encode([
    'error' => 'Parámetros inválidos'
  ]);
  exit();
}

require("../conexion.php");

$nombre = mysqli_real_escape_string($conexion, $params->nombre);
$usuario = mysqli_real_escape_string($conexion, $params->usuario);
$clave = mysqli_real_escape_string($conexion, $params->clave);
$tipo = mysqli_real_escape_string($conexion, $params->tipo);

$ins = "INSERT INTO usuarios(nombre,usuario,clave,tipo) VALUES('$nombre', '$usuario', sha1('$clave'), '$tipo')";

$resultado = mysqli_query($conexion, $ins);

if ($resultado) {
  class Result {}
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'Datos grabados';

  header('Content-Type: application/json');
  echo json_encode($response);
} else {
  http_response_code(500);
  echo json_encode([
    'error' => 'No se insertó el registro'
  ]);
}

mysqli_close($conexion);

?>
