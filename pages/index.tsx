import SearchCities from "@/components/SearchCities";
import React from "react";
import styles from "../styles/Home.module.css";
import { Layout } from "antd";
import CurrentWeather from "@/components/CurrentWeather";
import Forecast from "@/components/Forecast";
import Head from "next/head";
const Home: React.FC = () => {
  return (
    <Layout className={styles.layout}>
      <Head>
        <title>Search for Weather</title>
      </Head>
      <div className={styles.bgImage}></div>
      <div className={styles.container}>
        <SearchCities />
        <CurrentWeather />
        <Forecast />
      </div>
    </Layout>
  );
};
export default Home;
