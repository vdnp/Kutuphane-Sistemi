import { AppContainer, Content } from "../../../styles/jss/mainStyles";

export default function RootLayout({ children }) {
  return (
    <AppContainer>
      <Content>{children}</Content>
    </AppContainer>
  );
}
