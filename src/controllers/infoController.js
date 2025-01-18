const express = require('express');
// Sample data
const info = {
    name: "Flight Info",
    version: "1.0.0",
    description: "This is a sample API for flight information."
};

// GET API for info
const getInfo = (req, res) => {
    return res.json({
        success:true,
        message:'Info fetched successfully',
        error:{},
        data:{info}
    });
};

module.exports = {
    getInfo
};