

const Navbar = ({handleChangeMode, isDarkMode}: {handleChangeMode : () => void, isDarkMode: boolean}) => {
  return (
    <div className={`w-full flex z-50 fixed top-0 py-6 px-20 ${isDarkMode ? "bg-darkModeDb text-white" : "bg-white text-black"} `}>
        <div className="flex justify-between items-center w-full">
            <div>
              <h3 className="font-bold text-2xl">Where in the world? </h3>
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={ handleChangeMode}>
                <span >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill={isDarkMode ? "white" : "black"}
                    className="bi bi-moon"
                    viewBox="0 0 16 16"
                    >
                        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                    </svg>
                </span>
                <span className={`${isDarkMode ? "text-white" : "text-darkModeDb"}`}>Dark Mode</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar