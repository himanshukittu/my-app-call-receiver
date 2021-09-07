import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Jitsi from "./Jitsi";
// import { /*getToken,*/ onDBUpdateListener, onMessageListener } from './firebase.js';
import React, { useEffect, useState } from "react";
import { firebase } from './firebaseConfiguration';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const db = firebase.database();

function App() {
  // const [isTokenFound, setTokenFound] = useState(false);
  const [list, setList] = useState([] as any);
  const [counter, setCounter] = useState(0);
  // getToken(setTokenFound);

  // onMessageListener().then((payload: any) => {
  //   // setShow(true);
  //   // setNotification({title: payload.notification.title, body: payload.notification.body})
  //   console.log(payload);
  //   const updatedList: any[] = [...list];
  //   const link = payload.notification.body.replace('Join meet at ', '');
  //   updatedList.push(link);
  //   setList([...updatedList]);
  // }).catch((err: any) => console.log('failed: ', err));

  // const list = JSON.parse(localStorage.getItem('notification') || '');

  // onDBUpdateListener().then((res: any) => {});
  const handleClick = (element: any, index: any): any => {
    // list.splice(index, 1);
    // setList([...list]);
    // window.open(element, '_blank');
    const updatedData = {
      ...element,
      from: 'payer002',
      to: element.from,
      isPayerJoined: true,
    }
    const newKey = db.ref('/notifications').push().key;
    const updates: any = {};
    updates['/notifications/' + element.meetingId] = updatedData;
    db.ref().update(updates);
    window.open(`https://meet.jit.si/${element.meetingId}`, '_blank');
  };

  useEffect(() => {
    const ref = db.ref(`/notifications`).orderByChild('to').equalTo('payer002');
    ref.on('value', (snapshot: any) => {
      setCounter(counter + 1);
      console.log(document.visibilityState);
      const newNotifications = snapshot.val();
      console.log(newNotifications);

      if (Notification.permission !== 'granted') {
        Notification.requestPermission();
      }
      else if (counter > 0) {
        if (document.visibilityState == 'hidden') {
          new Notification('Connection request!!', {
            icon: 'https://mpng.subpng.com/20180625/lbz/kisspng-robotics-computer-icons-robotic-process-automation-robat-5b30f2f61ffb42.955170871529934582131.jpg',
            body: 'Hey there! A provider wants to connect with you.',
          });
        } else {
          toast('A connection request from provider. !!');
        }

      }

      // Update List
      const updatedList = [];
      for (let x in newNotifications) {
        console.log(x);
        updatedList.push(newNotifications[x]);
      };
      setList([...updatedList]);
    });
    return () => ref.off();
  }, [])

  return (
    <React.Fragment>
      <h2 style={{ textAlign: 'center' }}>Payer portal</h2>
      <h3 style={{ textAlign: 'center' }}><u>List of connection requests</u></h3>
      {list.map((element: any, index: any) => (
        <div key={index}
          style={{
            textAlign: 'center',
            height: '40px',
            background: '#6aa7a7',
            margin: '23px 130px',
            paddingTop: '15px',
          }}>
          {element.name} from hospital {element.from} wants you to join at {element.meetingId}&nbsp;&nbsp;
          <button
            onClick={(): any => handleClick(element, index)}
          >Join</button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
         </div>
      ))
      }
    </React.Fragment >
  );
}

export default App;
