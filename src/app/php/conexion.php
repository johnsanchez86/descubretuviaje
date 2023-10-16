<?php
$servidor="localhost";
$usuario= "root";
$clave="";
$bd = "descubre";

$conexion =mysqli_connect($servidor,$usuario,$clave) or die ("no se conecto a mysql");
mysqli_select_db($conexion,$bd) or die("no encontro la base de datos");


?>