
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="homepage">
        <Header/>
        <Main />
        <Footer/>
    </div>
  );
}
