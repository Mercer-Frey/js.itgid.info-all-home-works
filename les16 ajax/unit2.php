<?php
    $a = $_POST['a'];
    $b = $_POST['b'];
    if ($a > $b) {
        echo 1;
    }
    else if ($a < $b) {
        echo 2;
    }
    else if ($a ==$b) {
        echo 'equal';
    }
    else {
        echo 'error';
    }
?>