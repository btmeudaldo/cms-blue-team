export type DemoRole = "student" | "instructor" | "admin";

type DemoAccount = {
  email: string;
  password: string;
};

const demoAccounts: Record<DemoRole, DemoAccount> = {
  student: {
    email: "student.test@blueteam.local",
    password: process.env.DEMO_STUDENT_PASSWORD || "blueteam",
  },
  instructor: {
    email: "instructor.test@blueteam.local",
    password: process.env.DEMO_INSTRUCTOR_PASSWORD || "blueteam",
  },
  admin: {
    email: "admin.test@blueteam.local",
    password: process.env.DEMO_ADMIN_PASSWORD || "blueteam",
  },
};

export function getDemoAccount(role: DemoRole): DemoAccount {
  return demoAccounts[role];
}

export function getDemoRedirectPath(role: DemoRole): "/courses" | "/admin" {
  return role === "student" ? "/courses" : "/admin";
}
