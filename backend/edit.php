<?php

    require ('database.php');

    $id = $_POST["id"];
    $titulo = $_POST["titulo"];
    $genero = $_POST["genero"];
    $capa = $_POST["capa"];
    $classificacao = $_POST["classificacao"];

    try {
        $stmt = $conn->prepare("UPDATE INTO producoes SET titulo = :titulo, genero = :genero, capa = :capa, classificacao = :classificacao WHERE id = :id");
        
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':titulo', $titulo);
        $stmt->bindParam(':genero', $genero);
        $stmt->bindParam(':capa', $capa);
        $stmt->bindParam(':classificacao', $classificacao);

        $stmt->execute();

        $count = $stmt->rowCount();

        if($count == 1){
            $result["success"]["message"] = "Cadastrado com sucesso!";

            $result["data"]["id"] = $id;
            $result["data"]["titulo"] = $titulo;
            $result["data"]["genero"] = $genero;
            $result["data"]["capa"] = $capa;
            $result["data"]["classificacao"] = $classificacao;

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