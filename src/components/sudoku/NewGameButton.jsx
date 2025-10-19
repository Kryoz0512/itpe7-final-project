export default function NewGameButton({ title, ...props }) {

    return(
        <button {...props} className="mt-4 border-2 cursor-pointer border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition">
            {title}
        </button>
    )
}