// Union -> |
// Intersection -> &

type UserRole = 'admin' | 'user';

const getDashboard = (role: UserRole) => {
    if (role === "admin") {
        return "Admin Dashboard";
    } else if (role === "user") {
        return "User dashboard";
    } else {
        return "guest dashboard"
    }
}

// can't write anything outside type definition
// getDashboard("guest");


// --------------------------------- intersection: single '&' --------------------------------
type Employee = {
    id: string;
    name: string;
    phoneNo: string;
}
type Manager = {
    designation: string;
    teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
    id: "123",
    name: "Chowdhury Shaheb",
    phoneNo: "017",
    designation: "manager",
    teamSize: 20,
  };