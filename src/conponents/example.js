
import { useSelector, useDispatch } from 'react-redux';
import { decreaseNumber, increaseNumber } from '../features/numberSlice';

function Porfile({ user }) {

    return (
        <>
            <h1>{user.name}</h1>
            <br />
            <img
                className='avatar'
                src={user.imageUrl}
                alt={'Photo of' + user.name}
                style={{
                    width: user.imagesize,
                    height: user.imagesize,
                    backgroundColor: 'black'
                }}
            />
        </>
    );
}


function ButtonExample() {

    // const [count, setCount] = useState(0);

    const number = useSelector(state => state.number.value);    
    const dispatch = useDispatch();

    return (
    <>
      <button
        className="bg-blue-500 haver:bg-blue-700 rounded 
                   text-blue-50 font-bold py-2 px-4"
        onClick={() => dispatch(increaseNumber())}>Sumar</button>
      <button
        className="bg-blue-500 haver:bg-blue-700 rounded 
                   text-blue-50 font-bold py-2 px-4"
        onClick={() => dispatch(decreaseNumber())}>Restar</button>
      <p> El contador va en: {number}</p>
    </>
  );
}



export default function Example() {
    const saludar = () => {
        alert('Hola mundo');
    }

    const mostrartexto = (e) => {
        console.log(e.target.value);
    }

    const keyUp = (e) => {
        console.log('solo una tecla');
    }

    

    const users = [{
        name: 'Elvis Presley',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVATslgVY87n3lp3XHUlxF8Edc6jubIVkmbg&usqp=CAU',
        imageSize: 0,
    },
    {
        name: 'Brad Pitt',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVATslgVY87n3lp3XHUlxF8Edc6jubIVkmbg&usqp=CAU',
        imageSize: 0,
    },
    {
        name: 'Madonna',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVATslgVY87n3lp3XHUlxF8Edc6jubIVkmbg&usqp=CAU',
        imageSize: 0,
    }];

    return (
        <>
            {users.map(user => (
                <Porfile user={user} />
            ))}
            <br />
            <button onClick={() => saludar()}>Enviar</button>
            <input type="text" onChange={mostrartexto} onKeyUp={keyUp} />
            <br />
            <ButtonExample />
            <ButtonExample />
            <ButtonExample />
        </>
    )
}