<?php 
// Функция для отправки писем с формы "ПОДБОРКА ТЕНДЕРОВ"


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$text = $_POST['text'];
$num = $_POST['num'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$text2 = $_POST['text2'];

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
$mail->Subject = 'Мои Тендеры - Подборка тендеров'; // Тема письма
$mail->Body    = '' .$text. ' - Название компании<br>' .$num. ' - Инн компании<br>' .$email. ' - Почта этого пользователя<br>' .$phone ' - Телефон<br>' .$text2 ' - Тематика тендера';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: ../../index.html');
}
?>