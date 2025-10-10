import PageTransition from "@/components/layout/PageTransition";


export default function layout({ children }) {

    return (
        <div className="relative px-4 pt-24 pb-0 min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('/images/homeBG.png')]">
            <main className='flex items-center justify-center'>
                {children}
            </main>
        </div>
    )
}
