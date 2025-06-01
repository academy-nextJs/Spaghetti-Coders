import { Revealer } from "../../components/PageTransition/Revealer";

export default function MainTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Revealer />
      {children}
    </>
  );
}