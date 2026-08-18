export type DemoRole = "student" | "instructor" | "admin";

type DemoAccount = {
  email: string;
  password: string;
};

const demoAccounts: Record<DemoRole, DemoAccount> = {
  student: {
    email: "student.test@blueteam.com",
    password: "blueteam",
  },
  instructor: {
    email: "instructor.test@blueteam.com",
    password: "blueteam",
  },
  admin: {
    email: "admin.test@blueteam.com",
    password: "blueteam",
  },
};

export function getDemoAccount(role: DemoRole): DemoAccount {
  return demoAccounts[role];
}

export function getDemoRedirectPath(role: DemoRole): "/courses" | "/admin" {
  return role === "student" ? "/courses" : "/admin";
}
