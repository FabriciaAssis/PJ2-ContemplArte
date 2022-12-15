<?php

    require ('database.php');

    $nome = $_POST["nome"];
    $comentario = $_POST["comentario"];


    try {
        $stmt = $conn->prepare("INSERT INTO comentarios (nome, comentario)
        VALUES (:nome, :comentario)");
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':comentario', $comentario);

        $stmt->execute();
        $id = $conn->lastInsertId();

        $result["success"]["message"] = "Comentado com sucesso!";

        $result["data"]["id"] = $id;
        $result["data"]["nome"] = $nome;
        $result["data"]["comentario"] = $comentario;

        header('Content-ype: text/json');
        echo json_encode($result);

    } catch (\PDOException $e) {
        echo "Conection failed: " . $e->getMessage();
        }
?>