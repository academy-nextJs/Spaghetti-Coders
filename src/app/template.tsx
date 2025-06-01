import { Revealer } from "../components/PageTransition/Revealer";

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Revealer />
      {children}
    </>
  );
}