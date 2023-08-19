import {Routes,Route} from 'react-router-dom'
import Home from "./Screens/Home"
import Contact from "./Screens/Contact"
import Blog from "./Screens/Blog";
import Account from "./Screens/Account"
import Pricing from "./Screens/Pricing"
import Dashboard from "./Screens/Dashboard"
import Profile from "./Screens/Profile"
import Products from "./Screens/Products"
import Logout from "./Screens/Logout"
import NoPage from './Screens/NoPage';




function App() {
  return (
    <>
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/account" element={<Account/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="*" element={<NoPage/>} />
    </Routes>
    
   
    </>
  );
}

export default App;
