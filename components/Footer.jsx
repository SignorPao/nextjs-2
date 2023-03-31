const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white font-thin">
      <div className="max-w-[1240px] m-auto px-4 py-24 text-center flex flex-col gap-y-4">
        <p>
          &copy; {year}{" "}
          <span className="font-fira">Mark Powell Photography</span>
        </p>
        <p>
          Created by{" "}
          <a
            href="https://github.com/SignorPao"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 ease-in duration-150 font-medium"
          >
            @signorPao
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
