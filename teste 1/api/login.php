<?php

    try{
        
        $conn = pg_connect("host=127.0.0.1 dbname=tabelaRev user=postgres password=tw@$1616");

        $email = $_POST['email'];
        $senha = $_POST['senha'];
    
        if ($conn) {

            if (!empty($senha) && !empty($email)) {
                
                $result = pg_query($conn, 'SELECT * FROM "Alice V"."Proprietarios" WHERE email = \'' . $email . '\' AND senha = \'' . $senha . '\'');
        
                if ($result) {

                    echo json_encode(pg_fetch_all($result));

                } else {

                    echo "Erro"; //. pg_last_error($conn);

                }

            } else {

                echo "Erro";

            }
        
        }

    }catch(PDOException $e){
        
        echo "Erro"; 

    }


?>
