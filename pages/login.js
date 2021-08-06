import React from "react";

import Head from "next/head";
import Header from "../components/header/header.component";
import Layout from "../components/layout/layout.component";
import LoginForm from "../components/login-form/login-form.component";

const Login = () => {
  return (
    <Layout>
      <Header />
      <h1>Login</h1>
      <LoginForm />
    </Layout>
  );
};

export default Login;
