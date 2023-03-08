import SearchCities from "@/components/SearchCities";
import React from "react";
import styles from "../styles/Home.module.css";
import { Layout } from "antd";
import CurrentWheather from "@/components/CurrentWheather";
const Home: React.FC = () => {
  return (
    <Layout className={styles.layout}>
      <div className={styles.container}>
        <SearchCities />
        <CurrentWheather />
      </div>
    </Layout>
  );
};
export default Home;
