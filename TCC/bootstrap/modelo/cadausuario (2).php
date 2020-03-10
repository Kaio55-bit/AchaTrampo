<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cadastrar Usuário</title>
</head>
<body>
    <form action="bd_usuario.php" method="post">
        <label>Digite usuário:</label><br/><br/>
        <input type="text" id="usuario" name="usuario"/><br/><br/>
        <label>Digite senha:</label><br/><br/>
        <input type="text" id="senha" name="senha"/><br/><br/>
        <label>Digite email:</label><br/><br/>
        <input type="text" id="email" name="email"/><br/><br/>
        <input type="submit" value="Cadastrar" name="cadastrar"/>
        <input type="reset" value="Limpar" name="limpar"/>
    </form>
</body>
</html>