<?php

    require ('database.php');

    $id = $_POST["id"];
    $nome = $_POST["nome"];
    $cpf = $_POST["cpf"];
    $dataNas = $_POST["dataNas"];
    $sexo = $_POST["sexo"];
    $email = $_POST["email"];

    try {
        $stmt = $conn->prepare("UPDATE INTO incGeral SET nome = :nome, cpf = :cpf, dataNas = :dataNas, sexo = :sexo WHERE id = :id");

        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':cpf', $cpf);
        $stmt->bindParam(':dataNas',  $dataNas);
        $stmt->bindParam(':sexo', $sexo);
        $stmt->bindParam(':email', $email);

        $stmt->execute();

        $count = $stmt->rowCount();

        if($count == 1){
            $result["success"]["message"] = "Cadastrado com sucesso!";

            $result["data"]["id"] = $id;
            $result["data"]["nome"] = $nome;
            $result["data"]["cpf"] = $cpf;
            $result["data"]["dataNas"] = $dataNas;
            $result["data"]["sexo"] = $sexo;
            $result["data"]["email"] = $email;    

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