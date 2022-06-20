<?php
    define('TITULO_PAGINA', "LA CABINA DE LOS LINCES");
    define('SERVIDOR', "http://podcast.linces/");
    define('DEP_CSS', SERVIDOR . "public/css/");
    define('DEP_SCRIPT', SERVIDOR . "public/js/");
    define('DEP_IMG', SERVIDOR . "public/img/");
    define('CONTROLLER', SERVIDOR . "controller/");
    define('LIB_JC', SERVIDOR . "app/lib/JC/");
    
    define('AUDIO', SERVIDOR . "public/files/audio/");
    define('DOC', SERVIDOR . "public/files/doc/");
    define('PDF', SERVIDOR . "public/files/pdf/");
    define('VIDEO', SERVIDOR . "public/files/video/");
    define('EXCEL', SERVIDOR . "public/files/xlsx/");
    
    define("direccion", array(
        'home' => 'view/home.view',
        'login' => 'view/login/login.view',
        'prueba' => 'view/login/registro.view',
        'error' => 'view/error/error404.view',
    ));
?>
