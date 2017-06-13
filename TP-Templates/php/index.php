<?php
$template = $twig->loadTemplate('index.html');
echo $template->render(array('title' => 'my page'));
?>