<?php 
if( isset( $_POST['email'] ) )
{
	$email = $_POST["email"];
	$myfile = fopen("email-list.txt", "a") or die("Unable to open file!");
    $txt = "$email\n";
 	fwrite($myfile, $txt);
    fclose($myfile);
    echo "<script>
             alert('email sent succesfully'); 
             window.history.go(-1);
     </script>";
}
?>