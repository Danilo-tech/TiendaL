<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode($json);
$id = $_GET['id'];

require ("../conexion.php");

$stmt = $conexion->prepare("UPDATE usuarios SET nombre=?, usuario=?, clave=?, tipo=? WHERE id_usuario=?");
$stmt->bind_param("ssssi", $params->nombre, $params->usuario, sha1($params->clave), $params->tipo, $id);

if ($stmt->execute()) {
    // Si la actualización fue exitosa
    class Result{}
    $response = new Result();
    $response->resultado = 'OK';
    $response->mensaje = 'datos grabados';
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    // Si hubo un error en la actualización
    http_response_code(500);
    class Result{}
    $response = new Result();
    $response->resultado = 'ERROR';
    $response->mensaje = 'no editó';
    header('Content-Type: application/json');
    echo json_encode($response);
}

mysqli_close($conexion);


/*
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json =file_get_contents('php://input');

$params = json_decode($json);
$id = $_GET['id'];


require ("../conexion.php");

$editar = "UPDATE usuarios SET nombre= '$params -> nombre', usuario= '$params -> usuario', clave=sha1 ('$params -> clave'), tipo = '$params ->tipo' WHERE id_usuario = $id ";

mysqli_query($conexion, $editar) or die ('no edito');

class Result{}

  $response = new Result();
  $response -> resultado = 'OK';
  $response -> mensaje = 'datos modificados';

header('Content-Type: application/json');
echo json_encode($response); */







?>



