export default function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-fit p-1.5 rounded-full bg-[#F3F3F3]">
      {children}
    </div>
  );
}