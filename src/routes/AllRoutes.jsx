import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import WithoutFooterLayout from "./WithoutFooterLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Login from "../components/Login";
import Registration from "../components/Registration";
import AuthProvider from "../context/AuthContext";
import SingleProduct from "../pages/SingleProduct";

const AllRoutes = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          ></Route>
          <Route
            path="/product"
            element={
              <Layout>
                <Product />
              </Layout>
            }
          ></Route>
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <WithoutFooterLayout>
                <Login />
              </WithoutFooterLayout>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <WithoutFooterLayout>
                <Registration />
              </WithoutFooterLayout>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <WithoutFooterLayout>
                <Contact />
              </WithoutFooterLayout>
            }
          ></Route>
          <Route path="/product/:id"
            element={
              <WithoutFooterLayout>
                <SingleProduct />
              </WithoutFooterLayout>
            }></Route>
        </Routes>
      </AuthProvider>
    </>
  );
};

export default AllRoutes;

