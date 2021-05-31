import React, { useState, useEffect } from 'react';
import firebase from './firebase';

const Swap = (props) => {

    const [Swap, setSwap] = useState(false);

    const handleSwap = () => {
        setSwap(false)
        if (localStorage.getItem('count') === 0) {
            localStorage.setItem('count', 1)
            const local = {
                id: props.id,
                name: props.name,
                secondName: props.secondName,
                email: props.email,
            }

            localStorage.setItem('data', JSON.stringify(local))

            if (localStorage.getItem('count') === null) {
                localStorage.setItem('count', 0)
            }

        } else if (localStorage.getItem('count') === 1) {
            localStorage.setItem('count', 2)

            const SwapLocal = {
                Swapid: props.id,
                Swapname: props.name,
                SwapsecondName: props.secondName,
                Swapemail: props.email,
            }
            localStorage.setItem('Swapdata', JSON.stringify(SwapLocal))

            const retrivedData = JSON.parse(localStorage.getItem('data'));

            var Firstuser = retrivedData.id;
            var Firstusername = retrivedData.name;
            var lastusername = retrivedData.secondName;
            var emailIDone = retrivedData.email;

            const SwapretrivedData = JSON.parse(localStorage.getItem('Swapdata'));

            var Seconduser = SwapretrivedData.Swapid;
            var secondusername = SwapretrivedData.Swapname;
            var lastusername2 = SwapretrivedData.SwapsecondName;
            var emailIDtwo = SwapretrivedData.Swapemail;

            const db = firebase.firestore()

            
            db.collection('crud').doc(Firstuser).set({ ...props, 'name': secondusername, 'secondName': lastusername2, 'email': emailIDtwo });
            db.collection('crud').doc(Seconduser).set({ ...props, 'name': Firstusername, 'secondName': lastusername, 'email': emailIDone });
            localStorage.clear();

            alert('Swap successfully')

            
        }
    }


    return (
        <>
                {
                    Swap ?
                        <button className='btn btn-success'>Swap</button>
                        :
                        <button className='btn btn-warning' onClick={handleSwap}><span class="glyphicon glyphicon-refresh"></span></button>
                }
        </>
    )
}

export default Swap;