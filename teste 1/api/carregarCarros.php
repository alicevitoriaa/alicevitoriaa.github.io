<?php

    try{
        
        $conn = pg_connect("host=127.0.0.1 dbname=tabelaRev user=postgres password=tw@$1616");

        $id = $_POST['id'];
    
        if ($conn) {

            if (!empty($id)) {
                
                $result = pg_query($conn, 'SELECT * FROM "Alice V"."Veiculos" WHERE proprietario_id = \'' . $id . '\'');
        
                if ($result) {

                    echo json_encode(pg_fetch_all($result));

                } else {

                    echo "erro"; //. pg_last_error($conn);

                }

            } else {

                echo "erro";

            }
        
        }

    }catch(PDOException $e){
        
        echo "erro"; 

    }


?>
