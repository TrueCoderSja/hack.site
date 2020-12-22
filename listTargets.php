<?php
	include("conf.php");
	$acs=array("#asd43", "#5gre2", "#h76tr", "#ju67s");
	if(isset($_POST["accessCode"])) {
		if(in_array($_POST["accessCode"], $acs)) {
			$conn=new mysqli($server, $username, $password, $db);
			$data = array();
			if(!$conn->connect_errno) {
				if($query=$conn->prepare("SELECT `Key`, `Value`, `Extra` FROM $table")) {
					$query->execute();
					$raw=$query->get_result();
					print "Success\n";
					while($req_val=$raw->fetch_assoc()) {
						$uid=$req_val["Key"];
						$time=$req_val["Value"];
						$extra=$req_val["Extra"];
						$data[]=array($uid, $time, $extra);
					}
					print(json_encode($data));
				}
				else
					print "ServerError";
			}
			else
				print "ServerError";
		}
		else
			print("KeyError");
	}
	else
		print "NoKey";
?>