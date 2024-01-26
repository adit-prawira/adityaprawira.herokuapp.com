import PerfectScrollBar from "react-perfect-scrollbar";
import Page from "../../common/components/Page";
import { ModalProvider } from "../../common/components/Modal";
import { Images } from "./components/Images";

export function Artworks(): JSX.Element {
  return (
    <Page>
      <ModalProvider>
        <PerfectScrollBar>
          <Images />
        </PerfectScrollBar>
      </ModalProvider>
    </Page>
  );
}
