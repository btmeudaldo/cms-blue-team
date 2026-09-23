import { expect, type Page } from "@playwright/test";

export const TEST_CREDENTIALS = {
  student: {
    email: process.env.E2E_STUDENT_EMAIL || "student@blueteam.com",
    password: process.env.E2E_STUDENT_PASSWORD || "blueteam",
  },
  admin: {
    email: process.env.E2E_ADMIN_EMAIL || "admin@blueteam.com",
    password: process.env.E2E_ADMIN_PASSWORD || "blueteam",
  },
  instructor: {
    email: process.env.E2E_INSTRUCTOR_EMAIL || "instructor@blueteam.com",
    password: process.env.E2E_INSTRUCTOR_PASSWORD || "blueteam",
  },
};

export async function signInTestUser(page: Page, role: "admin" | "student" | "instructor") {
  const credentials = TEST_CREDENTIALS[role];
  for (let attempt = 0; attempt < 3; attempt++) {
    await page.goto("/login");
    await page.locator('input[name="email"]').fill(credentials.email);
    await page.locator('input[name="password"]').fill(credentials.password);
    await page.getByRole("button", { name: /ingresar a la plataforma/i }).click();
    try {
      await expect(page).toHaveURL(/\/courses$/, { timeout: 5000 });
      return;
    } catch (err) {
      if (attempt === 2) {
        throw err;
      }
      await page.waitForTimeout(1500);
    }
  }
}

export async function signInAsStudent(page: Page) {
  await signInTestUser(page, "student");
}

export async function signInAsAdmin(page: Page) {
  await signInTestUser(page, "admin");
}

export async function signOut(page: Page) {
  const logoutBtn = page.getByTitle("Cerrar sesión");
  if (await logoutBtn.isVisible()) {
    await logoutBtn.click();
    await expect(page).toHaveURL(/\/login$/);
  }
}

