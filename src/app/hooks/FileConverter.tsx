import {useState} from 'react'


function useFileConverter() {
    const [image, setImage] = useState<string | null>(null);
  
    function convertFile(files: FileList | null) {
      if (files) {
        const fileRef = files[0] || '';
        const fileType: string = fileRef.type || '';
        console.log('This file upload is of type:', fileType);
  
        // Check if the file type is one of the accepted types
        const acceptedTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/jpg'];
        if (!acceptedTypes.includes(fileType)) {
          alert('Invalid file type. Only PNG, JPEG, WEBP, and JPG are allowed.');
          return null
        }
  
        const reader = new FileReader();
        reader.readAsBinaryString(fileRef);
        reader.onload = (ev: any) => {
          // convert it to base64
          setImage(`data:${fileType};base64,${btoa(ev.target.result)}`);
        };
      }
    }
  
    return [image, convertFile] as const;
  }

export default useFileConverter;



