<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-Whith, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");

//$ins = "insert into usuario(nombre, correo, clave, celular, usuario) values('prueba', 'prueba', 'prueba', 'prueba', 'prueba')";
$ins = "insert into usuario(nombre, correo, clave, celular, usuario) values ('$params->nombre','$params->correo',sha1('$params->clave'), '$params->celular', '$params->usuario')";

mysqli_query($conexion, $ins) or die('no inserto');


class Result {}

$response = new Result();
$response->result = 'ok';
$response-> mensaje = 'datos grabados';

header('Content-Type: application/json');
echo json_encode($response);

?>