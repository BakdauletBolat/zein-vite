<?php

// Tg bot token and chat_id, where bot will send messages
define("TG_BOT_TOKEN", "5760009485:AAGlWU1-hqwlQIWFw6V-AEbm0NqP1PV6d7w");
define("TG_CHAT_ID", "-870453774");

// Form input fields
define("FORM_HIDDEN_KEY", "action");
define("FORM_HIDDEN_VALUE", "application");
define("FORM_INPUT_NAME", "name");
define("FORM_INPUT_PHONE", "phone");
define("FORM_INPUT_SERVICE_TYPE", "service_type");

// check if user is submitting correct form and check for empty values
if ($_POST[FORM_HIDDEN_KEY] === FORM_HIDDEN_VALUE) {
  if (isset($_POST[FORM_INPUT_NAME]) && isset($_POST[FORM_INPUT_PHONE]) && isset($_POST[FORM_INPUT_SERVICE_TYPE])) {
    $name = $_POST[FORM_INPUT_NAME];
    $phone = $_POST[FORM_INPUT_PHONE];
    $service_type = $_POST[FORM_INPUT_SERVICE_TYPE];

    // collect array to send to end user
    $form_values = [
      "Имя:" => $name,
      "Телефон:" => $phone,
      "Услуга:" => $service_type
    ];
  }

  // look of our message on telegram
  foreach($form_values as $key => $value) {
      $text .= "<b>" . $key . "</b> " . $value . "%0A";
  };

  // send message to tgbot
  $sendToTelegram = fopen("https://api.telegram.org/bot" . TG_BOT_TOKEN . "/sendMessage?chat_id=" . TG_CHAT_ID . "&parse_mode=html&text={$text}", "r");

  // show an alert to user if message was sent successfully
  if ($sendToTelegram) {
    alert("Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.");
  }

  // if couldn't send message
  else {
    alert("Что-то пошло не так. Попробуйте отправить форму ещё раз.");
  }
}
