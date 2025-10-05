import Header from "./_components/header"

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl w-full mx-auto md:px-8">
        {
          children
        }
      </div>
    </>
  )
}