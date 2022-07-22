import {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';


export function DragNDrop(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div className='inline-flex rounded-md border border-stone-400 border-solid mb-2 mr-2 w-24 h-24 p-1 box-border' key={file.name}>
      <div className='flex min-w-0 overflow-hidden'>
        <img
          src={file.preview}
          className="block w-auto h-full"
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className="bg-[#DCE2E5] border border-dashed border-black w-4/5 flex flex-col justify-center items-center rounded-md">
      <div {...getRootProps({className: 'dropzone'})} className='w-full flex flex-col h-52 cursor-pointer'>
        <input {...getInputProps()} />
        <p className='bg-[#FFC011] px-12 py-2  mt-24  rounded-sm text-white font-texto w-3/6 mx-auto text-center '>+ Selecione ou arraste as imagens aqui</p>
      </div>
      <aside className='flex flex-row flex-wrap mt-4'>
        {thumbs}
      </aside>
    </section>
  );
}

