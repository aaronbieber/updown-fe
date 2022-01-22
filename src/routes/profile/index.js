import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
import style from './style.css';

const Profile = ({ id }) => {
  const [time, setTime] = useState(Date.now());
  const [count, setCount] = useState(10);

  useEffect(() => {
    let timer = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div class={style.profile}>
      <h1>ID: {id}</h1>
    </div>
  );
}

export default Profile;
