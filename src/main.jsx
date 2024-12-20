import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";

import { Provider } from 'react-redux'
// import globalStore from './redux/store'
import store from './../src/store'

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Provider store={store()}>
    <SidebarProvider>
      <App />
    </SidebarProvider>
    </Provider>
  </ThemeProvider>
);
