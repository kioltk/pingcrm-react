import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { useForm } from '@inertiajs/inertia-react';
import { Dialog } from '@headlessui/react';


export default () => {
  const { data, setData, errors, post, processing } = useForm({
    email: 'johndoe@example.com',
    password: 'secret',
    remember: true
  });

  let [isOpen, setIsOpen] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    post(route('login.attempt'));
  }

  return (
    <div className='flex items-center justify-center min-h-screen p-6 bg-indigo-900'>
      <Helmet title='Login' />
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Overlay />

        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data will
          be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog>
      <div className='w-full max-w-md'>

        <div
          className='mt-8 overflow-hidden bg-white rounded-lg shadow-xl'
        >
          <button className='btn-indigo' onClick={() => setIsOpen(true)}>Open Dialog</button>
        </div>
      </div>
    </div>
  );
};
