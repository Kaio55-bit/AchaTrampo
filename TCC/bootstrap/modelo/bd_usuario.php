<?php
    include("conexao.php");
?>
<?php
    
    $usuario = $_POST["usuario"];
    $senha = $_POST["senha"];
    $email = $_POST["email"];

    function cadastraUsuario($conexao,$usuario, $senha, $email){
        $inserir = "insert into usuarios (usuario, senha, email) values ('{$usuario}', '{$senha}', '{$email}')";
        
        $resultadoDaInsercao = mysqli_query($conexao,$inserir);
        return $resultadoDaInsercao;
    }

    if(cadastraUsuario($conexao, $usuario, $senha, $email)){
        echo "Dados inseridos com sucesso";

    }else{
        $msg = mysqli_error($conexao);
        echo "Erro ao gravar os dados".$msg;
    }
?>