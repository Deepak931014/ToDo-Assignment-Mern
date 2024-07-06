import logo from '../assets/logo.jpeg';

const Heading = () => {
    return (
        <div className="flex items-center justify-center mt-8">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="text-2xl font-semibold ml-4">ToDo MERN Application</span>
        </div>

    )
}

export default Heading