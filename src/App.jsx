import Card from "./components/Card";

function App() {

  return (
    <>
      <h1>Movie App</h1>
      <div className='card__container'>
        <Card title="Captain Amreica: Winter Soldier" />
        <Card title="Captain Amreica: Civil War" />
        <Card title="Captain Amreica: Brave New World" />
      </div>
    </>
  )
}

export default App;
