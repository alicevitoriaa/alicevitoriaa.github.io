<?php

    $fotos = [

        0 => ["Bar_e_restaurante.jpg", "Casa_de_chá.jpg", "Salas_de_ioga_e_meditação.jpg", "Spa_e_massagem.jpg", "Fitness_center.jpg"],
        1 => ["Ateliê.jpg", "Sala_de_jogos.jpg", "Brinquedoteca.jpg", "Piscina.jpg", "Coworking.jpg"]

    ];

    header('Content-Type: application/json');

    echo json_encode($fotos);

?>
