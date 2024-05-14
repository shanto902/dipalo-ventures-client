import { CldUploadWidget } from 'next-cloudinary';
const VideoUpload = () => {
  return (
    <CldUploadWidget
      signatureEndpoint="/api/signed-video"
      onSuccess={(result) => {
        console.log(result.info);
      }}
    >
      {({ open }) => {
        return <button onClick={() => open()}>Upload an Image</button>;
      }}
    </CldUploadWidget>
  );
};

export default VideoUpload;
