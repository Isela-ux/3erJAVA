// Este script genera dinámicamente todo el contenido de la página de la Parroquia usando solo JavaScript

// Estilos generales del body
Object.assign(document.body.style, {
    margin: "0",
    padding: "0",
    height: "100%",
    width: "100%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#f4f4f4",
    overflowX: "hidden",
    overflowY: "auto"
});

document.documentElement.lang = "es";

// Crear sidebar
const sidebar = document.createElement("div");
sidebar.className = "sidebar";
Object.assign(sidebar.style, {
    width: "250px",
    backgroundColor: "#007b8f",
    color: "white",
    padding: "20px",
    textAlign: "left",
    position: "fixed",
    height: "100%",
    top: "0",
    left: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
});

const direccion = document.createElement("h3");
direccion.textContent = "DIRECCIÓN";
const direccionLink = document.createElement("p");
direccionLink.innerHTML = '<a href="https://maps.app.goo.gl/g93AFpbCb1Khx1Ef9" target="_blank" style="color: white;">Miguel Hidalgo esq. Ramón Mendoza, 86690</a>';

const fbDiv = document.createElement("div");
fbDiv.className = "facebook-link";
fbDiv.style.marginTop = "15px";
const fbImg = document.createElement("img");
fbImg.src = "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg";
fbImg.style.width = "20px";
fbImg.style.height = "20px";
fbImg.style.marginRight = "10px";
const fbAnchor = document.createElement("a");
fbAnchor.href = "https://www.facebook.com/share/165iCNUT3k/";
fbAnchor.target = "_blank";
fbAnchor.textContent = "Visítanos en Facebook";
fbAnchor.style.color = "white";
fbAnchor.style.textDecoration = "none";
fbDiv.appendChild(fbImg);
fbDiv.appendChild(fbAnchor);

const correoDiv = document.createElement("div");
correoDiv.className = "correo-link";
correoDiv.style.marginTop = "10px";
const correoIcon = document.createElement("i");
correoIcon.className = "fas fa-envelope";
correoIcon.style.marginRight = "10px";
correoIcon.style.fontSize = "18px";
const correoAnchor = document.createElement("a");
correoAnchor.href = "mailto:parroquia_19@outlook.es";
correoAnchor.textContent = "parroquia_19@outlook.es";
correoAnchor.style.color = "white";
correoAnchor.style.textDecoration = "none";
correoDiv.appendChild(correoIcon);
correoDiv.appendChild(correoAnchor);

const imgDestacada = document.createElement("div");
imgDestacada.className = "imagen-destacada";
imgDestacada.style.cursor = "pointer";
imgDestacada.style.marginTop = "30px";
  // Eliminar el margen negativo
  imgDestacada.style.textAlign = "center";
  imgDestacada.style.margin = "30px auto";

// Usamos flexbox para organizar los elementos
imgDestacada.style.display = "flex";
imgDestacada.style.flexDirection = "column";  // Apilamos la imagen y el texto en columna
imgDestacada.style.alignItems = "center";    // Centrar los elementos

// Creamos el título
const h4Destacada = document.createElement("h4");
h4Destacada.textContent = "Fundación de Cunduacán";
h4Destacada.style.color = "white";
h4Destacada.style.fontSize = "16px";
h4Destacada.style.fontFamily = "'Great Vibes', cursive";
h4Destacada.style.marginBottom = "10px"; // Añadir espacio entre el texto y la imagen

// Creamos la imagen
const imgTag = document.createElement("img");
imgTag.src = "imagenes/virgen.jpeg";
imgTag.style.width = "200px";
imgTag.style.borderRadius = "10px";
imgTag.style.marginBottom = "10px"; // Añadir espacio entre la imagen y el enlace

// Creamos el enlace
const aDestacada = document.createElement("a");
aDestacada.href = "https://detabascosoy.com/parroquia-de-la-natividad-de-maria-cunduacan/";
aDestacada.target = "_blank";
aDestacada.textContent = "Ver más detalles";
aDestacada.style.color = "white";
aDestacada.style.fontWeight = "bold";
aDestacada.style.textDecoration = "none";

