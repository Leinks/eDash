import { Sidebar } from "../components/Sidebar/Sidebar";


type AdminProps = {
  children: React.ReactNode; // 👈️ type children
};
function AdminLayout(props: AdminProps) {


  return (
   
    
    <section className="flex max-h-screen  items-center justify-center pt-1 dark:text-gray-100 dark:bg-background duration-100">
            {/* <Sidebar/> */}
          {/* <div className=" overflow-hidden rounded-[0.5rem] border bg-background shadow"> */}
            {props.children}
      {/* </div> */}
        </section>

 
  )
}

export default AdminLayout