<?php require_once 'model/sesion.model.php';?>
<nav class="navbar navbar-expand-lg navbar-light bg-transparente borde-nav menu">
  <div class="container text-center">
    <a class="navbar-brand text-white" href="<?=Router::redirigir('home')?>"><img loading="lazy" src="<?=DEP_IMG?>itma2.png" width="30px"
      height="30px"> ITMA II</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#home" class="btn btn-primary" id="#btn_home" onclick="inicio()">
            <i class="fa-solid fa-house"></i> Inicio
          </a>
        </li>  
      </ul>

      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#contenido-podcast" class="btn btn-primary" id="#btn_entretenimiento" onclick="obtener_datos('entretenimiento')">
            <i class="fa-brands fa-centercode"></i> Entretenimiento
          </a>
        </li> 
        <li class="nav-item">
          <a href="#contenido-podcast" class="btn btn-primary" id="#btn_gestion" onclick="obtener_datos('gestion')">
            <i class="fa-solid fa-user-tie"></i> Gestion Empresarial
          </a>
        </li> 
        <li class="nav-item">
          <a href="#contenido-podcast" class="btn btn-primary" id="#btn_sistemas" onclick="obtener_datos('sistemas')">
            <i class="fa-solid fa-laptop-code"></i> Sistemas Computacionales
          </a>
        </li>  
        <li class="nav-item">
          <a href="#contenido-podcast" class="btn btn-primary" id="#btn_industrial" onclick="obtener_datos('industrial')">
            <i class="fa-solid fa-industry"></i> Industrial
          </a> 
        </li> 
      </ul>
    </div>
  </div>
</nav>