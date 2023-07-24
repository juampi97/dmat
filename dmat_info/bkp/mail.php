<?php
if(empty($_REQUEST['Nombre']) ||
        empty($_REQUEST['Empresa']) ||
        empty($_REQUEST['Telefono']) ) {
        die("Por favor complete Nombre, Empresa y Telefono.");
}
$destino = $_REQUEST['recipient'];
$subject = $_REQUEST['subject'];
$redirect = $_REQUEST['redirect'];
$header = "From: damat@dmat.com.ar\r\n";
$mensaje = "\n\rNombre: ".$_REQUEST['Nombre'];
$mensaje .= "\n\rEmpresa: ".$_REQUEST['Empresa'];
$mensaje .= "\n\rDireccion: ".$_REQUEST['Direccion'];
$mensaje .= "\n\rLocalidad: ".$_REQUEST['Localidad'];
$mensaje .= "\n\rProvincia: ".$_REQUEST['Provincia'];
$mensaje .= "\n\rCodigo: ".$_REQUEST['Codigo'];
$mensaje .= "\n\rTelefono: ".$_REQUEST['Telefono'];
$mensaje .= "\n\rTelefono: ".$_REQUEST['Telefono2'];
$mensaje .= "\n\rEmail: ".$_REQUEST['Email'];
$mensaje .= "\n\rProductos de interes: ".$_REQUEST['Productos_Interes'];
$mensaje .= "\n\rVendedor: ".$_REQUEST['Vendedor_Si'];
$mensaje .= "\n\rLista de precios: ".$_REQUEST['Lista_Precios_Si'];
$mensaje .= "\n\rConsulta: ".$_REQUEST['Consulta'];
if(!mail(trim($destino[0]), $subject, $mensaje, $header))
        die("Error al enviar el formulario, intentelo nuevamente.");
if(!mail(trim($destino[1]), $subject, $mensaje, $header))
        die("Error al enviar el formulario, intentelo nuevamente.");
header ('Location: ' . $redirect);
?>