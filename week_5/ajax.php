<?php

//make sure we have q
if(empty($_GET['q']))
{
	die("I don't know.");
}

switch($_GET['q'])
{
	case "pizza":
		echo "<p>An ant.</p>";
	break;
	case "sugar":
		echo "<p>13</p>";
	break;
	case "sky":
		echo "<p>Because if it were green, we wouldn't know when to stop mowing.</p>";
	break;
	case "woodchuck":
		echo "<p>A woodchuck could chuck as much wood as a woodchuck could chuck if a woodchuck could chuck wood.</p>";
	break;
	case "why":
		echo "<p>Why not?</p>";	
	break;
	default:
		echo "I don't know.";
	break;
}
