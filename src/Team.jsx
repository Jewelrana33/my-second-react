import { useState } from "react"

export default function Team(){

    const [team, setTeam]= useState(11);

    const handleAddPlayer = ()=>{
        const updateTeam = team + 1;
        setTeam(updateTeam);
    }
    const handleDropPlayer = ()=>{
        const updateTeam = team - 1;
        setTeam(updateTeam);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }


    return (
        <div style={teamStyle}>
            <h3>Players: {team} </h3>
            <button onClick={handleDropPlayer}>Drop Player</button>
            <button onClick={handleAddPlayer}>Add Player</button>
            
        </div>
    )
}