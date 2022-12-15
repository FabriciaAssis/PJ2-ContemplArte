<?php

    require ('database.php');

    try {
        $stmt = $conn->prepare("SELECT nome, cpf, dataNas, sexo, email FROM incGeral;");
        $stmt->execute();

        $producoes = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $result["success"]["message"] = "Inscrição realizada com sucesso!";
        $result["data"] = $producoes;

        header('Content-ype: text/json');
        echo json_encode($result);
    } catch (\PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
        }
?>