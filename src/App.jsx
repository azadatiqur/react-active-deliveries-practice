import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import DeliveriesPage from "./pages/DeliveriesPage";
import DeliveryPage from "./pages/DeliveryPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<DeliveriesPage />} />
      <Route path="/delivery/:deliveryIndex" element={<DeliveryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
