import SideBar from "@/components/SideBar";
import { AppContainer, Content } from "../../../styles/jss/mainStyles";

export default function RootLayout({ children }) {
  return (
    <AppContainer>
      <SideBar />
      <Content>{children}</Content>
    </AppContainer>
  );
}