// Agregamos los elementos a `imgDestacada`
imgDestacada.appendChild(h4Destacada);
imgDestacada.appendChild(imgTag);
imgDestacada.appendChild(aDestacada);

// Añadimos la función de abrir el modal
imgDestacada.onclick = openModal;


imgDestacada.appendChild(h4Destacada);
imgDestacada.appendChild(imgTag);
imgDestacada.appendChild(aDestacada);

sidebar.appendChild(direccion);
sidebar.appendChild(direccionLink);
sidebar.appendChild(fbDiv);
sidebar.appendChild(correoDiv);
sidebar.appendChild(imgDestacada);
document.body.appendChild(sidebar);

const mainContent = document.createElement("div");
mainContent.className = "main-content";
mainContent.style.marginLeft = "250px";
mainContent.style.width = "calc(100% - 250px)";
mainContent.style.position = "relative";
mainContent.style.paddingTop = "10px";
mainContent.style.overflow = "auto";

const header = document.createElement("header");
header.textContent = "Parroquia La Natividad de María";
Object.assign(header.style, {
    backgroundColor: "#00bcd4",
    padding: "20px",
    color: "white",
    fontSize: "40px",
    fontFamily: "'Great Vibes', cursive",
    position: "fixed",
    top: "0",
    left: "250px",
    width: "calc(100% - 250px)",
    zIndex: "2",
    boxSizing: "border-box"
});

const dropdown = document.createElement("div");
dropdown.className = "eventos-dropdown";
dropdown.style.position = "absolute";
dropdown.style.top = "10px";
dropdown.style.right = "20px";
dropdown.style.zIndex = "999";

const botonEventos = document.createElement("button");
botonEventos.className = "boton-eventos";
botonEventos.textContent = "Próximos Eventos";
Object.assign(botonEventos.style, {
    backgroundColor: "#007b8f",
    color: "white",
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "14px"
});

const menuEventos = document.createElement("div");
menuEventos.className = "menu-eventos";
menuEventos.style.display = "none";
menuEventos.style.position = "absolute";
menuEventos.style.right = "0";
menuEventos.style.backgroundColor = "white";
menuEventos.style.color = "black";
menuEventos.style.minWidth = "220px";
menuEventos.style.boxShadow = "0px 4px 8px rgba(0,0,0,0.2)";
menuEventos.style.padding = "10px";
menuEventos.style.borderRadius = "5px";
menuEventos.style.marginTop = "5px";

const eventos = [
    "ACTIVIDADES DE SEMANA SANTA",
    "🌟 Misa de DOMINGO DE RAMOS  - 08:00, 10:00 , 12:00 Y 7:00 PM .EL 13 de abril",
    "📖 Procesión de DOMINGO DE RAMOS - 13 DE ABRIL 09:00 AM , PARQUE MANUEL SANCHEZ MARMOL",
    "🎶 Misa de JUEVES SANTO -  17 de abril-07:00 PM",
    "🎶 Misa de VIERNES SANTO -  18 de abril-06:00 PM",
    "🎶 Misa de SABADO SANTO VIGILIA PASCUAL -  19 de abril-07:00 PM",
    "🎶 Misa de DOMINGO DE RESURRECCIÓN  -  20 de abril-10:00 , 12:00 Y 7:00 PM"
];

for (let e of eventos) {
    const p = document.createElement("p");
    p.textContent = e;
    p.style.margin = "0";
    p.style.padding = "5px 0";
    p.style.fontSize = "14px";
    p.style.borderBottom = "1px solid #ccc";
    menuEventos.appendChild(p);
}
menuEventos.lastChild.style.borderBottom = "none";

dropdown.onmouseenter = () => menuEventos.style.display = "block";
dropdown.onmouseleave = () => menuEventos.style.display = "none";

dropdown.appendChild(botonEventos);
dropdown.appendChild(menuEventos);
header.appendChild(dropdown);
mainContent.appendChild(header);

