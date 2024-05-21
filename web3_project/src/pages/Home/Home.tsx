import React from "react";
import GeneratePdfForm from "../../components/GeneratePdfForm";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Генерация PDF файла</h1>
      <GeneratePdfForm />
    </div>
  );
};

export default HomePage;
