<?php
$dt = time();
$date = date("d/m/Y H:i:s", $dt);
$email = $_POST["email"];
$question = $_POST["question"];
file_put_contents("./questionssae.txt", "\n$date\n|\n$email\n|\n$question\n..................................................", FILE_APPEND);
header('location: ./index.html');
exit();

?>