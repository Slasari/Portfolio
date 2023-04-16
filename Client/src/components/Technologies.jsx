import reactIcon from "../assets/technologies/react_logo.png"

export default function Technologies (){
    const front = [{name:"React", imagen:<img src={reactIcon} alt="not found"></img>},{name:"Redux",}, {name: "Booststrap",}, {name: "HTML", }, {name: "CSS", }]

    const back = []

    return (<div>
        <h1>Front End</h1>
        {front.map(e => {return (<div>
            {e.imagen}
            <span>{e.name}</span>
            </div>)})}
        <h1>Back End</h1>
        {back.map(e => {return (<div>
            {e.imagen}
            <span>{e.name}</span>
            </div>)})}
    </div>)
}