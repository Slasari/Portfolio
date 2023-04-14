export default function Proyectos (){
    const proyectos = [{titulo:"pokemon", imagen:"not found", tecnologias:["javascript", "react", "sequelize"], github:"www.hola.com", web:"www.chau.com", detalle:"aklsdjaslkdjsalkdjasdkljadklajdaskldjaslkdaj"},{titulo:"pokemon", imagen:"not found", tecnologias:["javascript", "react", "sequelize"], github:"www.hola.com", web:"www.chau.com", detalle:"aklsdjaslkdjsalkdjasdkljadklajdaskldjaslkdaj"}]
    return (<div>
        <span>Proyectos</span>
        {proyectos.map(e => {return (<Card 
        titulo={e.titulo}
        imagen={e.imagen}
        tecnologias={e.tecnologias}
        github={e.github}
        web={e.web}
        detalle={e.detalle}
        ></Card>)})}
    </div>)
}

function Card ({titulo, imagen, id, tecnologias, github, web, detalle}){
    return (<div>
        <h1>{titulo}</h1>
        <img src={imagen} alt="not found"></img>
        <h3>{tecnologias.map(e => {return (<span>{e}</span>)})}</h3>
        <button>Github</button>
        <button>Detalle</button>
        <button>Sitio Web</button>
    </div>)
}