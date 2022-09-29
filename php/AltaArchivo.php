<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

$params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE

require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

$conexion = conexion(); // CREA LA CONEXION

// REALIZA LA QUERY A LA DB

mysqli_query($conexion, "INSERT INTO usuarios_archivos(USUARIO_ID,Nombre_Archivo,Tipo_Archivo) VALUES
				('$params->usuario_id','$params->nombreArchivo','$params->typeArchivo')") or die("Problemas al insertar".mysqli_error($conexion)) ;    

class Result {}

// GENERA LOS DATOS DE RESPUESTA
$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'SE REGISTRO EXITOSAMENTE EL USUARIO' . $params->name;

header('Content-Type: application/json');

echo json_encode($response); // MUESTRA EL JSON GENERADO

?>