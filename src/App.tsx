import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./common/components/ThemeProvider";
import Navbar from "./Navbar";
import CustomFooter from "./CustomFooter";
import CustomParticle from "./CustomParticle";
import PerfectScrollBar from "react-perfect-scrollbar";
import { Artworks } from "./pages/Artworks";

export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <CustomParticle />
        <div>
          <Route
            render={({ location }) => (
              <PerfectScrollBar>
                <Switch location={location}>
                  <Route exact path="/" render={() => <Home />} />
                  <Route exact path="/artworks" render={() => <Artworks />} />
                </Switch>
              </PerfectScrollBar>
            )}
          />
        </div>
      </div>
      <CustomFooter />
    </ThemeProvider>
  );
}
