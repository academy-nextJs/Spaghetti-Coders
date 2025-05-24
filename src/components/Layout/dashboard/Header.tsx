export default function DashboardHeader({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) {
  return (
    <div className="h-[10vh] bg-white dark:bg-black rounded-3xl p-6 flex">
      {children}
    </div>
  )
}
