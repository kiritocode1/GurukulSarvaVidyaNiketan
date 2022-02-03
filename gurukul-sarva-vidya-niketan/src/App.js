import DefaultHOC from './HOC/HomeHOC';
import HomeLayout from './Layout/Home.Layout';
import './App.css';
const Temp = () => {
  return (
    <>
  <h2>ggnori</h2>
  
  
  
  
  </>);
};
// const Temp2 = () => {
//   <>
//     <h1>
//       sharingnan
//   </h1>
//   </>
// };


function App() {
  return (
    <div className="App">
      hii
      <DefaultHOC path="/nice" exact component={Temp} />
      <DefaultHOC path="/path" exact  component={HomeLayout}/>
    </div>
  );
}

export default App;
