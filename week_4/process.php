<?php
$data = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
$message = "";

foreach($data as $name => $value )
{
	if(is_array($value))
	{
		$message .= "$name: ".implode(", ", $value);
	}
	else
	{
		$message .= "$name: $value\r\n";
	}
}

mail("bwallen.aii@gmail.com", "Lottery Entry", $message);

?>
<html>
<head>
	<title>Thank you!</title>
	<link rel="stylesheet" href="css/screen.css" />
	
</head>
<body>
	<h1>Thank You!!</h1>
	<p>We appreciate your entry. We will contact you if you win. We will not post the winner to 
	protect them. And us. Mostly us. So, we probably won't be contacting you. Thanks!</p>
</body>
</html>