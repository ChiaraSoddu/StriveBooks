
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LatestRelease from './components/LatestRelease';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <LatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
