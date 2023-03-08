import "@/styles/globals.css";
import "antd/dist/reset.css";
import type { AppProps } from "next/app";
import store from "@/stores";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
