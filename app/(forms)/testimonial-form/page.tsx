'use client';
import React, { FormEvent, useState } from 'react'; // Import React
import directus from '@/lib/directus';
import { createItem, uploadFiles, withToken } from '@directus/sdk';
import { CldUploadWidget } from 'next-cloudinary';
import { FaUpload } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

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
      const formDataToSend = new FormData();
      formDataToSend.append('title', 'Example');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('designation', formData.designation);
      formDataToSend.append('companyName', formData.companyName);
      formDataToSend.append('companyLogo', formData.companyLogo);
      formDataToSend.append('videoLink', formData.videoLink);

      // Log form information
      console.log('Form submitted with the following information:');
      formDataToSend.forEach((value, key) => {
        console.log(key, value);
      });

      const response = await directus.request(
        createItem('founderVideos', formData)
      );
      console.log('Response from Directus:', response);
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
      const file = files[0];
      const logoFormData = new FormData();
      logoFormData.append('file', file);

      try {
        console.log(process.env.ACCESS_TOKEN);
        const result = await directus.request(
          withToken(
            process.env.ACCESS_TOKEN as string,
            uploadFiles(logoFormData)
          )
        );
        console.log(result);
        const companyLogo = result.data.full_url;
        setFormData((prevFormData) => ({
          ...prevFormData,
          companyLogo: companyLogo,
        }));
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Link href={'/'} className="mb-10">
        <Image
          className="h-auto w-auto"
          src="/logo.svg"
          alt="logo"
          width={200}
          height={200}
        />
      </Link>
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="card-body max-w-md mx-auto gap-4"
      >
        {/* Input fields */}
        <label className="input input-warning input-bordered flex items-center gap-2">
          <span className="font-bold"> Name :</span>
          <input
            className="grow"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>

        <label className="input input-warning input-bordered flex items-center gap-2">
          <span className="font-bold"> Designation :</span>
          <input
            type="text"
            value={formData.designation}
            onChange={(e) =>
              setFormData({ ...formData, designation: e.target.value })
            }
          />
        </label>

        <label className="input input-warning input-bordered flex items-center gap-2">
          <span className="font-bold"> Company Name :</span>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
          />
        </label>

        <label className="flex input-warning flex-col items-start justify-center gap-2">
          <span className="font-bold flex-1 text-white"> Company Logo </span>
          <input
            className="file-input file-input-bordered file-input-warning !w-full"
            type="file"
            onChange={handleLogoFileChange}
          />
        </label>
        {/* Cloudinary upload widget */}
        <CldUploadWidget
          signatureEndpoint="/api/signed-video"
          options={{
            sources: ['local'],
            maxVideoFileSize: 100000000, // Set file size to 100MB
            multiple: false,
            resourceType: 'video',
          }}
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
            return (
              <button
                className="mx-auto btn-warning btn w-full"
                onClick={() => open()}
              >
                <FaUpload /> Upload Video Testimony
              </button>
            );
          }}
        </CldUploadWidget>
        <button className="mx-auto btn btn-warning max-w-sm" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
