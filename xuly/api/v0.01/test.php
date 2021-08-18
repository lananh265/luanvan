<?php

$muoi = "muoitieu";
$matkhau = "' or 1 = 1--'";
$gopchuoi = $matkhau.$muoi;




echo ($gopchuoi);
$bam = md5($matkhau.$muoi);
echo ("<br>");

echo ($bam);

?>