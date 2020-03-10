<?php

include("conexao.php");

?>

<?php

$nome = $_POST["nome"];
$apelido = $_POST["apelido"];
$idade = $_POST["idade"];
$area = $_POST["area"];
$telefone = $_POST["telefone"];
$celular = $_POST["celular"];
$rg = $_POST["rg"];
$cpf = $_POST["cpf"];
$email = $_POST["email"];
$senha = $_POST["senha"];


function cadastraPrestador($conexao,$nome, $apelido, $idade, $area, $telefone, $celular, $rg, $cpf, $email, $senha){
    $inserir = "insert into prestador (nome, apelido, idade, area, telefone, celular, rg, cpf, email, senha) values ('{$nome}', '{$apelido}', '{$idade}', '{$area}', '{$telefone}', '{$celular}', '{$rg}', '{$cpf}', '{$email}', '{$senha}')";
    
    $resultadoDaInsercao = mysqli_query($conexao,$inserir);
    return $resultadoDaInsercao;
}

if(cadastraPrestador($conexao,$nome, $apelido, $idade, $area, $telefone, $celular, $rg, $cpf, $email, $senha)){
    echo "Dados inseridos com sucesso";

}else{
    $msg = mysqli_error($conexao);
    echo "Erro ao gravar os dados".$msg;
}
?>