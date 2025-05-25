export default function DashboardHeaderLayout({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) {
  return (
    <div className="h-fit flex justify-between bg-white dark:bg-black rounded-3xl p-6 ">
      {children}
    </div>
  )
}
