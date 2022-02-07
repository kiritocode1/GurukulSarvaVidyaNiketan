import DefaultHOC from './HOC/HomeHOC';
import HomeLayout from './Layout/Home.Layout';
import {Navbar,NavbarComponent} from './NavBar/Navbar';
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
      <Navbar>
        <NavbarComponent icon="sad" >hii</NavbarComponent>
        <NavbarComponent icon="🐱"/>
        <NavbarComponent icon="m"/>
        <NavbarComponent icon="a"/>
      </Navbar>
      <DefaultHOC path="/nice" exact component={Temp} />
      <DefaultHOC path="/path" exact  component={HomeLayout}/>
    </div>
  );
}

export default App;
