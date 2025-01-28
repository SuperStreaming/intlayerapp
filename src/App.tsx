function App() {
  const envs = Object.entries(import.meta.env);

  return (
    <>
      {envs.map(([key, value]) => (
        <div key={key}>
          <strong>{key}</strong>: {value}
        </div>
      ))}
    </>
  );
}

export default App;
