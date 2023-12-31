import "../styles/tailwind.css";
import AppContainer from "./(components)/AppContainer";
import { Providers } from "./(components)/Providers";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <body>
                <Providers>
                    <AppContainer>
                        <main className="my-12">{children}</main>
                    </AppContainer>
                </Providers>
            </body>
        </html>
    );
}
