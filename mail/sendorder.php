<?php 
// Функция для отправки писем с формы "ЗАКАЗАТЬ УСЛУГУ"


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$order = $_POST['order'];

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'offer-from-my-tenders@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'tender33ctdth'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('offer-from-my-tenders@mail.ru'); // От кого будет уходить письмо?
$mail->addAddress('a.scherbakov@basis.ru'); // Кому будет уходить письмо

$mail->isHTML(true);
$mail->Subject = 'Мои Тендеры - Заказать услугу'; // Тема письма
$mail->Body    = '' .$name. ' - Имя <br>' .$email. ' - Почта этого пользователя<br>' .$phone. ' - Телефон<br>' .$order. ' - Заказ';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: ../../index.html');
}
?>