const content = document.createElement("div");
content.className = "content";
Object.assign(content.style, {
    backgroundImage: "url('imagenes/1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
    position: "relative",
    top: "80px",
    paddingTop: "50px",
    zIndex: "1"
});

const descripcion = document.createElement("div");
descripcion.className = "descripcion";
descripcion.textContent = "Bienvenidos a la Parroquia La Natividad de María, donde nos encontramos para celebrar la fe, la comunidad y los valores cristianos. Únete a nosotros en nuestras misas, eventos y actividades parroquiales.";
descripcion.style.color = "white";
descripcion.style.fontSize = "22px";
descripcion.style.marginTop = "20px";
descripcion.style.padding = "20px";
descripcion.style.maxWidth = "800px";
descripcion.style.marginLeft = "auto";
descripcion.style.marginRight = "auto";
descripcion.style.textAlign = "center";
descripcion.style.textShadow = "3px 3px 8px rgba(0, 0, 0, 0.8)";

const horarios = document.createElement("div");
horarios.className = "horarios";
horarios.style.color = "white";
horarios.style.fontSize = "22px";
horarios.style.marginTop = "20px";
horarios.style.padding = "20px";
horarios.style.textAlign = "left";
horarios.style.marginLeft = "50px";
horarios.style.maxWidth = "300px";
horarios.style.textShadow = "3px 3px 8px rgba(0, 0, 0, 0.8)";

const misaSemana = document.createElement("div");
misaSemana.className = "horario";
misaSemana.textContent = "Misas: Martes - Jueves a las 7:00 PM";
misaSemana.style.backgroundColor = "#00bcd4";
misaSemana.style.color = "white";
misaSemana.style.padding = "15px";
misaSemana.style.borderRadius = "10px";
misaSemana.style.fontSize = "18px";
misaSemana.style.marginBottom = "10px";
misaSemana.style.textAlign = "center";

const misaDomingo = misaSemana.cloneNode();
misaDomingo.textContent = "Domingo: 8:00 AM, 10:00 AM, 12:00 PM y 6:00 PM";

const confesiones = misaSemana.cloneNode();
confesiones.textContent = "Confesiones: Martes y Jueves 10:00 AM";

horarios.appendChild(misaSemana);
horarios.appendChild(misaDomingo);
horarios.appendChild(confesiones);

content.appendChild(descripcion);
content.appendChild(horarios);
mainContent.appendChild(content);
document.body.appendChild(mainContent);

// Modal para imagen destacada
const modal = document.createElement("div");
modal.id = "imageModal";
modal.className = "modal";
Object.assign(modal.style, {
    display: "none",
    position: "fixed",
    zIndex: "999",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center"
});

const modalContent = document.createElement("div");
modalContent.className = "modal-content";
modalContent.style.maxWidth = "90%";
modalContent.style.maxHeight = "90%";
const modalImg = document.createElement("img");
modalImg.src = "imagenes/virgen.jpeg";
modalImg.style.width = "100%";
modalImg.style.borderRadius = "10px";

const modalClose = document.createElement("span");
modalClose.className = "close";
modalClose.innerHTML = "&times;";
modalClose.style.position = "absolute";
modalClose.style.top = "20px";
modalClose.style.right = "20px";
modalClose.style.color = "white";
modalClose.style.fontSize = "30px";
modalClose.style.fontWeight = "bold";
modalClose.style.cursor = "pointer";
modalClose.onclick = closeModal;

modalContent.appendChild(modalImg);
modal.appendChild(modalClose);
modal.appendChild(modalContent);
document.body.appendChild(modal);

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

const fiestaDiv = document.createElement("div");
Object.assign(fiestaDiv.style, {
    marginTop: "0px",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    width: "100%"
});
// Código anterior...


// Sección de oración
const oracionContainer = document.createElement("div");
oracionContainer.className = "oracion-container";
Object.assign(oracionContainer.style, {
    backgroundColor: "#f9f9f9",
    padding: "40px",
    marginTop: "80px",
    color: "#555",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    overflow: "hidden"
});

