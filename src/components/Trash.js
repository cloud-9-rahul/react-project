import React from 'react';
import firebase from 'firebase';

const Trash = (props) => {

    const buttonStyle = {
        marginLeft: '10px',
        marginRight: '10px'
    }

    const handleTrash = () => {
        const db = firebase.firestore()
        db.collection('crud').doc(props.Trashid).delete();
    }

    return (
        <>
            <button className='btn btn-danger' style={buttonStyle} onClick={handleTrash}><span class="glyphicon glyphicon-trash"></span></button>
        </>
    )

}

export default Trash;