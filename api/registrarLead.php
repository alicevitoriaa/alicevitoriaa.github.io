<?php

    $servername = "DESKTOP-V2H1401";
    $username = "root@localhost";
    $password = 2222;
    $dbname = "leads";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    }

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $estado = $_POST['estado'];
    $cidade = $_POST['cidade'];
    $mensagem = $_POST['mensagem'];

    $sql = "INSERT INTO usuarios (nome, email, telefone, estado, cidade, mensagem) VALUES ('$nome', '$email', '$telefone', '$estado', '$cidade', '$mensagem')";

    if ($conn->query($sql) === TRUE) {
        echo "Inserção bem-sucedida";
    } else {
        echo "Erro ao inserir: " . $conn->error;
    }

    $conn->close();
    
?>
