const Contact = () => {
  return (
    <div className="max-w-[1240px] m-auto px-4 py-16 text-center">
      <h1 className="title">Let's work together</h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="border shadow-lg p-3 w-full mt-2 bg-teal-900 hover:bg-yellow-300 text-white hover:text-teal-900 ease-in duration-150 text-lg font-medium">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
