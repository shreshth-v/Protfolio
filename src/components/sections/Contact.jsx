import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import toast from "react-hot-toast";
import axios from "axios";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending message...");

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);

      const res = await axios.post("https://formspree.io/f/xyzeaqnb", form, {
        headers: {
          Accept: "application/json",
        },
      });

      if (res.status === 200) {
        toast.success("Message sent!", { id: toastId });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send. Please try again.", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId });
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form
            className="space-y-6"
            action="https://formspree.io/f/xyzeaqnb"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
          <div className="mt-10 flex justify-center gap-6">
            <a
              href="https://github.com/shreshth-v"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 hover:border-blue-500/30 
               text-white p-4 rounded-full transition hover:-translate-y-1 
               hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/shreshth21/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 hover:border-blue-500/30 
               text-white p-4 rounded-full transition hover:-translate-y-1 
               hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
