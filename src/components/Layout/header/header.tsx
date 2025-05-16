import { HeaderClientWrapper } from "./headerSections/headerClientWrapper";
import { HeaderServerContent } from "./headerSections/headerServerContent";


export default function Header() {
  return (
    <HeaderClientWrapper>
      <HeaderServerContent />
    </HeaderClientWrapper>
  );
}
