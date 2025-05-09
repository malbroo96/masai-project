function getAccessLevel(user) {
    const { role, experience, active, department } = user;

    if (role === "admin") {
        if (!active) return "Admin Access Revoked";
        if (experience > 5 && department === "IT") return "Full IT Admin Access";
        if (experience > 5) return "Full General Admin Access";
        return "Limited Admin Access";
    }

    else if (role === "manager") {
        if (!active) return "Manager Access Revoked";
        if (experience > 3 && department === "Sales") return "Full Sales Manager Access";
        if (experience > 3) return "Full Manager Access";
        return "Limited Manager Access";
    }

    else if (role === "user") {
        if (!active) return "User Access Revoked";
        if (department === "Support") return "Priority Support Access";
        return "User Access";
    }

    else {
        return "Invalid Role";
    }
}
