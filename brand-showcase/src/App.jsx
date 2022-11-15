import { Routes, Route } from "react-router-dom";
import ProtectRouter from "./components/ProtectRouter";
import AdminProtectRouter from "./components/AdminProtectRouter";
import HomePage from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import ProductsList from "./pages/ProductsList";
import AddProductPage from "./pages/AddProductPage";
import UserHomePage from "./pages/UserHomePage";
import UserProductListPage from "./pages/UserProductListPage";
import UserDetailPage from "./pages/UserDetailPage";
import UserFavoritePage from "./pages/UserFavoritePage";
import UserShoppingBagPage from "./pages/UserShoppingBagPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserHomePage />} />
        <Route path="/products" element={<UserProductListPage />} />
        <Route element={<ProtectRouter />}>
          <Route path="*" element={<h1>Not Found</h1>} />
          {/* admin Router */}
          <Route element={<AdminProtectRouter />}>
            <Route path="/admin" element={<HomePage />} />
            <Route path="/admin/products" element={<ProductsList />} />
            <Route path="/admin/add" element={<AddProductPage />} />
            <Route path="/admin/edit/:id" element={<AddProductPage />} />
          </Route>

          {/* User Router */}

          <Route path="/favorite" element={<UserFavoritePage />} />
          <Route path="/shopping_bag" element={<UserShoppingBagPage />} />

          <Route path="/products/detail/:id" element={<UserDetailPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
