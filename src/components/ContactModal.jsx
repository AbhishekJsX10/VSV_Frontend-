import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import { toast } from 'react-toastify';
import { API_BASE_URL, ENDPOINTS } from '../config/api';

const ContactModal = () => {
  const { isModalOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const regex = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/;
    return regex.test(phone);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const sanitizedValue = value.replace(/[^\d+]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: sanitizedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid Indian phone number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.CONTACT_MAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success) {
        toast(data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          style: {
            background: 'black',
            color: 'white',
            border: '1px solid rgba(199, 200, 196, 0.2)',
          },
          progressStyle: {
            background: '#C7C8C4'
          }
        });
        closeModal();
        setFormData({ name: '', email: '', phone: '' });
      } else {
        toast.error(data.error || 'Something went wrong', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          style: {
            background: 'black',
            color: 'white',
            border: '1px solid rgba(199, 200, 196, 0.2)',
          },
          progressStyle: {
            background: '#C7C8C4'
          }
        });
      }
    } catch (error) {
      toast.error('Failed to send message', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        style: {
          background: 'black',
          color: 'white',
          border: '1px solid rgba(199, 200, 196, 0.2)',
        },
        progressStyle: {
          background: '#C7C8C4'
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isModalOpen) return null;

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={closeModal}></div>
          
          <div className="relative bg-black p-5 rounded-lg w-[350px] mx-auto border border-[#C7C8C4]/20">
            <h2 className="text-lg font-semibold mb-3 text-center text-[#C7C8C4]">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#C7C8C4] mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md border ${errors.name ? 'border-red-500' : 'border-[#C7C8C4]/20'} 
                    bg-black text-[#C7C8C4] p-2 text-sm transition-all duration-200
                    focus:outline-none focus:border-[#C7C8C4] placeholder-[#C7C8C4]/50`}
                  placeholder="Abhishek Chaturvedi"
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#C7C8C4] mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-[#C7C8C4]/20'} 
                    bg-black text-[#C7C8C4] p-2 text-sm transition-all duration-200
                    focus:outline-none focus:border-[#C7C8C4] placeholder-[#C7C8C4]/50`}
                  placeholder="xyz@gmail.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#C7C8C4] mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md border ${errors.phone ? 'border-red-500' : 'border-[#C7C8C4]/20'} 
                    bg-black text-[#C7C8C4] p-2 text-sm transition-all duration-200
                    focus:outline-none focus:border-[#C7C8C4] placeholder-[#C7C8C4]/50`}
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                <p className="mt-1 text-xs text-[#C7C8C4]/70">Format: +91 or 0 followed by 10 digits</p>
              </div>
              <div className="flex flex-col items-center gap-2 mt-4">
                <button
                  type="submit"
                  className={`w-28 py-1.5 text-sm font-medium text-black ${isLoading 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-[#C7C8C4] hover:bg-[#C7C8C4]/90'} rounded-md 
                    focus:outline-none transition-all duration-200`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 border-t-2 border-b-2 border-black rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Submit'
                  )}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-28 py-1.5 text-sm font-medium text-[#C7C8C4] border border-[#C7C8C4]/20 
                    rounded-md hover:bg-[#C7C8C4]/10 transition-all duration-200 focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
