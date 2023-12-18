import BarChart from './components/BarChart';

function App() {

  const values = [
    {
      label: "Jan",
      value: 100
    },
    {
      label: "Feb",
      value: 0
    },
    {
      label: "Mar",
      value: 5000
    },
    {
      label: "Apr",
      value: 500
    },
    {
      label: "May",
      value: 2000
    },
    {
      label: "Jun",
      value: 600
    },
  ]

  return (
    <>
      <BarChart values={values} title="Recent 6 months performance" />
    </>
  );
}

export default App;
