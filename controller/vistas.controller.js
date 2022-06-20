"use strict";

var obtener_datos = function obtener_datos(tipo) {
  cargar();
  $('#seccion2').addClass('d-none');
  fetch("app/lib/podcast.json").then(function (respuesta) {
    return respuesta.json();
  }).then(function (respuesta) {
    var gestion = respuesta.gestion;
    var sistemas = respuesta.sistemas;
    var industrial = respuesta.industrial;
    var entretenimiento = respuesta.entretenimiento;
    var posicion = "justify-content-end";
    var con = 1;
    var podcast = tipo == "gestion" ? gestion : tipo == "sistemas" ? sistemas : tipo == "industrial" ? industrial : entretenimiento;
    var titulo = tipo == "gestion" ? "Ingenieria en Gestion Empresarial" : tipo == "sistemas" ? "Ingenieria en Sistemas Computacionales" : tipo == "industrial" ? "Ingenieria Industrial" : "Entretenimiento";
    var contenido = "\n        <div class=\"card podcast mb-2\" data-aos=\"fade-up\" data-aos-duration=\"3000\">\n            <div class=\"card-body\">\n                <h1 class=\"text-center display-4\">Podcast de ".concat(titulo, "</h1>\n            </div>\n        </div>\n        ");
    podcast.map(function (datos) {
      var titulo = datos.titulo;
      var descripcion = datos.descripcion;
      var google = datos.google;
      var amazon = datos.amazon;
      var spotify = datos.spotify;
      var youtube = datos.youtube;
      var img = datos.img;
      contenido += "\n            <div class=\"row py-3 ".concat(con % 2 == 0 ? posicion : "", "\"  data-aos=\"fade-up\" data-aos-duration=\"3000\">\n                <div class=\"col-md-10\">\n                    <div class=\"card podcast\">\n                        <div class=\"card-body\">\n                            <div class=\"row justify-content-center\">\n                                <div class=\"col-md-4\">\n                                    <img src=\"public/img/Flayer/").concat(img, "\" class=\"img-fluid rounded mb-3\" alt=\"\">\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <h1 class=\"display-4\">").concat(titulo, "</h1>\n                                    <hr>\n                                    <p class=\"text-justify lead\">\n                                        ").concat(descripcion, "\n                                    </p>\n                                    <p class=\"text-justify lead\">\n                                        <b>Escuchalo en:</b>\n                                    </p>\n                                    <hr>\n                                    <a href=\"").concat(amazon, "\" class=\"btn btn-outline-primary mb-3\" target=\"_blank\"><i class=\"fa-brands fa-amazon\"></i> Amazon Music</a>\n                                    <a href=\"").concat(google, "\" class=\"btn btn-outline-dark mb-3\" target=\"_blank\"><i class=\"fa-brands fa-google\"></i> Google Podcast</a>\n                                    <a href=\"").concat(spotify, "\" class=\"btn btn-outline-success mb-3\" target=\"_blank\"><i class=\"fa-brands fa-spotify\"></i> Spotify</a>\n                                    <a href=\"").concat(youtube, "\" class=\"btn btn-outline-danger mb-3\" target=\"_blank\"><i class=\"fa-brands fa-youtube\"></i> YouTube</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ");
      con++;
    });
    $("#contenido-podcast").html(contenido);
    finalizado();
  })["catch"](function (error) {
    finalizado();
    msj_error("".concat(error));
  });
};

var inicio = function inicio() {
  $("#contenido-podcast").html('');
  $('#seccion2').removeClass('d-none');
  obtener_datos_reciente();
};

var obtener_datos_reciente = function obtener_datos_reciente() {
  //cargar();
  fetch("app/lib/podcast.json").then(function (respuesta) {
    return respuesta.json();
  }).then(function (respuesta) {
    var reciente = respuesta.reciente;
    var posicion = "justify-content-end";
    var con = 1;
    var contenido = "\n        <div class=\"card podcast mb-2\" data-aos=\"fade-up\" data-aos-duration=\"3000\">\n            <div class=\"card-body\">\n                <h1 class=\"text-center display-4\">Podcast Destacados</h1>\n            </div>\n        </div>\n        ";
    reciente.map(function (datos) {
      var titulo = datos.titulo;
      var descripcion = datos.descripcion;
      var google = datos.google;
      var amazon = datos.amazon;
      var spotify = datos.spotify;
      var youtube = datos.youtube;
      var img = datos.img;
      contenido += "\n            <div class=\"row py-3 ".concat(con % 2 == 0 ? posicion : "", "\"  data-aos=\"fade-up\" data-aos-duration=\"3000\">\n                <div class=\"col-md-10\">\n                    <div class=\"card podcast\">\n                        <div class=\"card-body\">\n                            <div class=\"row justify-content-center\">\n                                <div class=\"col-md-4\">\n                                    <img src=\"public/img/Flayer/").concat(img, "\" class=\"img-fluid rounded mb-3\" alt=\"\">\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <h1 class=\"display-4\">").concat(titulo, "</h1>\n                                    <hr>\n                                    <p class=\"text-justify lead\">\n                                        ").concat(descripcion, "\n                                    </p>\n                                    <p class=\"text-justify lead\">\n                                        <b>Escuchalo en:</b>\n                                    </p>\n                                    <hr>\n                                    <a href=\"").concat(amazon, "\" class=\"btn btn-outline-primary mb-3\" target=\"_blank\"><i class=\"fa-brands fa-amazon\"></i> Amazon Music</a>\n                                    <a href=\"").concat(google, "\" class=\"btn btn-outline-dark mb-3\" target=\"_blank\"><i class=\"fa-brands fa-google\"></i> Google Podcast</a>\n                                    <a href=\"").concat(spotify, "\" class=\"btn btn-outline-success mb-3\" target=\"_blank\"><i class=\"fa-brands fa-spotify\"></i> Spotify</a>\n                                    <a href=\"").concat(youtube, "\" class=\"btn btn-outline-danger mb-3\" target=\"_blank\"><i class=\"fa-brands fa-youtube\"></i> YouTube</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ");
      con++;
    });
    $("#contenido-podcast").html(contenido); //finalizado();
  })["catch"](function (error) {
    //finalizado();
    msj_error("".concat(error));
  });
};

obtener_datos_reciente();