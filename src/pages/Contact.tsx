import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_an7p6eo',
        'template_z2ye651',
        form.current,
        'dNRbAAwSAYTpVIhJR'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setIsSending(false);
          if (form.current) form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setError('Failed to send message. Please try again or contact me directly at sanjaisssmuthu@gmail.com');
          setIsSending(false);
        }
      );
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-4 pt-32">
      <motion.form 
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#64ffda] text-gray-300">Contact for Opportunities</p>
          <p className="text-gray-300 py-4">Submit the form below or shoot me an email</p>
        </div>
        <input 
          className="bg-[#ccd6f6] p-2 rounded text-black placeholder-gray-600" 
          type="text" 
          placeholder="Name" 
          name="user_name" 
          required 
        />
        <input 
          className="my-4 p-2 bg-[#ccd6f6] rounded text-black placeholder-gray-600" 
          type="email" 
          placeholder="Email" 
          name="user_email" 
          required 
        />
        <textarea 
          className="bg-[#ccd6f6] p-2 rounded text-black placeholder-gray-600" 
          name="message" 
          rows={10} 
          placeholder="Message"
          required 
        ></textarea>
        <button 
          type="submit"
          disabled={isSending}
          className={`text-white border-2 hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f] px-4 py-3 my-8 mx-auto flex items-center ${
            isSending ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSending ? 'Sending...' : 'Send'}
        </button>
        {isSent && (
          <p className="text-green-500 text-center">Message sent successfully!</p>
        )}
        {error && (
          <div className="text-center">
            <p className="text-red-500">{error}</p>
            <p className="text-gray-400 mt-2 text-sm">
              You can also contact me directly at{' '}
              <a href="mailto:sanjaisssmuthu@gmail.com" className="text-[#64ffda] hover:underline">
                sanjaisssmuthu@gmail.com
              </a>
            </p>
          </div>
        )}
      </motion.form>

      <div className="flex gap-8 mt-8">
        <a href="https://github.com/MUTHU-SANJAI" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#64ffda]">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/muthu-sanjai-as/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#64ffda]">
          <Linkedin size={24} />
        </a>
        <a href="mailto:sanjaisssmuthu@gmail.com" className="text-gray-300 hover:text-[#64ffda]">
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default Contact;