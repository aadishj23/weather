
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from './context/Weather';

function App() {

  const { fetchData } = useWeather();
  console.log(fetchData());

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input/>
      <Button value="Search"/>
      <Card/>
      <Button onClick={fetchData} value="Refresh"/>
    </div>
  );
}

export default App;
