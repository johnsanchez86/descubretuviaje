<?php
header('Access-Control-Allow-Oringin:*');
header("Access-Control-allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");

$editar = "UPDATE usuario SET nombre='$params->nombre',clave=sha1('$params->clave'),correo='$params->correo',celular='$params->celular' WHERE id_usuario";
mysqli_query($conexion, $editar) or die ('no edito');

Class Result {}

$response = new Result ();
$response -> resultado = 'OK';
$response -> mensaje = 'datos modificados';

header('Content - Type: application/json');
echo json_encode($response);

?>