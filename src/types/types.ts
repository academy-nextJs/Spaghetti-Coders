
export interface LandingCard2Props {
    text: string;
    count?: number;
    src: string;
    href: string;
  }


export interface CommonCardCommentProps {
  text?: string;
  name?: string;
  date?: string;
  imageUrl?: string
}


export interface LoginBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fill?: string;
  size?: number;
  height?: number;
width?: number;
[key: string]: unknown;

}

