import './App.css';
import MovieList from './components/movie/MovieList';
import MovieDetails from './components/movie/MovieDetails';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movie_details/:movie_id">
          <MovieDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