const florArriba = document.createElement("img");
florArriba.src = "imagenes/FLORES.png";
florArriba.alt = "Flores Arriba Izquierda";
florArriba.className = "flor-arriba-izquierda";
Object.assign(florArriba.style, {
    position: "absolute",
    top: "10px",
    left: "10px",
    width: "100px",
    zIndex: "1"
});

const oracionTexto = document.createElement("div");
oracionTexto.className = "oracion-texto";
oracionTexto.style.width = "80%";
oracionTexto.style.marginBottom = "20px";
oracionTexto.style.zIndex = "2";
oracionTexto.innerHTML = `
    <p><strong>ORACIÓN DEL SANTO PADRE JUAN PABLO II</strong></p>
    <p><strong>EN LA FIESTA LITÚRGICA</strong></p>
    <p><strong>DE LA NATIVIDAD DE LA VIRGEN MARÍA</strong></p><br>
    <p>¡Oh Virgen naciente,<br>
    esperanza y aurora de salvación para todo el mundo, vuelve benigna tu mirada materna hacia todos nosotros, reunidos aquí para celebrar y proclamar tus glorias!</p>
    <p>¡Oh Virgen fiel,<br>
    que siempre estuviste dispuesta y fuiste solícita para acoger, conservar y meditar la Palabra de Dios, haz que también nosotros, en medio de las dramáticas vicisitudes de la historia, sepamos mantener siempre intacta nuestra fe cristiana, tesoro precioso que nos han transmitido nuestros padres!</p>
    <p>¡Oh Virgen potente,<br>
    que con tu pie aplastaste la cabeza de la serpiente tentadora, haz que cumplamos, día tras día, nuestras promesas bautismales, con las cuales hemos renunciado a Satanás, a sus obras y a sus seducciones, y que sepamos dar en el mundo un testimonio alegre de esperanza cristiana!</p>
`;

const imagenVirgen = document.createElement("img");
imagenVirgen.src = "imagenes/VIRGENC.jpg";
imagenVirgen.alt = "Virgen María";
imagenVirgen.className = "oracion-imagen";
Object.assign(imagenVirgen.style, {
    width: "150px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    zIndex: "2"
});

imagenVirgen.addEventListener("mouseenter", () => {
    imagenVirgen.style.transform = "scale(1.8)";
});
imagenVirgen.addEventListener("mouseleave", () => {
    imagenVirgen.style.transform = "scale(1)";
});

const florAbajo = document.createElement("img");
florAbajo.src = "imagenes/FLORES.png";
florAbajo.alt = "Flores Abajo Derecha";
florAbajo.className = "flor-abajo-derecha";
Object.assign(florAbajo.style, {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    width: "100px",
    zIndex: "1"
});

oracionContainer.appendChild(florArriba);
oracionContainer.appendChild(oracionTexto);
oracionContainer.appendChild(imagenVirgen);
oracionContainer.appendChild(florAbajo);

// Agrega al main content
mainContent.appendChild(oracionContainer);

// Sección del video de los 330 años
const seccionVideo = document.createElement('div');
Object.assign(seccionVideo.style, {
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  padding: '20px',
  marginBottom: '0', // Elimina espacio inferior que genera separación
});

// Título del video
const tituloVideo = document.createElement('h2');
tituloVideo.textContent = 'Celebración de los 330 Años';
tituloVideo.style.color = '#00563F';
tituloVideo.style.marginBottom = '20px'; // Opcional, controlado

// Contenedor del iframe
const contenedorIframe = document.createElement('div');
contenedorIframe.style.marginTop = '0'; // <-- Elimina el espacio entre el título y el video si es necesario

// Crear el iframe
const iframe = document.createElement('iframe');
Object.assign(iframe, {
  width: '560',
  height: '315',
  src: 'https://www.youtube.com/embed/grYw-AS2dTQ',
  title: 'Celebración de los 330 Años',
  frameBorder: '0',
  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
  allowFullscreen: true
});

