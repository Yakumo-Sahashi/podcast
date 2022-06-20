<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php 
        require_once 'app/config.app.php';
        require_once 'app/dependencias.app.php';
        require_once 'app/router.app.php';    
    ?>
</head>
<body>
    <?php require_once 'view/main/loader.view.php';?>
    <div class="min-vh-100 d-flex flex-column justify-content-between">
        <div>
            <?php 
                /* require_once 'view/main/navbar.view.php'; */
                Router::direccion();
            ?>
        </div>
        <?php require_once 'view/main/footer.view.php';?>
    </div>
    <div class="go-top-container">
        <div class="go-top-button">
            <i class="icono fas fa-chevron-up"></i>
        </div>
    </div>
    <script src="<?=CONTROLLER;?>vistas.controller.js"></script>
    <script>
        AOS.init();
    </script>
</body>
</html>