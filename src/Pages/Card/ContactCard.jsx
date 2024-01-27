

const ContactCard = () => {



  const hendleSend = e => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')

    console.log(name, email, message);
  }

  return (
    <div className="text-slate-400">
      <div>
        <h2 className="text-4xl font-bold pb-4">Drop us a line</h2>
        <p>
          Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat
          dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras
          sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis
          malesuada felis quis, ultricies convallis neque. Pellentesque
          tristique fringilla tempus. Vivamus bibendum nibh in dolor pharetra, a
          euismod nulla dignissim.
        </p>
      </div>
      <div className="shrink-0 shadow-2xl bg-base-100 mb-16 mt-5">
        <form onClick={hendleSend} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              type="text"
              placeholder="Message"
              name="message"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-red-400">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;