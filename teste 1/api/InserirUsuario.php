<?php

    try{
        
        $conn = pg_connect("host=127.0.0.1 dbname=tabelaRev user=postgres password=tw@$1616");

        $nome = $_POST['nome'];
        $senha = $_POST['senha'];
        $celular = $_POST['celular'];
        $email = $_POST['email'];
        $endereco = $_POST['endereco'];
    
        if ($conn) {

            if (!empty($nome) && !empty($senha) && !empty($celular) && !empty($email) && !empty($endereco)) {
                
                $result = pg_query($conn, "INSERT INTO \"Alice V\".\"Proprietarios\" (nome, email, endereco, celular, senha) VALUES ('$nome', '$email', '$endereco', '$celular', '$senha')");
        
                if ($result) {
                    echo "Registro inserido com sucesso.";
                } else {
                    echo "Erro ao inserir o registro: " . pg_last_error($conn);
                }
            } else {
                echo "Todos os campos devem ser preenchidos.";
            }
        
        }
    }catch(PDOException $e){

    }


?>
