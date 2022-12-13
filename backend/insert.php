<?php

    require ('database.php');

    $nome = $_POST["nome"];
    $cpf = $_POST["cpf"];
    $dataNas = $_POST["dataNas"];
    $sexo = $_POST["sexo"];
    $email = $_POST["email"];


    try {
        $stmt = $conn->prepare("INSERT INTO incGeral (nome, cpf, dataNas, sexo, email)
        VALUES (:nome, :cpf, :dataNas, :sexo, :email)");
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':cpf', $cpf);
        $stmt->bindParam(':dataNas',  $dataNas);
        $stmt->bindParam(':sexo', $sexo);
        $stmt->bindParam(':email', $email);

        $stmt->execute();
        $id = $conn->lastInsertId();

        $result["success"]["message"] = "Cadastrado com sucesso!";

        $result["data"]["id"] = $id;
        $result["data"]["nome"] = $nome;
        $result["data"]["cpf"] = $cpf;
        $result["data"]["dataNas"] = $dataNas;
        $result["data"]["sexo"] = $sexo;
        $result["data"]["email"] = $email;

        header('Content-ype: text/json');
        echo json_encode($result);

    } catch (\PDOException $e) {
        echo "Conection failed: " . $e->getMessage();
        }
?>