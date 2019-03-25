<?php
    $t1= $_POST['t1'];
    $text=$t1;
    $abc="\xC0-\xFF";
    $words = preg_split("/[^\w$abc]+/", $text);
    foreach ($words as $w) $stat[$w]++;
    arsort($stat);
    echo json_encode($stat);
    
?>