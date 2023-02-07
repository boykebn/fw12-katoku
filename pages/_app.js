import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
    </>
  )
}


