import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

function InputFile(props) {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const user = useSelector(selectUser);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  }
  useEffect(() => {
    let fileReader, isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result)
        }
      }
      fileReader.readAsDataURL(file);
      props.habilitarBotao(true)
      props.carregarFotos(file)
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }

  }, [file]);

  return (
    <div className='w-10/12 min-h-[65%]  flex flex-col justify-center items-center bg-[#DCE2E5] rounded-md border border-dashed border-gray-600'>
      
      <label className='flex justify-center items-center cursor-pointer bg-[#FFC011] text-white w-1/2 h-14 rounded-sm ' >+ Selecione as imagens aqui
          <input
            type="file"
            id='image'
            accept='.png, .jpg, .jpeg'
            onChange={changeHandler}
            name="arquivo"
            className='hidden'
          />
      </label>
      {fileDataURL && <img src={fileDataURL} alt="preview" className='w-32 h-32 mt-4'/>}
    </div>
  );
}
export default InputFile;