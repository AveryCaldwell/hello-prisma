import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const alice = await prisma.messages.upsert({
		where: { email: "alice@prisma.io" },
		update: {},
		create: {
			email: "alice@prisma.io",
			name: "Alice",
		},
	});

	const bob = await prisma.messages.upsert({
		where: { email: "bob@prisma.io" },
		update: {},
		create: {
			email: "bob@prisma.io",
			name: "Bob",
		},
	});

	const charlie = await prisma.messages.upsert({
		where: { email: "charlie@prisma.io" },
		update: {},
		create: {
			email: "charlie@prisma.io",
			name: "Charlie",
		},
	});

	console.log("Data seeding completed.");
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

// to refresh server
// npx prisma migrate dev --name your-migration-name
