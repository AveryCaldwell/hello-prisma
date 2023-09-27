const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const messagesController = {
	getAllMessages: (req, res) => {
		prisma.messages
			.findMany()
			.then((messages) => {
				console.log("Retrieved messages:", messages);
				res.json(messages);
			})
			.catch((error) => {
				console.error("Error fetching messages:", error);
				res.status(500).json({ error: "Internal server error" });
			});
	},
	// createMessage: async (req, res) => {
	// 	const { email, name, content } = req.body;
	// 	try {
	// 		const message = await prisma.messages.create({
	// 			data: {
	// 				email,
	// 				name,
	// 				content,
	// 			},
	// 		});
	// 		res.json(message);
	// 	} catch (error) {
	// 		console.error("Error creating message:", error);
	// 		res.status(500).json({ error: "Internal server error" });
	// 	}
	// },
};

module.exports = messagesController;