// Armar la sección
contenedorIframe.appendChild(iframe);
seccionVideo.appendChild(tituloVideo);
seccionVideo.appendChild(contenedorIframe);

// Agregar al contenido principal
mainContent.appendChild(seccionVideo);




const fiestaContainer = document.createElement("div");
fiestaContainer.style.maxWidth = "1000px";
fiestaContainer.style.margin = "0 auto";
fiestaContainer.style.textAlign = "center";

const h2Fiesta = document.createElement("h2");
h2Fiesta.textContent = "Fiesta Patronal y Actividades";
h2Fiesta.style.color = "#00563F";

const pFiesta = document.createElement("p");
pFiesta.textContent = "Disfruta de la fiesta patronal con diversas actividades para toda la familia, incluyendo música, danza y juegos tradicionales. No te pierdas estos momentos especiales.";
pFiesta.style.fontSize = "16px";
pFiesta.style.color = "#333";

const imgRowFiesta = document.createElement("div");
Object.assign(imgRowFiesta.style, {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "40px",
    marginTop: "30px"
});

const fiestaImgs = ["programa.jpg", "kermes.jpg"];
fiestaImgs.forEach(src => {
    const img = document.createElement("img");
    img.src = `imagenes/${src}`;
    Object.assign(img.style, {
        width: "250px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)"
    });
    imgRowFiesta.appendChild(img);
});

fiestaContainer.appendChild(h2Fiesta);
fiestaContainer.appendChild(pFiesta);
fiestaContainer.appendChild(imgRowFiesta);
fiestaDiv.appendChild(fiestaContainer);
mainContent.appendChild(fiestaDiv);


// Sección: Restauración del Retablo
const restauracionDiv = document.createElement("div");
Object.assign(restauracionDiv.style, {
    backgroundColor: "#f9f9f9",
    padding: "40px",
    marginTop: "0px",
    textAlign: "center",
    color: "#333"
});

const h2Restauracion = document.createElement("h2");
h2Restauracion.textContent = "Restauración del Retablo";
h2Restauracion.style.fontSize = "24px";
h2Restauracion.style.marginBottom = "20px";
h2Restauracion.style.fontFamily = "'Great Vibes', cursive";

const pRestauracion = document.createElement("p");
pRestauracion.textContent = "Agradecemos sinceramente a nuestro Párroco el Pbro. Isaías Coronado Sifuentes por su iniciativa, dedicación y liderazgo en la remodelación de nuestro templo parroquial. Su visión y compromiso han sido fundamentales para darle un nuevo brillo y esplendor a nuestro espacio de oración. Que Dios le bendiga y le recompense por su amor y dedicación a nuestra comunidad. 🙏";

const imagenesRestauracion = document.createElement("div");
imagenesRestauracion.style.display = "flex";
imagenesRestauracion.style.justifyContent = "space-around";
imagenesRestauracion.style.marginTop = "20px";

["IM1.jpg", "IM2.jpg", "IM3.jpg", "IM4.jpg", "IM5.jpg"].forEach(nombre => {
    const img = document.createElement("img");
    img.src = `imagenes/${nombre}`;
    Object.assign(img.style, {
        width: "200px",
        height: "auto",
        borderRadius: "10px",
        margin: "0 10px",
        cursor: "pointer",
        transition: "transform 0.2s ease"
    });
    img.onmouseenter = () => img.style.transform = "scale(1.2)";
    img.onmouseleave = () => img.style.transform = "scale(1)";
    imagenesRestauracion.appendChild(img);
});

restauracionDiv.appendChild(h2Restauracion);
restauracionDiv.appendChild(pRestauracion);
restauracionDiv.appendChild(imagenesRestauracion);
mainContent.appendChild(restauracionDiv);




// Sección: Inauguración del Retablo
const retabloDiv = document.createElement("div");
Object.assign(retabloDiv.style, {
    marginTop: "0px",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    width: "100%"
});


const retabloContainer = document.createElement("div");
retabloContainer.style.maxWidth = "1000px";
retabloContainer.style.margin = "0 auto";
retabloContainer.style.textAlign = "center";

