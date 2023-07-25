
  type AuthProps = {
    children: React.ReactNode; // 👈️ type children
  };
function AuthLayout(props: AuthProps) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-8 dark:text-gray-100 dark:bg-background duration-100">
      {/* <main className="bg-background p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]"> */}
          {props.children}
      {/* </main> */}
  </section>
  )
}

export default AuthLayout