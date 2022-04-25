<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-6.6.0/src/Exception.php';
require 'PHPMailer-6.6.0/src/PHPMailer.php';
  

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8'; 
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('zakaz@yandex.by', 'Заказ звонка от сайта');
$mail->addAddress('chp.obereg.a@yandex.by ');
$mail->Subject = 'Заказ от сайта';


$body = '<h1> Новый заказ на звонок </h1>';

if(trim(!empty($_POST['name']))) {
    $body.='<p><strong> Имя:</strong> '.$_POST['name'].'</p>';
}

if(trim(!empty($_POST['telNumber']))) {
    $body.='<p><strong> Телефон:</strong> '.$_POST['telNumber'].'</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
    $message = 'Ошибка! Поля неверно заполнены.';
} else {
    $message = 'Cпасибо! Ваше сообщение отправлено. Мы перезвоним
    вам в ближайшее время.';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>