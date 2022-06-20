<?php 
    require_once 'conector.model.php';
    require_once 'sesion.model.php';
    
    Conector::abrir_conexion();
    call_user_func('Login::'.$_POST['funcion'],Conector::obtener_conexion());    
    class Login {  
        static function iniciar_sesion($conexion){            
            $resultado = self::verificacion_acceso($conexion);            
            if ($resultado && password_verify($_POST['password'], $resultado['password'])) {                
                Sesion::crear_sesion($resultado);  
                self::actualizar_estado($conexion, $resultado['idUsuario'], "conectado");
                echo json_encode(["1","Credenciales de acceso validas!","home"]);
            }else {
                echo json_encode(["0","Correo electronico o constraseña no validos"]);	
            } 
            Conector::cerrar_conexion();
        }

        static function verificacion_acceso($conexion){            
            $consulta = $conexion->prepare("SELECT * FROM t_usuario WHERE usuario=:usuario");
            $consulta -> bindParam(':usuario', $_POST['usuario']);
            $consulta -> execute();      
            return $consulta -> fetch(PDO::FETCH_ASSOC);
        }

        static function actualizar_estado($conexion, $id, $estado){
            $sql = $conexion -> prepare("UPDATE t_usuario SET estado= :estado WHERE idUsuario = :idUsuario");
            $sql -> bindParam(':estado',$estado);
            $sql -> bindParam(':idUsuario',$id);
            $sql -> execute();
        }

        static function cerrar_sesion($conexion){            
            self::actualizar_estado($conexion, $_SESSION['user']['idUsuario'], "desconectado");
            Sesion::destruir_sesion();  
            Conector::cerrar_conexion();     
            echo json_encode(["1","Cerrando sesion...","login"]);
        }
    }
?>