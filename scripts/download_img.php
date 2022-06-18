<?php
$downloadURL = $_GET['url'];
$img_name = $_GET['name'];
$extension = "jpg";
$fileName = $img_name.'.'.$extension;

if (!empty($downloadURL) && substr($downloadURL, 0, 8) === 'https://') {
    header("Cache-Control: public");
    header("Content-Description: File Transfer");
    header("Content-Disposition: attachment;filename=\"$fileName\"");
    header("Content-Transfer-Encoding: binary");

    readfile($downloadURL);
}

?>