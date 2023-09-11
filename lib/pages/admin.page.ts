import { Page } from "@playwright/test";

export class AdminPage {
  constructor(private readonly page: Page) {}

  readonly letMeHack = this.page.getByRole("button", { name: "Let me hack!" });

  readonly username = this.page.getByTestId("username");
  readonly password = this.page.getByTestId("password");
  readonly submit = this.page.getByTestId("submit");

  readonly logoutLink = this.page.getByRole("link", { name: "Logout" });

  // Example of how you can chain locators together from variables
  readonly messageCountLink = this.page.locator('[href*="#/admin/messages"]');
  readonly messageCountSpan = this.messageCountLink.locator("span");

  async goto() {
    this.page.goto("/#/admin", { waitUntil: "networkidle" });
  }

  async loginWith(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submit.click();
  }
}
