<?php
	include("conf.php");
	$acs=array("asd43", "#5gre2", "#h76tr", "#ju67s");
	if(isset($_REQUEST["accessCode"])) {
		if(in_array($_REQUEST["accessCode"], $acs)) {
			$conn=new mysqli($server, $username, $password, $db);
			$data = array();
			if(!$conn->connect_errno) {
				if($query=$conn->prepare("SELECT `Key`, `Value`, `Extra` FROM $table")) {
					$query->execute();
					$query->bind_result($Key, $Value, $Extra);
					print "Success\n";
					while($query->fetch()) {
						$uid=$Key;
						$time=$Value;
						$extra=$Extra;
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