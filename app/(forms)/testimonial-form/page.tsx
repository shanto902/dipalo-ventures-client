'use client';
import React, { FormEvent, useState } from 'react'; // Import React
import { CldUploadWidget } from 'next-cloudinary';
import directus from '@/lib/directus';
import { createItem, updateFile } from '@directus/sdk';

const Form = () => {
  // Define state variables
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    designation: '',
    status: 'pending',
    videoLink: '',
    companyLogo: '',
  });

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Log form information
      console.log('Form submitted with the following information:');
      console.log(formData);
      await directus.request(createItem('founderVideos', formData));
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  // Handle file selection for company logo
  const handleLogoFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Check if files exist and not empty
      const file = files[0];
      try {
        const uploadResponse = await directus.request(updateFile('demo', file));
        console.log(uploadResponse);
        const companyLogo = uploadResponse.data.data.full_url;
        setFormData({
          ...formData,
          companyLogo: companyLogo,
        });
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div>
      {/* Cloudinary upload widget */}
      <CldUploadWidget
        signatureEndpoint="/api/signed-video"
        onSuccess={(result) => {
          if (typeof result.info === 'object' && result.info !== null) {
            const videoLink = result.info.url;
            setFormData({ ...formData, videoLink });
          } else {
            console.log('Result info is not an object or is null');
          }
        }}
      >
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Input fields */}
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Name..."
        />
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) =>
            setFormData({ ...formData, companyName: e.target.value })
          }
          placeholder="Company Name..."
        />
        <input
          type="text"
          value={formData.designation}
          onChange={(e) =>
            setFormData({ ...formData, designation: e.target.value })
          }
          placeholder="Designation..."
        />
        {/* Input field for company logo */}
        <input type="file" onChange={handleLogoFileChange} />{' '}
        {/* Change event handler for file selection */}
        <input
          type="text"
          value={formData.companyLogo}
          readOnly
          placeholder="Company Logo..."
        />{' '}
        {/* Read-only input for display */}
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
