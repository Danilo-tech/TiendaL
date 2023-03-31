<?php

/* header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require ("../conexion.php");

$ins = "DELETE from usuarios WHERE id_usuario=" .$_GET['id'];
mysqli_query($conexion,$del) or die ('no eliminó');

class Result{}

  $response = new Result();
  $response -> resultado = 'OK';
  $response -> mensaje = 'usuario borrado';

header('Content-Type: application/json');
echo json_encode($response); */


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require ("../conexion.php");

$del = "DELETE from usuarios WHERE id_usuario=" .$_GET['id'];
$resultado = mysqli_query($conexion, $del);

if ($resultado) {
  class Result {}
  $response = new Result();
  $response -> resultado = 'OK';
  $response -> mensaje = 'Usuario borrado';

  header('Content-Type: application/json');
  echo json_encode($response);
} else {
  http_response_code(500);
  echo json_encode([
    'error' => 'No se pudo eliminar el usuario'
  ]);
}

mysqli_close($conexion);


?>
