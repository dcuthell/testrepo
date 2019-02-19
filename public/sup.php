<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if ($_POST)
{

	// set response code - 200 OK

	http_response_code(200);

	// echo json_encode( $_POST );
	$code = $_POST[access_code];
	$command = escapeshellcmd('python test.py ' . $code);
	$output = shell_exec($command);
	echo json_encode($output);
} else {

	// tell the user about error
	echo json_encode('Need Access Code');
}
?>
