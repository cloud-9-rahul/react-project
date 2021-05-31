import React, { useState } from 'react';
import Create from "../components/Create"
import Show from '../components/Show'

const Dataadder = () => {

    const container = {
        backgroundColor: '#cad5e3',
        width: '100%',
        borderRadius: '5px',
        marginTop: '5%',
        padding: '5%'
    }

    const label = {
        float: 'left',
        marginLeft: '2%',
        color: 'black',
        fontSize: '20px',
        marginRight: '8px'
    }

    const textBox = {
        width: '100%',
    }

    const [firstName, setfirstName] = useState();
    const [lastName, setlastName] = useState();
    const [email, setEmail] = useState();

    return (
        <>
            <div className="container" style={container}>
                <div className="row">
                    <div className="col">
                        <label style={label}>First Name</label>
                        <input class="Dataadder-control" style={textBox} onChange={(e) => setfirstName(e.target.value)} />
                    </div>
                    <div className="col">
                        <label style={label}>Last Name</label>
                        <input class="Dataadder-control" style={textBox} onChange={(e) => setlastName(e.target.value)} />
                    </div>
                    <div className="col">
                        <label style={label}>Email</label>
                        <input class="Dataadder-control" type='email' style={textBox} onChange={(e) => setEmail(e.target.value)}  />
                    </div>
                    <div className="col">
                        <Create firstname={firstName} lastname={lastName} email={email} />
                    </div>
                </div>
            </div>
            <div className="row">
                    <Show></Show>
            </div>
        </>
    );
}

export default Dataadder;