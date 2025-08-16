import "./globals.css";

export const metadata = {
  title: "Awwward winning Gaming Website",
  description: "Awwward winning Gaming Website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
