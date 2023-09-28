import "./globals.scss";
import { Inter } from "next/font/google";
import { Footer, Header } from "@/components/ui";
import SearchHistoryProvider from "@/utils/SearchHistoryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "",
  title: {
    default: "VaseStylé",
    template: `%s | VaseStylé`,
  },
  description:
    "Découvrez la beauté émotionnelle des vases esthétiques de VaseStylé. Chaque vase raconte une histoire unique, capturant l'amour, la passion et l'émerveillement. Laissez-vous envoûter par des designs modernes et élégants qui transforment votre foyer en un havre de charme et d'émotion. Exprimez votre sensibilité artistique avec nos vases, des œuvres d'art qui parlent à votre cœur. Créez un espace qui reflète vos émotions et votre style avec les vases esthétiques de VaseStylé.",
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <SearchHistoryProvider>
            <Header />
          </SearchHistoryProvider>
          <main>{children}</main>
          <Footer />
        </div>
        <div id="popup-portal"></div>
      </body>
    </html>
  );
}
