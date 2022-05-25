import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../Cart/Cart";
import MotosListContainer from "../MotosListContainer/MotosListContainer";
import Saludo from "../Saludo";
import NavBar from "../NavBar/NavBar";
import MotoDetail from "../ItemDetailContainer/MotoDetailContainer"
import Modelos from "../shop/Modelos"; 
import NotFound404 from "../../pages/NotFound404";
import Footer from "../footer/footer";
import About from "../../pages/aboutus";
import MotoKawasaki from "../shop/MotoKawasaki";
import SaveItem from "../CartItem/SaveItem";
import Home from "../../pages/home";




const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/aboutus/*" element={<About/>}/>
          <Route path="/MotosListContainer" element={<MotosListContainer />} />
          <Route path="/MotosListContainer/:categoryId" element={<MotosListContainer />} />
          <Route path="/motoData/:motosId" element={<MotoDetail />} />
          <Route path="*" element={<NotFound404 />}/>
          <Route path="/modelo" element={<MotoKawasaki />} />
          <Route path="/modelos" element={<Modelos />} />
          <Route path="/Cart" element={<Cart />}/>
          <Route path="/Cart/SalvarItem" element={<SaveItem />}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRouter;
