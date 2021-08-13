<?php

/* https://api.telegram.org/bot1700599990:AAF9AcqThArJxoqzqclZqZ68ZWu8rfSrjSA/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// поля из формы
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$tur = $_POST['user_tyr'];
// $email = $_POST['user_email'];
// $family = $_POST['user_family'];
// $cyty = $_POST['cyty'];
// $country = $_POST['country'];
// $poll = $_POST['poll'];
// токен нашего бота из botFather
$token = "1700599990:AAF9AcqThArJxoqzqclZqZ68ZWu8rfSrjSA";
// $chat_id = "https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXXXX/getUpdates";
$chat_id = "-322357712";
$arr = array(

  'Имя: ' => $name,
  // 'Фамилия пользователя: ' => $family,
  'Телефон: ' => $phone,
  'Тур: ' => $tur
  // 'Город: ' => $cyty,
  // 'Пол: ' => $poll,
  // 'Страна: ' => $country,
  // 'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .="<b>".$key."</b>".$value."%0A";

};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
