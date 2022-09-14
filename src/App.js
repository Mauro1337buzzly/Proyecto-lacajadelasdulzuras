import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Navbar>
      </Navbar>
      <ItemListContainer>
      </ItemListContainer>
      <Counter init={0} stock={10}>
      </Counter>

    </div>
  );
}

export default App;
