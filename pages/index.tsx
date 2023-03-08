import SearchCities from "@/components/SearchCities";
import React from "react";
import styles from "../styles/Home.module.css";
import { Layout } from "antd";
const { Content } = Layout;
const Home: React.FC = () => {
  return (
    <Layout className={styles.layout}>
      <Content className={styles.container}>
        <SearchCities />
      </Content>
    </Layout>
  );
};
export default Home;
