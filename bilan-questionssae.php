<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le bilan des questions</title>
    <link rel="stylesheet" href="./stylephp.css" type="text/css" media="all">
</head>

<body>
    <?php
    $data = file_get_contents("./questionssae.txt");
    $data = explode('..................................................', $data);
    $number = count($data) - 1;
    ?>
    <p id="titre">Bilan des <?php echo ($number) ?> questions déposées :</p>
    <?php
    foreach ($data as $question) {
        $line = explode('|', $question);
        if (strlen($question) === 0) {
            return;
        }
    ?>
        <div class="data">
            <div class="head">
                <p class="date">Le <?php echo $line[0] ?>par :&thinsp;</p>
                <p class="email"><?php echo $line[1] ?></p>
            </div>
            <p class="question"><?php echo $line[2] ?></p>
        </div>
    <?php

    }
    ?>
</body>

</html>