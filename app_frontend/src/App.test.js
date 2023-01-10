import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";

const queryClient = new QueryClient();

test("renders page login", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
  const linkElement = screen.getByText(/FrontEnd Task/i);
  expect(linkElement).toBeInTheDocument();
});

test("check input form login", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
  const inputElement = screen.getByTestId("email");
  const inputElement2 = screen.getByTestId("password");
  expect(inputElement).toBeInTheDocument();
  expect(inputElement2).toBeInTheDocument();
});
