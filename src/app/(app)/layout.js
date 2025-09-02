import SideBar from "@/components/SideBar";
import { AppContainer, DashboardContent } from "../../../styles/jss/mainStyles";

export default function RootLayout({ children }) {
  return (
    <AppContainer>
      <SideBar />
      <DashboardContent>{children}</DashboardContent>
    </AppContainer>
  );
}
