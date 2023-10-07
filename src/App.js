import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import CryptoCurrencies from "./components/Cryptocurrencies.jsx";
import Exchange from "./components/Exchange.jsx";
import HomePage from "./components/HomePage.jsx";
import CryptoDetails from "./components/CryptoDetails.jsx";
import News from "./components/News.jsx";

export default function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/exchanges" element={<Exchange />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<CryptoCurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2021
            <Link to="/">Cryptoverse Inc.</Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchange">Exchange</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}
