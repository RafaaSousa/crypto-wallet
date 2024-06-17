import Aside from "../components/Aside";
import Content from "../components/Content";

import "@/app/home.css";

export default function Home() {
  return (
    <div className="container">
      <Aside />

      <Content />
      
    </div>
  );
}
