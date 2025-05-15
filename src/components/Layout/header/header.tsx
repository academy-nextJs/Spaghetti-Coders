import { HeaderClientWrapper } from "./headerClientWrapper";
import { HeaderServerContent } from "./headerServerContent";


export default function Header() {
  return (
    <HeaderClientWrapper>
      <HeaderServerContent />
    </HeaderClientWrapper>
  );
}
