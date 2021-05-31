import React, { useState, useEffect } from 'react'
import firebase from './firebase'

const Create = (props) => {

    if(localStorage.getItem('Insert') == 1){
        localStorage.setItem('Insert', 0)
    }

    const button = {
        backgroundColor: '#4a32a8',
        borderColor: '#4a32a8',
        marginTop: '7%',
        float: 'left',
        width: '30%',
        padding: '9px',
        color: 'white',
        borderRadius: '1%'
    }

    const [list, setlist] = useState([]);

    const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection("crud").get();
        setlist(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        fetchData();
    }, [list]);

    const handleCreate = () => {
        if(localStorage.getItem('totalInput') == 20){
            alert('Limit Reached');
        }
        else{
            list.map(lists => {
                if(lists.email == props.email){
                    alert('Email already exist')
                    localStorage.setItem('Insert', 1)
                }
            })          
        }
        
        if(localStorage.getItem('Insert') == null || localStorage.getItem('Insert') == 0){
                const dbs = firebase.firestore();
                dbs.collection("crud").add({ name: props.firstname, secondName: props.lastname, email: props.email });
                alert('New record has been inserted'); 
        }
    }

    return (
        <>
            {
                <button style={button} onClick={handleCreate}>Create</button>
            }
            
        </>
    );
}

export default Create;