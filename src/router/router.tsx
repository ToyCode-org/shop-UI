import { Route, Routes } from "react-router-dom";
import { Main } from "../pages/main";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
};
