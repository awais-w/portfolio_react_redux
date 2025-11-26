import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import ContactForm from '../ui/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white/40 backdrop-blur-xl border border-white/50 p-8 md:p-12 rounded-3xl shadow-2xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-thin text-slate-900 mb-6">Get In Touch</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to drop me a message!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="w-full">
              <ContactForm />
            </div>

            {/* Contact Info & Buttons */}
            <div className="space-y-8 flex flex-col justify-start h-full">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Details</h3>
                <a
                  href="mailto:awais@alwaysawais.com"
                  className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Mail size={20} className="text-blue-600" />
                  awais@alwaysawais.com
                </a>
                <div className="flex items-center gap-3 text-slate-600">
                  <Linkedin size={20} className="text-blue-600" />
                  <a href="https://www.linkedin.com/in/alwaysawais/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn Profile</a>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Github size={20} className="text-blue-600" />
                  <a href="https://github.com/awais-w" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">GitHub Profile</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
