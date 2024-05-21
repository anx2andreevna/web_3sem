import { render, screen, fireEvent } from "@testing-library/react";
import GeneratePdfForm from "./GeneratePdfForm";

describe("GeneratePdfForm", () => {
  test("корректно отображает вводимые данные формы", () => {
    render(<GeneratePdfForm />);

    const textInput = screen.getByLabelText("Введите текст:");
    const imageInput = screen.getByLabelText("Загрузите изображение:");

    expect(textInput).toBeInTheDocument();
    expect(imageInput).toBeInTheDocument();
  });

  test("обновляет состояние текста при изменении входных данных", () => {
    render(<GeneratePdfForm />);

    render(<GeneratePdfForm />);

    const textInput = screen.getByLabelText("Введите текст:") as HTMLInputElement;
    fireEvent.change(textInput, { target: { value: "Hello World" } });

    expect(textInput.value).toBe("Hello World");
  });

  test("обновляет состояние изображения при изменении входного файла", () => {
    render(<GeneratePdfForm />);

    const imageFile = new File(["(⌐□_□)"], "test.png", { type: "image/png" });
    const imageInput = screen.getByLabelText("Загрузите изображение:") as HTMLInputElement;
    fireEvent.change(imageInput, { target: { files: [imageFile] } });

    const files = imageInput.files;
    if (files !== null) {
      expect(files).toHaveLength(1);
      expect(files[0].name).toBe("test.png");
    }
  });
});
