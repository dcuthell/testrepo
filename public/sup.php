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

	$name = $_POST['name'];
	$xml = file_get_contents('http://www.example.com/file.xml');
	echo json_encode(["sent" => true, "message" => $xml]);
} else {

	// tell the user about error
	$command = escapeshellcmd('python test.py');
	$output = shell_exec($command);
	echo json_encode($output);
}
?>
