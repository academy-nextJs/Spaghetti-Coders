
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
