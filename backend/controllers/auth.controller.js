export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        // Add your logic here
    } catch (error) {
        // Handle error
    }
};

export const login = (req, res) => {
    console.log("loginUser");
    // Add your logic here
};

export const logout = (req, res) => {
    console.log("logoutUser");
    // Add your logic here
};
