export default function Header() {
    return (
        <header className="h-[50px] text-[#E2E4F3] border-b border-[#E2E4F3] fixed top-0 left-0 right-0 z-50   bg-[#06070E]" >
            <div className="max-w-[1440px] items-center flex justify-between mx-auto h-full">
                <h1>Header</h1>
                <nav className="gap-4 flex" >
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </nav>
            </div>
        </header>
    )
}