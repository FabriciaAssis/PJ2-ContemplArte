<?php

    require ('database.php');

    $titulo = $_POST["titulo"];
    $genero = $_POST["genero"];
    $capa = $_POST["capa"];
    $classificacao = $_POST["classificacao"];



    try {
        $stmt = $conn->prepare("INSERT INTO producoes (titulo, genero, capa, classificacao)
        VALUES (:titulo, :genero, :capa, :classificacao)");
        $stmt->bindParam(':titulo', $titulo);
        $stmt->bindParam(':genero', $genero);
        $stmt->bindParam(':capa', $capa);
        $stmt->bindParam(':classificacao', $classificacao);

        $stmt->execute();
        $id = $conn->lastInsertId();

        $result["success"]["message"] = "Cadastrado com sucesso!";

        $result["data"]["id"] = $id;
        $result["data"]["titulo"] = $titulo;
        $result["data"]["genero"] = $genero;
        $result["data"]["capa"] = $capa;
        $result["data"]["classificacao"] = $classificacao;

        header('Content-ype: text/json');
        echo json_encode($result);

    } catch (\PDOException $e) {
        echo "Conection failed: " . $e->getMessage();
        }
?>