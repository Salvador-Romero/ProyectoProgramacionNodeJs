<?php



function conexion() {
	$conexion = mysqli_connect("localhost", "root", "", "restaurante") or die ("No se ha podido conectar al servidor de Base de datos");
	
	return $conexion;
  }
?>