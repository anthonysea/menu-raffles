import React, { useEffect } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../components/header/header.component";
import Layout from "../components/layout/layout.component";
import LoginForm from "../components/login-form/login-form.component";

import { useAuth } from "../hooks/use-auth";

const Login = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth.user) {
      router.push("/");
    }
  }, [auth.user]);

  return auth.user ? (
    <Layout>
      <Header />
      <p>Redirecting...</p>
    </Layout>
  ) : (
    <Layout>
      <Header />
      <h1>Login</h1>
      <LoginForm />
    </Layout>
  );
};

export default Login;
