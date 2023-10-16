<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-Whith, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");

//$ins = "insert into usuario(nombre, clave, correo, celular, tipo_usuario) values('prueba', 'prueba', 'prueba', 'prueba', 'prueba')";
$ins = "insert into usuario(nombre, clave, correo, celular, tipo_usuario) values ('$params->usuario',sha1('$params->clave'),'$params->correo', '$params->celular', '$paramas->tipo_usuario')";

mysqli_query($conexion, $ins) or die('no inserto');


class Result {}

$response = new Result();
$response->result = 'ok';
$response-> mensaje = 'datos grabados';

header('Content-Type: application/json');
echo json_encode($response);

?>