<?php
    $url= $_POST['geturl'];
    $homepage = file_get_contents($url);
    echo $homepage;
?>