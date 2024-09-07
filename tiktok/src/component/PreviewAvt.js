import { useState, useEffect } from "react";

export default function PreviewAvt() {

    const [preview, setPreview] = useState();
    const [file, setFile] = useState();
    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setPreview(reader.result);
            }
        } else {
            setPreview(null);
        }
        return () => {
            setPreview(null)
        }
    }, [file]);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    }
    return (
        <div>
            <input type="file" onChange={handleChange} />
            {preview && <img src={preview} alt="preview" />}
        </div>
    )
}