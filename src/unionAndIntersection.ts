// union "|" , its mean "or"

type UserRole = "admin" | "user";

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
};

// intersection "&"

type Employee = {
  id: string;
  name: string;
  phone: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager; // his  role is employee also manager

const ChowdhuryShaheb: EmployeeManager = {
  id: "123",
  name: "Chowdhury Shaheb",
  phone: "0133343434",
  designation: "manager",
  teamSize: 12,
}; // if I not write even one proparty from manager or  employee, then its show error
