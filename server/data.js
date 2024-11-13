let storedData = ""; // Initialize the data variable to hold the information

// Function to set the data
function setData(data) {
    storedData = data;
}

// Function to get the stored data
function getData() {
    return storedData;
}

module.exports = { setData, getData };