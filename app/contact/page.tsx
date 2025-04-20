export default function ContactPage() {
    return (
      <div>
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="border rounded p-2 w-full" />
          <input type="email" placeholder="Your Email" className="border rounded p-2 w-full" />
          <textarea placeholder="Your Message" className="border rounded p-2 w-full" rows={5}></textarea>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded">Send</button>
        </form>
      </div>
    );
  }