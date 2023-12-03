import { useRecoilValue } from "recoil";
import LoginCard from "../components/LoginCard";
import SignupCard from "../components/SignupCard";
import authScreenAtom from "../atoms/authAtom";

const AuthPage = () => {
	const authScreenState = useRecoilValue(authScreenAtom);
	// console.log(authS.......) to confirm the default state

	return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
};

export default AuthPage;
