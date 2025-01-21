import { useDispatch } from "react-redux";
import { Header } from "../../components/Header/Header";
import { navBarLinks } from "../../Typings/AppConstants";
import { NavBarLinkIndex } from "../../Typings/enums";
import { setCurrentTab } from "../../slices/AppSlices";
import { useEffect } from "react";

export default function About() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentTab(navBarLinks[NavBarLinkIndex.About]));
  }, [dispatch]);

  return (
    <div>
      <Header />
      About
    </div>
  );
}
