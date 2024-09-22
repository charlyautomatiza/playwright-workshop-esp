import { Page } from "@playwright/test";

export class AdminPage {
  constructor(private readonly page: Page) {}

  readonly letMeHack = this.page.getByRole("button", { name: "Let me hack!" });
  readonly username = this.page.getByTestId("username");
  readonly password = this.page.getByTestId("password");
  readonly submit = this.page.getByTestId("submit");
  readonly logoutLink = this.page.getByRole("link", { name: "Logout" });

  // Ejemplo de cómo encadenar locators a partir de variables
  readonly messageCountLink = this.page.locator('[href*="#/admin/messages"]');
  readonly messageCountSpan = this.messageCountLink.locator("span");

  /**
   * Navigates to the admin page and waits for the network to be idle.
   */
  async goto() {
    await this.page.goto("/#/admin", { waitUntil: "networkidle" });
  }

  /**
   * Realiza Log in con el username y password provistos
   * @param username - El username para hacer log in.
   * @param password - El password para hacer log in.
   */
  async loginWith(username: string, password: string) {
      await this.username.fill(username);
      await this.password.fill(password);
      await this.submit.click();
  }
}
