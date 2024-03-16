export default function Copyright() {
    const currentYear = new Date().getFullYear();  
    return ( 
        <section id="copyright" className="bg-primary text-[#fff]" >
            <div className="container my-6">
                <small>© {currentYear} – Felipe Gomes</small>
            </div>
        </section>
)}