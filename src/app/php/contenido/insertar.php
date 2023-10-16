<?php
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow_headers: Origin,X-Resquested-With, Content-Type,Accept");

//$json = file_get_contents('php://input');

//$params = json_decode($json);

require("../conexion.php");

$ins = "insert into contenidos(contenidos,titulo,autor,fo_administrador)values('prueba', 'prueba', sha1('123456'), 'Invitado')";
//$ins = "insert into contenidos(contenidos,titulo,autor,fo_administrador) values('$params->contenidos','$params->titulo','$params->titulo','$params->autor','$fo_administrador')";

mysqli_query($conexion, $ins) or die ('no inserto');


class Result {}

$response = new Result ();
$response->resultado = 'OK';
$response->mensaje = 'datos grabados';

header('Content-Type: application/json');
echo json_encode($response);
?>