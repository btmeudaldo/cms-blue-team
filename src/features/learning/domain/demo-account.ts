export type DemoRole = "student" | "instructor" | "admin";

type DemoAccount = {
  email: string;
  password: string;
};

const demoAccounts: Record<DemoRole, DemoAccount> = {
  student: {
    email: "student.test@blueteam.local",
    password: process.env.DEMO_STUDENT_PASSWORD ?? "",
  },
  instructor: {
    email: "instructor.test@blueteam.local",
    password: process.env.DEMO_INSTRUCTOR_PASSWORD ?? "",
  },
  admin: {
    email: "admin.test@blueteam.local",
    password: process.env.DEMO_ADMIN_PASSWORD ?? "",
  },
};

export function getDemoAccount(role: DemoRole): DemoAccount {
  return demoAccounts[role];
}
