import SearchCities from "@/components/SearchCities";
import React from "react";
import styles from "../styles/Home.module.css";
import { Layout } from "antd";
import CurrentWeather from "@/components/CurrentWeather";
const Home: React.FC = () => {
  return (
    <Layout className={styles.layout}>
      <div className={styles.container}>
        <SearchCities />
        <CurrentWeather />
      </div>
    </Layout>
  );
};
export default Home;
