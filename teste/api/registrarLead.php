<?php

    $conn = new mysqli('localhost', 'Alice', '2222', 'leads');

    if (!$conn) {

        die("Conexão falhou: " . $conn->connect_error);

    }

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $estado = $_POST['estado'];
    $cidade = $_POST['cidade'];
    $mensagem = $_POST['mensagem'];

    if($nome && $email && $telefone && $estado && $cidade && $mensagem){
        
        $sql = $conn->query("INSERT INTO usuarios (nome, email, telefone, estado, cidade, mensagem) VALUES ('$nome', '$email', '$telefone', '$estado', '$cidade', '$mensagem')");
    
        if ($sql) {

            echo "Inserção bem-sucedida";

        } else {

            echo "Erro ao inserir: " . $conn->error;

        }

    }else{
        
        echo "Erro: Preencha todos os campos";
        
    }


    $conn->close();
    
?>
