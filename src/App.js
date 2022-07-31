import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './contents/Todo';
import { store } from './state';
import { Provider } from 'react-redux';
import TodoDetails from './contents/TodoDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<Todo />} />
            <Route path='/Todo/:userDetails' element={<TodoDetails />} />
            <Route path='*' element={<Todo />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
