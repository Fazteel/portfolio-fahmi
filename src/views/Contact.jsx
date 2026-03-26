import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const accessKey = import.meta.env.VITE_ACCESS_KEY;

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    ...formData
                })
            });

            const result = await response.json();
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); 
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <div id="contact" className="bg-white dark:bg-gray-800 py-16">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                        Have a project in mind or want to discuss opportunities? Feel free to reach out.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="flex flex-col space-y-8 bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8">
                                I am currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 dark:bg-gray-800 dark:text-blue-400 rounded-full">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                </span>
                                <span className="text-gray-700 dark:text-gray-300 font-medium">fahmiandika31@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 dark:bg-gray-800 dark:text-blue-400 rounded-full">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                                </span>
                                <span className="text-gray-700 dark:text-gray-300 font-medium">082113440891</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 dark:bg-gray-800 dark:text-blue-400 rounded-full">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                                </span>
                                <span className="text-gray-700 dark:text-gray-300 font-medium">Karawang, Jawa Barat</span>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-start text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-start text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-start text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                                placeholder="How can I help you?"
                            ></textarea>
                        </div>
                        
                        <button type="submit" disabled={status === 'submitting'}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none shadow-md hover:shadow-lg flex justify-center items-center"
                        >
                            {status === 'submitting' ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            ) : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-600 dark:text-green-400 text-center font-medium mt-4">Message sent successfully! I&apos;ll get back to you soon.</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-600 dark:text-red-400 text-center font-medium mt-4">Oops! Something went wrong. Please try again later.</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;