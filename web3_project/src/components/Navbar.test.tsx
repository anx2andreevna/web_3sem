import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("корректно отображает навигационные ссылки", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const homeLink = screen.getByText("Home");
    const dynamicPaginationLink = screen.getByText("DynamicPagination");
    const aboutUsLink = screen.getByText("About us");
    const contactsLink = screen.getByText("Contacts");

    expect(homeLink).toBeInTheDocument();
    expect(dynamicPaginationLink).toBeInTheDocument();
    expect(aboutUsLink).toBeInTheDocument();
    expect(contactsLink).toBeInTheDocument();
  });

  test("отображает ссылку на таблицу при проверке аутентификации", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const tableLink = screen.queryByText("Table");
    expect(tableLink).toBeNull();

    const loginButton = screen.getByRole("button", { name: /войти/i });
    fireEvent.click(loginButton);

    const updatedTableLink = screen.getByText("Table");
    expect(updatedTableLink).toBeInTheDocument();
  });

  test("переключает состояние аутентификации при нажатии кнопки входа", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const loginButton = screen.getByRole("button", { name: /войти/i });
    fireEvent.click(loginButton);
    expect(loginButton.textContent).toEqual("Выйти");

    fireEvent.click(loginButton);
    expect(loginButton.textContent).toEqual("Войти");
  });
});
