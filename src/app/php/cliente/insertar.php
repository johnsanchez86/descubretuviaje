<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-Whith, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");

//$ins = "insert into cliente(identificacion, nombre, direccion, celular, correo, fo_ciudad) values('prueba', 'prueba', 'prueba', 'prueba', 'prueba')";
$ins = "insert into cliente(identificacion, nombre, direccion, celular, correo, fo_ciudad) values ('$params->identificacion','$params->nombre', '$params->direccion', '$params ->celular','$correo','$paramas->fo_ciudad')";

mysqli_query($conexion, $ins) or die('no inserto');


class Result {}

$response = new Result();
$response->result = 'ok';
$response-> mensaje = 'datos grabados';

header('Content-Type: application/json');
echo json_encode($response);

?>