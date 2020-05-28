<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//this is a php comment IN tags (will not appear)
 //notice we must echo tags in php.
$year=2008;
$remaining=365-date("z");
if (date('L',mktime(0,0,0,1,1,$year))==1) {
    $remaining=366-date("z");
    echo "There are " . $remaining . " days left in the year";
  }else  {echo "There are " . $remaining . " days left in the year";
  }
?>

</body>
</html>