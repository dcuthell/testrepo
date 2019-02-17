<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST['email'])) die();

if ($_POST)
{

	// set response code - 200 OK

	http_response_code(200);
	$subject .= "Request from ";
	$subject .= $_POST['name'];

	$to = "music4spies@icloud.com";
	$from = "reservations@hairlairpdx.com";
	$olddate = strtotime($_POST['date']);
	$newdate = date("D", $olddate) . " " . date("M", $olddate) . " " . date("d", $olddate);
	// data

	$msg = "You have a received a request from " . $_POST['name'] . ":<br/><br/>
	They would like to get a " . $_POST['service'] . " on " . $newdate . " at " . $_POST['time']  . ".<br/><br/>
	You can call them back at <a href=\"tel:+1" . $_POST['phone'] . "\">" . $_POST['phone'] . "</a>,
	or reply to <a href=\"mailto:" . $_POST['email'] . "\">" . $_POST['email'] . "</a>.<br/>";

	if ($_POST['notes']) {
		$msg .= "<br/>They also left this note for you:<br/><br/> \"";
		$msg .= $_POST['notes'] . "\"";
	}


	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echo json_encode(array(
		"sent" => true
	));
} else {

	// tell the user about error

	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}
?>
