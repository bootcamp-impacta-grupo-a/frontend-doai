import axios from 'axios';
import {useEffect, useRef, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

export function DragNDrop(props) {
  const [files, setFiles] = useState([]);
  const inputEl = useRef(null);
  const user = useSelector(selectUser);
  const {getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    maxFiles:1,
    // onDropRejected(fileRejections, event) {
    //     alert('ERRO ')
    // },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => {
        return Object.assign(file, {
        preview: URL.createObjectURL(file),
        
      })}));
    },  
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

  useEffect(() => {
    if (files.length > 1) setFiles([])
    if (files.length == 1) {
      props.habilitarBotao(true) 
      //onButtonClick()
    }

  }, [files]);
  
  const onButtonClick = () => {
    // `current` aponta para o evento de `focus` gerado pelo campo de texto
    // inputEl.current.focus();
    // console.log(inputEl.current.files[0])

    var formData = new FormData();
    formData.append("formData", files[0]);
    axios.post('https://localhost:44353/Doai/NotaFiscal/UploadNota', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${user.token}` 
    }
    }).then((response) => {
     console.log(response)
    })
    .catch((e) => {
      console.log(e)
    })
  };

  return (
    <section className="bg-[#DCE2E5] border border-dashed border-black w-4/5 flex flex-col justify-center items-center rounded-md">
      <div {...getRootProps({className: 'dropzone'})} className='w-full flex flex-col h-52 cursor-pointer'>
        <input   {...getInputProps()} />
        <p className='bg-[#FFC011] px-12 py-2  mt-24  rounded-sm text-white font-texto w-3/6 mx-auto text-center '>+ Selecione ou arraste as imagens aqui</p>
      </div>
      <aside className='flex flex-row flex-wrap mt-4'>
        {thumbs}
      </aside>
    </section>
  );
}

