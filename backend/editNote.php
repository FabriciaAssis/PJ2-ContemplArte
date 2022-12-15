<?php

    require ('database.php');

    $id = $_POST["id"];
    $nome = $_POST["nome"];
    $comentario = $_POST["comentario"];

    try {
        $stmt = $conn->prepare("UPDATE INTO comentarios SET nome = :nome, comentario = :comentario WHERE id = :id");
        
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':comentario', $comentario);

        $stmt->execute();

        $count = $stmt->rowCount();

        if($count == 1){
            $result["success"]["message"] = "Comentado com sucesso!";

            $result["data"]["id"] = $id;
            $result["data"]["nome"] = $nome;
            $result["data"]["comentario"] = $comentario;

            header('Content-ype: text/json');
            echo json_encode($result);
        }else{
            $result["error"]["message"] = "ID: $id não encontrado!";
        }

        header('Content-Type: text/json');
        echo json_encode($result);

    } catch (\PDOException $e) {
        echo "Conection failed: " . $e->getMessage();
        }
?>