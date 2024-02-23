export default function Friend({friend}){
    const {name, email}= friend;
    const friendStyle= {
        border: '2px solid purple',
        padding: '15px',
        margin: '10px',
        borderRadius: '15px'
    }
    
    return (
        <div style={friendStyle}>
            <h3>Name: {name} </h3>
            <p>Email: {email} </p>
        </div>
    )
}