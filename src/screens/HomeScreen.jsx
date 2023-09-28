import './css/HomeScreen.css';

export default function HomeScreen() {
  return (
    <main>
      <div className="container d-flex justify-content-center flex-column py-3">
        <h1 className='pb-3'>Home Screen</h1>
        <img
          src="https://picsum.photos/1100/567"
          alt="random-img"
        />
      </div>
    </main>
  );
}
