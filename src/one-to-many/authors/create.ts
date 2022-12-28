import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createOneBook() {
  const result = await prisma.authors.create({
    data: {
      name: "Leonardo D.",
      books: {
        create: {
          name: "Monaliza",
        },
      },
    },
  });
  console.log(result);
}
async function createManyBooks() {
  const result = await prisma.authors.create({
    data: {
      name: "Martin...",
      books: {
        createMany: {
          data: [
            {
              name: "GOT 1",
            },
            {
              name: "GOT 2",
            },
            {
              name: "GOT 3",
            },
          ],
        },
      },
    },
  });
  console.log(result);
}

createManyBooks();
