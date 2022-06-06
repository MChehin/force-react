import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../Cart/Cart";
import MotosListContainer from "../MotosListContainer/MotosListContainer";
import NavBar from "../NavBar/NavBar";
import MotoDetail from "../ItemDetailContainer/MotoDetailContainer"
import Modelos from "../shop/Modelos"; 
import NotFound404 from "../../pages/NotFound404";
import Footer from "../footer/footer";
import About from "../../pages/aboutus";
import SaveItem from "../CartItem/SaveOrder";
import Home from "../../pages/home";
import Formulario from "../../pages/form";




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
          <Route path="/modelos" element={<Modelos />} />
          <Route path="/Cart" element={<Cart />}/>
          <Route path="/form" element={<Formulario />}/>
          <Route path="/CartItem/SaveOrder" element={<SaveItem />}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRouter;
