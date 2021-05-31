import React, { useState } from 'react'
import firebase from '../components/firebase'

const Update = (props) => {

    const dataDiv = {
        marginTop: '15%',
    }

    const [Modifie, setUpdate] = useState(false);
    const [name, setName] = useState(props.name);
    const [secondName, setsecondName] = useState(props.secondName);
    const [email, setemail] = useState(props.email);

    const onEdit = () => {
        setUpdate(true)
    }

    const onUpdate = () => {
        const db = firebase.firestore()
        db.collection('crud').doc(props.id).set({ ...props, name, secondName, email });
        setUpdate(false)
    }

    return (
        <>
            {
                Modifie ?
                    <button className='btn btn-info' id={'update' + props.id} onClick={onUpdate}>Update</button>
                    :
                    <button className='btn btn-info' id={'Modifie' + props.id} onClick={onEdit}><span class="glyphicon glyphicon-edit"></span></button>
            }

            <div style={dataDiv}>
                {
                    Modifie ?
                        <div classname='edit'>
                            <input value={name} className="form-control" onChange={e => { setName(e.target.value); }} />
                            <input value={secondName} className="form-control" onChange={e => { setsecondName(e.target.value); }} />
                            <input value={email} className="form-control" onChange={e => { setemail(e.target.value); }} />
                        </div>
                        :
                        <div className='show' >
                            <p>{props.name}</p>
                            <p>{props.secondName}</p>
                            <p>{props.email}</p>
                        </div>
                }
            </div>
        </>
    )

}

export default Update;