const h2Retablo = document.createElement("h2");
h2Retablo.textContent = "Inauguración de retablo";
h2Retablo.style.color = "#00563F";

const pRetablo = document.createElement("p");
pRetablo.textContent = "Celebración especial para la bendición e inauguración del nuevo retablo en honor a la Virgen, con participación de toda la comunidad parroquial.";
pRetablo.style.fontSize = "16px";
pRetablo.style.color = "#333";

const imgRowRetablo = document.createElement("div");
Object.assign(imgRowRetablo.style, {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px"
});

const retabloImgs = ["retablo.jpg", "virgenret.jpg", "virgeng.jpg"];
retabloImgs.forEach(src => {
    const img = document.createElement("img");
    img.src = `imagenes/${src}`;
    Object.assign(img.style, {
        width: "300px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)"
    });
    imgRowRetablo.appendChild(img);
});

retabloContainer.appendChild(h2Retablo);
retabloContainer.appendChild(pRetablo);
retabloContainer.appendChild(imgRowRetablo);
retabloDiv.appendChild(retabloContainer);
mainContent.appendChild(retabloDiv);
const seccionGrupos = document.createElement("div");
seccionGrupos.className = "cosas-parroquia";
Object.assign(seccionGrupos.style, {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    marginTop: "0px",
    textAlign: "center",
    color: "#333",
    borderRadius: "0px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px"
});

const titulo1 = document.createElement("h3");
titulo1.textContent = "GRUPOS PARROQUIALES";
titulo1.style.gridColumn = "1 / -1";

const titulo2 = document.createElement("h3");
titulo2.textContent = "Te presentamos algunas de las cosas que componen nuestra parroquia:";
titulo2.style.gridColumn = "1 / -1";

seccionGrupos.appendChild(titulo1);
seccionGrupos.appendChild(titulo2);

// Array de datos de grupos
const grupos = [
    {
        nombre: "Catequesis",
        img: "imagenes/CA.jpeg",
        responsable: "Melina Peralta",
        descripcion: "La catequesis está enfocada en la formación de niños y jóvenes en la fe cristiana..."
    },
    {
        nombre: "Adoración",
        img: "imagenes/ADOMEX.jpg",
        responsable: "Isidro Chable",
        descripcion: "Adoración al Santísimo Sacramento del altar, con devoción y sencillez..."
    },
    {
        nombre: "MFC",
        img: "imagenes/MFC.jpg",
        responsable: "Responsable de MFC",
        descripcion: "Grupo que trabaja con matrimonios para fortalecer su fe..."
    },
    {
        nombre: "Liturgia",
        img: "imagenes/LL.jpg",
        responsable: "Sarai Castañeda",
        descripcion: "Grupo que prepara la liturgia: salmistas, lectores, coro, ministros..."
    },
    {
        nombre: "Escuela de la Cruz",
        img: "imagenes/CRUZ.jpg",
        responsable: "Concepción Ricardez",
        descripcion: "Contempla al Resucitado en cada familia, buscando una fe más profunda..."
    },
    {
        nombre: "Renovación",
        img: "imagenes/CARISMATICA.jpg",
        responsable: "Landy",
        descripcion: "Grupo de alabanza y adoración al Padre, mediante cantos y oración..."
    },
    {
        nombre: "Legión de María",
        img: "imagenes/LEG.jpg",
        responsable: "Beatriz Madrigal",
        descripcion: "Contemplación mariana: rezos, visitas, adoraciones y más..."
    },
    {
        nombre: "Jornada",
        img: "imagenes/JO.jpeg",
        responsable: "Responsable de Jornada",
        descripcion: "Renueva la fe del creyente y acerca a los alejados mediante encuentros..."
    }
];

