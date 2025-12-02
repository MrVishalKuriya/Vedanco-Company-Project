const Contact = require('../models/Contact');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res, next) => {
    try {
        const { name, email, company, phone, interest, message } = req.body;

        const newContact = new Contact({
            name,
            email,
            company,
            phone,
            interest,
            message
        });

        await newContact.save();

        res.status(201).json({
            success: true,
            message: 'Message sent successfully!',
            data: {
                id: newContact._id,
                date: newContact.date
            }
        });
    } catch (error) {
        next(error);
    }
};
