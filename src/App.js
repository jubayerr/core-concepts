import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const casts = ['Jonas', 'Bartoze', 'Magnus', 'Martha', 'Mikkel']
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$99.99' },
    { name: 'PDF reader', price: '$4.99' },
    { name: 'Adobe XD', price: '$64.99' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {casts.map(casts => <li>{casts}</li>)}
          {products.map(product => <li>{product.name}</li>)}
        </ul>
        {products.map(product => <Product product={product}></Product>)}
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>

          <Person name="Jonas Kahnwald"></Person>
          <Person name="Bartoze Tiedemenn"></Person>
          <Person name="Martha Neilsen"></Person>
        </div>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count + 1)}>Add to cart</button>
      <button onMouseMove={() => setCount(count - 1)}>Remove from cart</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    color: 'black',
    border: '2px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    width: '200px',
    float: 'left'
  }
  const { name, price } = props.product
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    width: '300px',
    border: '2px solid grey',
    margin: '10px',
  }
  return (
    <div style={personStyle}>
      <h2>{props.name}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quibusdam dolorem ratione, placeat dolor cumque consequuntur nulla beatae quos similique.</p>
    </div>
  )
}

export default App;
