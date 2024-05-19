import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

const GeneratePdfForm: React.FC = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<FileList | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files);
    }
  };

  return (
    <div className="container py-4">
      <form>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Введите текст:
          </label>
          <input type="text" className="form-control" id="text" value={text} onChange={handleTextChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Загрузите изображение:
          </label>
          <input type="file" className="form-control" id="image" accept=".png,.jpg" onChange={handleImageChange} />
        </div>
        {text && image && (
          <PDFDownloadLink document={<MyDocument name={text} picture={image} />} fileName="generated_pdf.pdf" className="download-link" id="pdf-download-link">
            {({ loading }) => (loading ? "Создание PDF..." : "Скачать PDF")}
          </PDFDownloadLink>
        )}
      </form>
    </div>
  );
};

export default GeneratePdfForm;