// Generar cada grupo
grupos.forEach(grupo => {
    const contenedor = document.createElement("div");
    contenedor.className = "grupo-con-borde";
    Object.assign(contenedor.style, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        fontFamily: "Arial, sans-serif",
        width: "300px"
    });

    const nombre = document.createElement("p");
    nombre.innerHTML = `<strong>${grupo.nombre}:</strong>`;

    const imagenWrap = document.createElement("div");
    imagenWrap.className = "imagen-con-efecto";
    imagenWrap.style.overflow = "hidden";
    imagenWrap.style.borderRadius = "10px";
    imagenWrap.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

    const img = document.createElement("img");
    img.src = grupo.img;
    img.alt = grupo.nombre;
    img.style.width = "100%";
    img.style.maxWidth = "200px";
    img.style.height = "auto";
    img.style.display = "block";
    img.style.transition = "transform 0.3s ease";
    imagenWrap.appendChild(img);

    const responsable = document.createElement("p");
    responsable.className = "responsable";
    responsable.textContent = `Responsable ${grupo.responsable}`;
    responsable.style.fontSize = "14px";
    responsable.style.color = "#555";

    const descripcion = document.createElement("div");
    descripcion.className = "texto-aparece";
    descripcion.textContent = grupo.descripcion;
    Object.assign(descripcion.style, {
        maxHeight: "0",
        overflow: "hidden",
        opacity: "0",
        transform: "translateY(-10px)",
        transition: "all 0.4s ease",
        backgroundColor: "#f3f3f3",
        padding: "0 10px",
        fontSize: "14px"
    });

    // Hover effects
    contenedor.addEventListener("mouseenter", () => {
        imagenWrap.style.transform = "translateY(-10px)";
        imagenWrap.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.3)";
        descripcion.style.maxHeight = "100px";
        descripcion.style.opacity = "1";
        descripcion.style.transform = "translateY(0)";
        descripcion.style.padding = "10px";
    });

    contenedor.addEventListener("mouseleave", () => {
        imagenWrap.style.transform = "translateY(0)";
        imagenWrap.style.boxShadow = "none";
        descripcion.style.maxHeight = "0";
        descripcion.style.opacity = "0";
        descripcion.style.transform = "translateY(-10px)";
        descripcion.style.padding = "0 10px";
    });

    contenedor.appendChild(nombre);
    contenedor.appendChild(imagenWrap);
    contenedor.appendChild(responsable);
    contenedor.appendChild(descripcion);

    seccionGrupos.appendChild(contenedor);
});

// Agregar al mainContent o donde lo necesites
mainContent.appendChild(seccionGrupos);


// Sección: Mapa incrustado
const mapa = document.createElement("iframe");
mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.708198369406!2d-93.17686862402464!3d18.06586928262805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ee818172ccfaad%3A0x2c120d12dda85ae0!2sParroquia%20La%20Natividad%20de%20Maria!5e0!3m2!1ses!2smx!4v1712777402325!5m2!1ses!2smx";
mapa.width = "100%";
mapa.height = "300";
mapa.style.border = "0";
mapa.allowFullscreen = true;
mapa.loading = "lazy";
mapa.referrerPolicy = "no-referrer-when-downgrade";
mainContent.appendChild(mapa);

function aplicarEstilosResponsive() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Sidebar en móviles
        sidebar.style.position = "relative";
        sidebar.style.width = "100%";
        sidebar.style.height = "auto";
        sidebar.style.flexDirection = "column";

        // Main content en móviles
        mainContent.style.marginLeft = "0";
        mainContent.style.width = "100%";

        // Header adaptado
        header.style.left = "0";
        header.style.width = "100%";
        header.style.position = "static";
    } else {
        // Estilo original en escritorio
        sidebar.style.position = "fixed";
        sidebar.style.width = "250px";
        sidebar.style.height = "100%";

        mainContent.style.marginLeft = "250px";
        mainContent.style.width = "calc(100% - 250px)";

        header.style.position = "fixed";
        header.style.left = "250px";
        header.style.width = "calc(100% - 250px)";
    }
}

// Aplicar al cargar y al redimensionar
aplicarEstilosResponsive();
window.addEventListener("resize", aplicarEstilosResponsive);



