<?php
if(isset($_POST['submit'])){
$firstName = "First Name:".$_POST['firstName']."
";
$file=fopen("email-list.txt", "a");
fwrite($file, $firstName);
fclose($file);
}
?>