window.onscroll = () => {
    if(document.documentElement.scrollTop > 100 ) {
        $('.go-top-container').addClass('show');
    }else{
        $('.go-top-container').removeClass('show');
    }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const obtener_datos = (tipo) => {
    cargar();
    $('#seccion2').addClass('d-none');
    fetch(`app/lib/podcast.json`)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        let {gestion} = respuesta;
        let {sistemas} = respuesta;
        let {industrial} = respuesta;
        let {entretenimiento} = respuesta;
        let posicion = "justify-content-end";
        let con = 1; 
        let podcast = tipo == "gestion" ? gestion : tipo == "sistemas" ? sistemas : tipo == "industrial" ? industrial : entretenimiento;
        let titulo = tipo == "gestion" ? "Ingenieria en Gestion Empresarial" : tipo == "sistemas" ? "Ingenieria en Sistemas Computacionales" : tipo == "industrial" ? "Ingenieria Industrial" : "Entretenimiento";
        let contenido = `
        <div class="card podcast mb-2" data-aos="fade-up" data-aos-duration="3000">
            <div class="card-body">
                <h1 class="text-center display-4">Podcast de ${titulo}</h1>
            </div>
        </div>
        `;
        podcast.map(datos => {
            let {titulo} = datos;
            let {descripcion} = datos;
            let {google} = datos;
            let {amazon} = datos;
            let {spotify} = datos;
            let {youtube} = datos;
            let {img} = datos;
            contenido += `
            <div class="row py-3 ${ (con%2==0) ? posicion : ""}"  data-aos="fade-up" data-aos-duration="3000">
                <div class="col-md-10">
                    <div class="card podcast">
                        <div class="card-body">
                            <div class="row justify-content-center">
                                <div class="col-md-4">
                                    <img src="public/img/Flayer/${img}" class="img-fluid rounded mb-3" alt="">
                                </div>
                                <div class="col-md-8">
                                    <h1 class="display-4">${titulo}</h1>
                                    <hr>
                                    <p class="text-justify lead">
                                        ${descripcion}
                                    </p>
                                    <p class="text-justify lead">
                                        <b>Escuchalo en:</b>
                                    </p>
                                    <hr>
                                    <a href="${amazon}" class="btn btn-outline-primary mb-3" target="_blank"><i class="fa-brands fa-amazon"></i> Amazon Music</a>
                                    <a href="${google}" class="btn btn-outline-dark mb-3" target="_blank"><i class="fa-brands fa-google"></i> Google Podcast</a>
                                    <a href="${spotify}" class="btn btn-outline-success mb-3" target="_blank"><i class="fa-brands fa-spotify"></i> Spotify</a>
                                    <a href="${youtube}" class="btn btn-outline-danger mb-3" target="_blank"><i class="fa-brands fa-youtube"></i> YouTube</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            con ++;
        });
        $(`#contenido-podcast`).html(contenido);
        finalizado();
    }).catch(error => {
        finalizado();
        msj_error(`${error}`);
    });
}

const inicio = () => {
    $(`#contenido-podcast`).html('');
    $('#seccion2').removeClass('d-none');
    obtener_datos_reciente();
}

const obtener_datos_reciente = () => {
    //cargar();
    fetch(`app/lib/podcast.json`)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        let {reciente} = respuesta;
        let posicion = "justify-content-end";
        let con = 1;
        let contenido = `
        <div class="card podcast mb-2" data-aos="fade-up" data-aos-duration="3000">
            <div class="card-body">
                <h1 class="text-center display-4">Podcast Destacados</h1>
            </div>
        </div>
        `;
        reciente.map(datos => {
            let {titulo} = datos;
            let {descripcion} = datos;
            let {google} = datos;
            let {amazon} = datos;
            let {spotify} = datos;
            let {youtube} = datos;
            let {img} = datos;
            contenido += `
            <div class="row py-3 ${ (con%2==0) ? posicion : ""}"  data-aos="fade-up" data-aos-duration="3000">
                <div class="col-md-10">
                    <div class="card podcast">
                        <div class="card-body">
                            <div class="row justify-content-center">
                                <div class="col-md-4">
                                    <img src="public/img/Flayer/${img}" class="img-fluid rounded mb-3" alt="">
                                </div>
                                <div class="col-md-8">
                                    <h1 class="display-4">${titulo}</h1>
                                    <hr>
                                    <p class="text-justify lead">
                                        ${descripcion}
                                    </p>
                                    <p class="text-justify lead">
                                        <b>Escuchalo en:</b>
                                    </p>
                                    <hr>
                                    <a href="${amazon}" class="btn btn-outline-primary mb-3" target="_blank"><i class="fa-brands fa-amazon"></i> Amazon Music</a>
                                    <a href="${google}" class="btn btn-outline-dark mb-3" target="_blank"><i class="fa-brands fa-google"></i> Google Podcast</a>
                                    <a href="${spotify}" class="btn btn-outline-success mb-3" target="_blank"><i class="fa-brands fa-spotify"></i> Spotify</a>
                                    <a href="${youtube}" class="btn btn-outline-danger mb-3" target="_blank"><i class="fa-brands fa-youtube"></i> YouTube</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            con ++;
        });
        $(`#contenido-podcast`).html(contenido);
        //finalizado();
    }).catch(error => {
        //finalizado();
        msj_error(`${error}`);
    });
}

obtener_datos_reciente();
