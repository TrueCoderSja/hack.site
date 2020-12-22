<?php
	include("conf.php");
	if(isset($_GET["uid"]) && isset($_GET["operand"])) {
		$uid=$_GET["uid"];
		$operand=$_GET["operand"];
		$conn=new mysqli($server, $username, $password, $db);
		if(!$conn->connect_errno) {
			if($query=$conn->prepare("UPDATE $table SET operand=? WHERE `Key`=?")) {
				$query->bind_param("ss", $operand, $uid);
				$query->execute();
			}
		}
	}
	else
		print "Insufficient parameters";
?>